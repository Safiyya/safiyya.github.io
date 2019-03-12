<template>
  <div
    class="about flex flex-col justify-center items-center container mx-auto"
    v-if="isLoaded"
  >

    <div class=" flex flex-wrap w-full  items-start justify-between mb-4 ">
      <div
        v-for="(skill, six) in skills"
        :key="skill.category"
        class="flex flex-col items-center group md:w-1/2 w-full my-4 "
      >

        <div class="w-full mx-2 flex flex-col relative md:flex-row md:justify-center">

          <div class="w-full md:w-1/2 flex flex-col items-center  text-left mb-3 md:mb-0 ">
            <badge
              class="badge mx-2 text-grey-darker"
              :class="{'text-teal':skill.isSelected}"
              :title="skill.category"
              :color="skill.isSelected ? 'teal' : 'grey-lightest'"
              :icon-url="skill.resolvedIconUrl"
            >
            </badge>
            <div class="font-bold mb-3 text-grey-dark text-center">{{skill.tagline}}</div>
            <div class="text-grey-darker md:hidden">
              {{skill.summary}}
            </div>
            <button
              class="text-center text-xs bg-orange text-white uppercase flex justify-center items-center p-2 rounded my-2"
              @click="openSkill(skill)"
            >
              Learn more

            </button>
          </div>

          <div class="md:hidden">
            <carousel
              class="md:w-1/2  md:bg-grey-lightest md:rounded border border-grey-lightest rounded p-2"
              :perPage="1"
              :loop=true
              :paginationEnabled=true
              :paginationActiveColor="'#f6993f'"
              :navigate-to="currentSlide"
            >
              <slide>
                <skill-technologies-list :skill="skill"></skill-technologies-list>
              </slide>
              <template v-for="(job, jix) in fetchJobs(skill)">
                <slide
                  class="h-full"
                  :key="jix"
                >
                  <skill-job :job="job"></skill-job>
                </slide>
              </template>
            </carousel>
          </div>

        </div>

        <div class="md:flex">
          <portal
            to="modal"
            v-if="expandedSkill.summary"
          >
            <div
              style="top:0;left:0;overflow-y:auto"
              class="fixed w-screen h-screen flex flex-col  bg-white z-20 "
            >
              {{expandedSkill.summary}}
            </div>

          </portal>
        </div>

      </div>

    </div>
  </div>
</template>
 
<script lang="ts">
import { Component, Vue, Emit } from "vue-property-decorator";
import { Carousel, Slide } from "vue-carousel";

import Badge from "@/components/Badge.vue";
import { skillsService } from "@/services/skills.service";
import { jobsService } from "@/services/jobs.service";
import Skill from "@/models/skill";
import Job from "@/models/job";
import JobCard from "@/components/JobCard.vue";
import SkillTechnologiesList from "@/components/SkillTechnologiesList.vue";
import SkillJob from "@/components/SkillJobs.vue";

@Component({
  components: {
    badge: Badge,
    "job-card": JobCard,
    "skill-technologies-list": SkillTechnologiesList,
    "skill-job": SkillJob
  }
})
export default class About extends Vue {
  private skills: Skill[] = [];
  private jobs: Job[] = [];
  private expandedSkill: Skill = new Skill();
  private selectedJob: Job = new Job();
  private isLoaded: boolean = false;
  private currentSlide: number = 0;
  private currentSlidesLength: number = 0;

  public mounted() {
    this.isLoaded = false;
    return skillsService
      .get()
      .then((skills: Skill[]) => {
        this.skills = skills;
        this.isLoaded = true;
      })
      .catch(() => {
        this.isLoaded = true;
      });
  }

  private openSkill(skill: Skill) {
    this.expandedSkill = skill;
  }

  private fetchJobs(skill: Skill) {
    return jobsService.filterByTechnologies(
      skill.technologies.map(t => t.name)
    );
  }
}
</script>
<style scoped>
</style>


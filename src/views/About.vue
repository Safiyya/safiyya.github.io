<template>
  <div
    class="about flex flex-col justify-center items-center container mx-auto"
    v-if="isLoaded"
  >

    <div class=" flex flex-wrap w-full items-start justify-between mb-4 ">

      <div
        v-for="skill in skills"
        :key="skill.category"
        class="flex flex-col items-center group w-full md:flex-row  md:p-4 my-4 "
      >
        <badge
          class="badge mx-2 text-grey-dark "
          :class="{'text-teal':skill.isSelected}"
          :title="skill.category"
          :color="skill.isSelected ? 'teal' : 'grey-light'"
          :icon-url="skill.resolvedIconUrl"
        >
        </badge>

        <div class="w-full relative">
          <span class="w-full text-lg md:text-lg ">
            {{skill.tagline}}
          </span>

          <button
          class="bg-pink rounded-full w-8 h-8 my-2"
          @click="toggleJobs(skill)"
        >
          <template v-if="!expandedSkill.category">
            <img
              class="w-1/2 h-1/2"
              svg-inline
              src="../assets/icons/navigation-more.svg"
              alt="Location"
            />
          </template>
          <template v-else>
            <img
              v-show="expandedSkill.category=== skill.category"
              class="w-1/2 h-1/2"
              svg-inline
              src="../assets/icons/close.svg"
              alt="Location"
            />
            <img
              v-show="expandedSkill.category!== skill.category"
              class="w-1/2 h-1/2"
              svg-inline
              src="../assets/icons/navigation-more.svg"
              alt="Location"
            />
          </template>
        </button>

          <div class="flex w-full">
            <transition name="slide">
              <div
                v-show="expandedSkill.category !== skill.category"
                class="w-full my-2"
              >
                <div class="w-full">
                  <div
                    v-for="technology in skill.technologies"
                    :key="technology.name"
                    class="mt-2 mx-2 md:mx-0 flex flex-col"
                  >
                    <div class="bg-grey-lighter">
                      <div
                        class="bg-teal text-teal-lightest font-semibold rounded-sm text-xs leading-none py-1 text-left px-2"
                        :style="{width: technology.level/5 * 100+ '%'}"
                      >{{technology.name}}</div>
                    </div>

                  </div>
                </div>
              </div>
            </transition>
            <transition name="slide">
              <div
                class="flex flex-col sm:flex-row sm:flex-wrap sm:justify-between w-full"
                v-show="expandedSkill.category === skill.category"
              >
<!-- <span>{{skill.summary}}</span> -->
                <job-card
                  class="sm:w-1/2 px-1 -mx-1 my-1"
                  v-for="job in jobs"
                  :key="job.start"
                  :job="job"
                ></job-card>

              </div>
            </transition>
          </div>

        </div>

        

      </div>

    </div>

  </div>
</template>
 
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Badge from "@/components/Badge.vue";
import { skillsService } from "@/services/skills.service";
import { jobsService } from "@/services/jobs.service";
import Skill from "@/models/skill";
import Job from "@/models/job";
import JobCard from "@/components/JobCard.vue";

@Component({
  components: {
    badge: Badge,
    "job-card": JobCard
  }
})
export default class About extends Vue {
  private skills: Skill[] = [];
  private jobs: Job[] = [];
  private expandedSkill: Skill = new Skill();
  private isLoaded: boolean = false;

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

  private toggleJobs(skill: Skill) {
    this.expandedSkill.category === skill.category
      ? this.hideJobs(skill)
      : this.showJobs(skill);
  }

  private showJobs(skill: Skill) {
    this.fetchJobs(skill).then(() => {
      this.expandedSkill = skill;
    });
  }

  private hideJobs(skill: Skill) {
    this.expandedSkill = new Skill();
  }

  private fetchJobs(skill: Skill) {
    return jobsService
      .filterByTechnologies(skill.technologies.map(t => t.name))
      .then((jobs: Job[]) => {
        this.jobs = jobs;
      });
  }
}
</script>
<style scoped>


.slide-enter-active {
  transition: all 1s ease;
  position:relative;
  /* max-height: 100%; */
}
.slide-leave-active {
  transition: all 1s;
  position:fixed;
  /* max-height: 0; */
}
.slide-enter, .slide-leave-to {
  /* height: 100%; */
  transform: translateX(100%);
  /* transform: translateY(-100%); */
  /* width: 100%; */
  opacity: 0;
}
</style>


<template>
  <div
    class="about flex flex-col justify-center items-center container mx-auto"
    v-if="isLoaded"
  >
    <!-- <button @click="close()">CLose</button> -->

    <modal
      ref="modal"
      :fullscreen="false"
    >
      {{expandedSkill.summary}}
    </modal>

    <div class="md:hidden flex flex-wrap w-full  items-start justify-between mb-4 ">
      <div
        v-for="(skill) in skills"
        :key="skill.category"
        class="flex flex-col items-center group md:w-1/2 w-full py-2 md:py-16 lg:py-4 "
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
            <!-- <button
              class="absolute mt-32 text-center text-xs bg-orange text-white uppercase flex justify-center items-center p-2 rounded my-2"
              @click="openSkillModal()"
            >
              Learn more

            </button> -->
          </div>

          <div>
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

      </div>

    </div>

    <div class="hidden md:block h-screen">

      <div class="h-screen w-screen panel relative p-12 ">

        <div
          v-for="i in 4"
          :key="i"
          :id="'cell-'+i"
          class="w-1/2 absolute"
          @click="toggle(skills[i-1])"
          :class="{
            'opacity-25': isAnyOpen() && !skills[i-1].isSelected,
            'active bg-white shadow-lg px-16':skills[i-1].isSelected, 
            'flex flex-col justify-center':!skills[i-1].isSelected,
            'bg-teal text-teal-lightest': (i===1 || i==4) && !skills[i-1].isSelected}"
        >
          <!-- <button @click="close(skills[i-1])">close</button> -->
          <div
            class="flex"
            :class="{'justify-center':!skills[i-1].isSelected, 'justify-start pt-12 w-full bg-white':skills[i-1].isSelected}"
          >

            <div :class="{'w-1/2':skills[i-1].isSelected}">

              <badge
                class="badge mx-2"
                :title="skills[i-1].category"
                :color="'grey-lightest'"
                :icon-url="skills[i-1].resolvedIconUrl"
              >
              </badge>
              <div class="font-bold mb-3 text-center">{{skills[i-1].tagline}}</div>

            </div>

            <div
              v-show="skills[i-1].isSelected"
              class="w-1/2 flex justify-center"
            >
              <div class="w-full">

                <skill-technologies-list
                  class=""
                  :skill="skills[i-1]"
                ></skill-technologies-list>
              </div>

            </div>

          </div>

          <div
            v-show="skills[i-1].isSelected"
            class="bg-teal w-full flex items-center justify-center p-4 "
          >
            <div class="text-3xl text-teal-lightest w-4/5">
              {{skills[i-1].summary}}
            </div>
          </div>

          <div
            v-show="skills[i-1].isSelected"
            class="w-full flex justify-around"
          >
            <div
              class="w-1/3"
              v-for="(job, jix) in fetchJobs(skills[i-1])"
              :key="jix"
            >

              <skill-job :job="job"></skill-job>
            </div>
          </div>

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
import Modal from "@/components/Modal.vue";
import { wrapGrid } from "animate-css-grid";

@Component({
  components: {
    badge: Badge,
    "job-card": JobCard,
    "skill-technologies-list": SkillTechnologiesList,
    "skill-job": SkillJob,
    modal: Modal
  }
})
export default class About extends Vue {
  private skills: Skill[] = [];
  private expandedSkill: Skill = new Skill();
  private isLoaded: boolean = false;
  private currentSlide: number = 0;

  public mounted() {
    this.isLoaded = false;
    return (
      skillsService
        .get()
        .then((skills: Skill[]) => {
          this.skills = skills;
          this.isLoaded = true;
        })
        .catch(() => {
          this.isLoaded = true;
        })
    );
  }

  private openSkillModal(skill: Skill) {
    (this.$refs.modal as Modal).open();
  }

  toggle(skill: Skill) {
    if (skill.isSelected) {
      // opened => just close it
      skill.isSelected = false;
    } else {
      // closed, open and close any other
      this.skills.forEach(s => s.isSelected=false)
      skill.isSelected = !skill.isSelected;
    }
  }

  private isAnyOpen() {
    return this.skills.find(s => s.isSelected === true);
  }

  private fetchJobs(skill: Skill) {
    return skill.category
      ? jobsService.filterByTechnologies(skill.technologies.map(t => t.name))
      : [];
  }

}
</script>
<style scoped>
.panel > div {
  transition: all 400ms;
  height: 50%;
  z-index: 0;
}
.panel > div.active {
  transition: all 400ms;
  width: 90%;
  height: 90%;
  z-index: 10;
}

#cell-1 {
  top: 0;
  left: 0;
}
#cell-2 {
  top: 0;
  right: 0;
}
#cell-3 {
  bottom: 0;
  left: 0;
}
#cell-4 {
  bottom: 0;
  right: 0;
}
</style>


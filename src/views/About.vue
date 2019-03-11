<template>
  <div
    class="about flex flex-col justify-center items-center container mx-auto"
    v-if="isLoaded"
  >

    <div class=" flex flex-wrap w-full  items-start justify-between mb-4 ">

      <div
        v-for="(skill, six) in skills"
        :key="skill.category"
        class="flex flex-col items-center group w-full   md:p-4 my-4 "
      >
        <badge
          class="badge mx-2 text-grey-dark"
          :class="{'text-teal':skill.isSelected}"
          :title="skill.category"
          :color="skill.isSelected ? 'teal' : 'grey-light'"
          :icon-url="skill.resolvedIconUrl"
        >
        </badge>

        <div
          class="w-full mx-2 md:flex md:items-stretch relative"
          v-bind:class="{'md:flex-row':six%2===0, 'md:flex-row-reverse':six%2>0}"
        >
          <div class="w-full  md:w-1/2 md:p-5 text-left mb-3 ">
            <div class="font-bold mb-3 text-center">{{skill.tagline}}</div>
            <div class="text-grey-darker">
              {{skill.summary}}
            </div>
          </div>

          <carousel
            class="border rounded p-2"
            :perPage="1"
            :loop=true
            :paginationEnabled=true
            :paginationActiveColor="'#f6993f'"
            :navigate-to="currentSlide"
          >
            <slide>
              <div class="flex flex-col w-full md:w-1/2">
                <div class="w-full">
                  <div class="w-full">
                    <div
                      v-for="technology in skill.technologies"
                      :key="technology.name"
                      class="mb-2 md:mx-0 flex flex-col"
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
                <!-- <button
              class="text-xs text-orange-lightest uppercase flex justify-center items-center bg-orange p-2 rounded my-2"
              @click="showJobs(skill)"
            >
              Learn more

            </button> -->
              </div>

            </slide>
            <template v-for="job in fetchJobs(skill)">
              <slide
                class="h-full"
                :key="job.start"
              >
                <job-card
                  class="h-full bg-white rounded"
                  :job="job"
                >
                  <button
                    class="text-xs text-orange uppercase flex justify-center items-center p-2 rounded my-2"
                    @click="openJob(job)"
                  >
                    Learn more

                  </button>
                </job-card>

              </slide>
            </template>

          </carousel>

        </div>

      </div>

    </div>
    <transition name="slide-down">

      <div
        v-if="selectedJob.start"
        style="top:0;left:0;overflow-y:auto"
        class="fixed w-screen h-screen flex flex-col  bg-white z-20 "
      >
        <job-card
                  class="h-full "
                  :job="selectedJob" 
                  :is-expanded=true 
                >
                </job-card>

        <div
          class="h-8  py-1 absolute"
          style="top:0;right:0;"
        >
          <button
            class="h-6 w-6 m-2 text-grey-dark fill-current"
            style="bottom:0;right:0"
            @click="hideJobs()"
          >
            <img
              svg-inline
              src="../assets/icons/close.svg"
              alt="Close"
            /></button>
        </div>

      </div>
    </transition>
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
  private selectedJob:Job = new Job();
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

  private openJob(job:Job){
    this.selectedJob =job;
  }

  // private toggleJobs(skill: Skill) {
  //   this.expandedSkill.category === skill.category
  //     ? this.hideJobs(skill)
  //     : this.showJobs(skill);
  // }

  // private showJobs(skill: Skill) {
  //   return fetchJobs(skill)
  //     .then(() => {
  //       // this.$emit("disable-scroll");
  //     })
  //     .then(() => {
  //       this.expandedSkill = skill;
  //       this.currentSlide = 0;
  //     });
  // }

  private hideJobs(skill: Skill) {
    this.expandedSkill = new Skill();
    this.selectedJob = new Job();
    // this.$emit("enable-scroll");
  }

  private fetchJobs(skill: Skill) {
    return jobsService.filterByTechnologies(
      skill.technologies.map(t => t.name)
    );
    // .then((jobs: Job[]) => {
    //   this.jobs = jobs;
    //   this.currentSlidesLength = this.jobs.length;
    // });
  }
}
</script>
<style scoped>
/* .slide-enter-active {
  transition: all 1s ease;
  position: relative;
}
.slide-leave-active {
  transition: all 1s;
  position: fixed;
}
.slide-enter,
.slide-leave-to {
  transform: translateX(100%);
  opacity: 0;
} */

.slide-down-enter-active {
  transition: all 400ms ease;
  /* transform: translateY(+100%); */
}
.slide-down-leave-active {
  transition: all 400ms;
  transform: scale(1);
  opacity: 1;
}
.slide-down-enter,
.slide-down-leave-to {
  transform: scale(0);
  /* transform: translateY(-100%); */
  opacity: 0;
}
</style>


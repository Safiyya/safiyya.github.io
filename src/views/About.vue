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

          <div class="flex w-full md:w-1/2">
            <!-- <transition name="slide"> -->
            <div
              v-show="expandedSkill.category !== skill.category"
              class="w-full"
            >
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
            <!-- </transition> -->
            <!-- <transition name="slide">
              <div
                class="block w-full"
                v-show="expandedSkill.category === skill.category"
              >
                <job-card
                  class=" px-1 -mx-1 my-1"
                  v-for="job in jobs"
                  :key="job.start"
                  :job="job"
                ></job-card>

              </div>
            </transition> -->
          </div>

        </div>

        <button
          class="text-xs text-orange-lightest uppercase flex justify-center items-center bg-orange p-2 rounded my-2"
          @click="showJobs(skill)"
        >
        Learn more
          <!-- <img
            class="w-1/2 h-1/2 text-white fill-current "
            svg-inline
            src="../assets/icons/navigation-more.svg"
            alt="Location"
          /> -->

        </button>

      </div>

    </div>
    <div
      v-if="expandedSkill.category"
      style="top:0;left:0;overflow-y:auto"
      class="w-screen h-screen flex flex-col fixed bg-white z-20 "
    >
      <carousel class="h-full"
        :perPage="1"
        :loop=true
        :paginationEnabled=false
        :navigate-to="currentSlide"
      >
        <template v-for="job in jobs">
          <slide class="h-full" :key="job.start">
            <job-card
              class="h-full"
              :job="job"
            ></job-card>
          </slide>
        </template>

      </carousel>

      <div class="w-full flex justify-around mb-12 items-center px-2" >
        <button
          @click="prev()"
          class="h-8 w-8  rounded-full bg-orange text-orange-lightest fill-current"
        >
          <img
            svg-inline
            src="../assets/icons/cheveron-left.svg"
            alt="Close"
          />
        </button>
        <button
          class="h-8 w-8 rounded-full bg-orange text-orange-lightest fill-current"
          @click="next()"
        >
          <img
            svg-inline
            src="../assets/icons/cheveron-right.svg"
            alt="Close"
          />
        </button>
      </div>
      <div class="h-8  py-1 absolute" style="top:0;right:0;">
        <button class="h-6 w-6 m-2 text-grey-light fill-current"
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

  private next() {
    if (this.currentSlide + 1 < this.currentSlidesLength)
      this.currentSlide += 1;
  }

  private prev() {
    if (this.currentSlide - 1 >= 0) this.currentSlide -= 1;
  }

  private toggleJobs(skill: Skill) {
    this.expandedSkill.category === skill.category
      ? this.hideJobs(skill)
      : this.showJobs(skill);
  }

  private showJobs(skill: Skill) {
    this.fetchJobs(skill)
      .then(() => {
        this.$emit("disable-scroll");
      })
      .then(() => {
        this.expandedSkill = skill;
        this.currentSlide = 0;
      });
  }

  private hideJobs(skill: Skill) {
    this.expandedSkill = new Skill();
    this.$emit("enable-scroll");
  }

  private fetchJobs(skill: Skill) {
    return jobsService
      .filterByTechnologies(skill.technologies.map(t => t.name))
      .then((jobs: Job[]) => {
        this.jobs = jobs;
        this.currentSlidesLength = this.jobs.length;
      });
  }
}
</script>
<style scoped>
.slide-enter-active {
  transition: all 1s ease;
  position: relative;
  /* max-height: 100%; */
}
.slide-leave-active {
  transition: all 1s;
  position: fixed;
  /* max-height: 0; */
}
.slide-enter,
.slide-leave-to {
  /* height: 100%; */
  transform: translateX(100%);
  /* transform: translateY(-100%); */
  /* width: 100%; */
  opacity: 0;
}
</style>


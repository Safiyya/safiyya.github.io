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

    <div class="hidden md:block">

      <div class="w-screen h-screen panel relative p-12">
        <div
          v-for="i in 4"
          :key="i"
          :id="'cell-'+i"
          class="w-1/2 absolute"
          @click="skills[i-1].isSelected=!skills[i-1].isSelected"
          :class="{'active bg-white flex flex-wrap':skills[i-1].isSelected, 'flex flex-col justify-center':!skills[i-1].isSelected}"
        >
          <div
            class="flex"
            :class="{'justify-center':!skills[i-1].isSelected, 'justify-start px-4 pt-12 w-full texture-background':skills[i-1].isSelected}"
          >
            <div :class="{'w-1/2':skills[i-1].isSelected}">
              <badge
                class="badge mx-2 text-grey-darker"
                :title="skills[i-1].category"
                :color="'grey-lightest'"
                :icon-url="skills[i-1].resolvedIconUrl"
              >
              </badge>
              <div class="font-bold mb-3 text-grey text-center">{{skills[i-1].tagline}}</div>
              
            </div>

            <div
              v-if="skills[i-1].isSelected"
              class="w-1/2 p-4 flex justify-center"
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
            v-if="skills[i-1].isSelected"
            class="bg-teal w-full rounded flex items-center justify-center p-4 "
          >
            <div class="text-3xl text-teal-lightest w-4/5">
              {{skills[i-1].summary}}
            </div>
          </div>

          <div v-if="skills[i-1].isSelected" class="w-full flex justify-around">
            <!-- <carousel
              class="border border-grey-lightest rounded p-2"
              :perPage="1"
              :loop=true
              :paginationEnabled=true
              :paginationActiveColor="'#f6993f'"
              :navigate-to="currentSlide"
            > -->
              <div class="w-1/3 border-2 border-l border-teal" v-for="(job, jix) in fetchJobs(skills[i-1])" :key="jix">
                <!-- <slide
                  class="h-full"
                  :key="jix"
                > -->
                  <skill-job  :job="job" ></skill-job>
                <!-- </slide> -->
              </div>
            <!-- </carousel> -->
          </div>

        </div>
      </div>

      <!-- <div class=" hidden grid h-screen w-screen p-8">
        <div
          v-for="(skill, six) in skills"
          :key="six"
          class="grid-item"
          v-bind:class="{
            ['cell-'+(six+1)]:true, 
            'hidden':expandedSkillIndex!== 0 && expandedSkillIndex !==six+1}"
        >
          <div>
            <badge
              class="badge mx-2 text-grey-darker"
              :class="{'text-teal':skill.isSelected}"
              :title="skill.category"
              :color="expandedSkillIndex!== 0 && expandedSkillIndex ===six+1 ? 'teal' : 'grey-lightest'"
              :icon-url="skill.resolvedIconUrl"
              @click.native="showExpandedSkill(skill, six+1)"
            >
            </badge>
            <div class="font-bold mb-3 text-grey-dark text-center">{{skill.tagline}}</div>
            <div class="text-grey-darker md:hidden">
              {{skill.summary}}
            </div>
          </div>

        </div>
        <div
          class="grid-item cell-1 z-10 "
          v-if="expandedSkillIndex !==0 && expandedSkillIndex!==1"
        >
          <portal-target
            class="h-full"
            name="cell-1"
          >
          </portal-target>
        </div>
        <div
          class="grid-item cell-2 z-10 "
          v-if="expandedSkillIndex !==0 && expandedSkillIndex!==2"
        >
          <portal-target
            class="h-full"
            name="cell-2"
          >
          </portal-target>
        </div>
        <div
          class="grid-item cell-3 z-10"
          v-if="expandedSkillIndex !==0 && expandedSkillIndex!==3"
        >
          <portal-target
            class="h-full"
            name="cell-3"
          >
          </portal-target>
        </div>
        <div
          class="grid-item cell-4 z-10"
          v-if="expandedSkillIndex !==0 && expandedSkillIndex!==4"
        >
          <portal-target
            class="h-full"
            name="cell-4"
          >
          </portal-target>
        </div>
      </div> -->

    </div>

    <!-- <portal
      class="h-full "
      v-bind:to="'cell-'+taglineLocation"
    >
      <div class="bg-grey-darkest rounded text-white flex flex-col justify-center p-4 h-full">
        <div class="text-3xl">
          {{expandedSkill.summary}}
        </div>
      </div>
    </portal>

    <portal
      class="h-full"
      v-bind:to="'cell-'+technologiesLocation"
    >
      <div class="h-full p-4">
        <skill-technologies-list :skill="expandedSkill"></skill-technologies-list>

      </div>
    </portal>
    <portal
      class="h-full"
      v-bind:to="'cell-'+jobsLocation"
    >
      <div v-if="expandedSkill">
        <carousel
          class="border border-grey-lightest rounded p-2"
          :perPage="1"
          :loop=true
          :paginationEnabled=true
          :paginationActiveColor="'#f6993f'"
          :navigate-to="currentSlide"
        >
          <template v-for="(job, jix) in fetchJobs(expandedSkill)">
            <slide
              class="h-full"
              :key="jix"
            >
              <skill-job :job="job"></skill-job>
            </slide>
          </template>
        </carousel>
      </div>
    </portal> -->
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
  private jobs: Job[] = [];
  private expandedSkill: Skill = new Skill();
  private expandedSkillIndex: number = 0;
  private selectedJob: Job = new Job();
  private isLoaded: boolean = false;
  private currentSlide: number = 0;
  private currentSlidesLength: number = 0;
  private taglineLocation: number = 0;
  private jobsLocation: number = 0;
  private technologiesLocation: number = 0;

  public mounted() {
    this.isLoaded = false;
    return (
      skillsService
        .get()
        .then((skills: Skill[]) => {
          this.skills = skills;
          this.isLoaded = true;
        })
        // .then(() => {
        //   wrapGrid(document.querySelector(".grid") as HTMLElement, {
        //     easing: "easeIn",
        //     duration: 750
        //   });
        // })
        .catch(() => {
          this.isLoaded = true;
        })
    );
  }

  private openSkillModal(skill: Skill) {
    (this.$refs.modal as Modal).open();
  }

  private close() {
    this.expandedSkill = new Skill();
    this.expandedSkillIndex = 0;
  }

  private fetchJobs(skill: Skill) {
    return skill.category
      ? jobsService.filterByTechnologies(skill.technologies.map(t => t.name))
      : [];
  }

  private showExpandedSkill(skill: Skill, index: number) {
    this.expandedSkill = skill;
    this.expandedSkillIndex = index;
    // this.skills = this.skills.slice(index, 1);
    if (index === 1) {
      this.taglineLocation = 2;
      this.technologiesLocation = 3;
      this.jobsLocation = 4;
    } else if (index === 2) {
      this.taglineLocation = 1;
      this.technologiesLocation = 4;
      this.jobsLocation = 3;
    } else if (index === 3) {
      this.taglineLocation = 4;
      this.technologiesLocation = 1;
      this.jobsLocation = 2;
    } else if (index === 4) {
      this.taglineLocation = 3;
      this.technologiesLocation = 2;
      this.jobsLocation = 1;
    }
  }
}
</script>
<style scoped>
.grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 40%);
  grid-auto-flow: dense;
}

.grid-item {
  grid-column: span 1;
  grid-row: span 1;
}

.grid-item.cell-1 {
  grid-column-start: 1 / span 1;
  grid-row-start: 1 / span 1;
}

.grid-item.cell-2 {
  grid-column: 2 / span 1;
  grid-row: 1 / span 1;
}

.grid-item.cell-3 {
  grid-column: 1 / span 1;
  grid-row: 2 / span 1;
}

.grid-item.cell-4 {
  grid-column: 2 / span 1;
  grid-row: 2 / span 1;
}

.panel > div {
  transition: all 400ms;
  height: 60%;
}
.panel > div.active {
  transition: all 400ms;
  width: 100%;
  height: 100%;
  z-index: 10;
}

#cell-1 {
  top: 0;
  left: 0;
  /* background: blue; */
}
#cell-2 {
  top: 0;
  right: 0;
  /* background: rgb(197, 201, 197); */
}
#cell-3 {
  bottom: 0;
  left: 0;
  /* background: orange; */
}
#cell-4 {
  bottom: 0;
  right: 0;
  /* background: red; */
}
</style>


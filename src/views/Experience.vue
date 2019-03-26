<template>
  <div class="flex flex-col items-center w-full -mx-2 ">
    <h3 class="text-black my-4">Recent work</h3>
    <div class="hidden md:flex rounded-full bg-grey-light p-3 w-2/3 justify-between">

      <button-radio-skill
        :text="'Front-end'"
        :icon-url="require('@/assets/icons/code.svg')"
        :active="selectedSkill == 0"
        @click.native="onSelect(0)"
      ></button-radio-skill>

      <button-radio-skill
        :text="'Design'"
        :icon-url="require('@/assets/icons/crop.svg')"
        :active="selectedSkill == 1"
        @click.native="onSelect(1)"
      ></button-radio-skill>

      <button-radio-skill
        :text="'Back-end'"
        :icon-url="require('@/assets/icons/database.svg')"
        :active="selectedSkill == 2"
        @click.native="onSelect(2)"
      ></button-radio-skill>

    </div>

    <div class="hidden md:flex justify-between flex-wrap md:w-4/5 xl:w-full  my-8">
      <div
        class="md:w-1/2 lg:w-1/3 px-2 my-2"
        v-for="(job, jix) in filteredJobs"
        :key="jix"
      >
        <job-card :job="job"></job-card>
      </div>
    </div>
    <div class="flex md:hidden flex-wrap w-4/5 -mx-2 my-8">
      <div
        class="w-full py-2"
        v-for="(job, jix) in allJobs"
        :key="jix"
      >
        <job-card :job="job"></job-card>
      </div>
    </div>

    <div class="w-full flex flex-col items-center my-8">
      <h4 class="my-4">Want to see more of my code?</h4>
      <div class="w-2/3 flex flex-col md:flex-row  justify-between">
        <button-secondary
          :text="'Github'"
          :icon-url="require('@/assets/icons/github.svg')"
          :url="'https://github.com/Safiyya'"
        ></button-secondary>
        <button-secondary
          class="my-2 md:my-0"
          :text="'Stack overflow'"
          :icon-url="require('@/assets/icons/stack_overflow.svg')"
          :url="'https://stackoverflow.com/users/7092722/safiyya'"
        ></button-secondary>
        <button-secondary
          :text="'Dribble'"
          :icon-url="require('@/assets/icons/dribble.svg')"
          :url="'https://dribbble.com/safiyya'"
        ></button-secondary>
      </div>

    </div>
  </div>

</template>
 
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import ButtonRadioSkill from "@/components/buttons/ButtonRadioSkill.vue";
import Job from "@/models/job";
import JobCard from "@/components/cards/JobCard.vue";
import { jobsService } from "@/services/jobs.service";
import Button from "@/components/buttons/Button.vue";

@Component({
  components: {
    "button-radio-skill": ButtonRadioSkill,
    "job-card": JobCard,
    "button-secondary": Button
  }
})
export default class Experience extends Vue {
  private selectedSkill: number = 0;
  private filteredJobs: Job[] = [];
  private allJobs: Job[] = [];

  private onSelect(index: number) {
    this.selectedSkill = index;
    switch (index) {
      case 0:
        this.filteredJobs = jobsService.getFrontEndJobs();
        break;
      case 1:
        this.filteredJobs = jobsService.getDesignJobs();
        break;
      case 2:
        this.filteredJobs = jobsService.getBackendJobs();
        break;
      default:
        break;
    }
  }

  private mounted() {
    this.onSelect(this.selectedSkill);
    this.allJobs = jobsService.get();
  }
}
</script>

<style scoped>
</style>


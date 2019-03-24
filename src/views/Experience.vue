<template>
  <div class="flex flex-col items-center w-full">
    <h3 class="text-black my-4">Recent work</h3>
    <div class="rounded-full bg-grey-light p-3 w-2/3 flex justify-between">

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

    <div class="flex flex-wrap w-full -mx-2 my-8">
      <div
        class="w-1/3 px-2"
        v-for="(job, jix) in jobs"
        :key="jix"
      >
        <job-card :job="job"></job-card>
      </div>
    </div>
  </div>

</template>
 
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import ButtonRadioSkill from "@/components/buttons/ButtonRadioSkill.vue";
import Job from "@/models/job";
import JobCard from "@/components/JobCard.vue";
import { jobsService } from "@/services/jobs.service";

@Component({
  components: {
    "button-radio-skill": ButtonRadioSkill,
    "job-card": JobCard
  }
})
export default class Experience extends Vue {
  selectedSkill: number = 0;
  jobs: Job[] = [];

  onSelect(index: number) {
    this.selectedSkill = index;
    switch (index) {
      case 0:
        this.jobs = jobsService.getFrontEndJobs();
        break;
      case 1:
        this.jobs = jobsService.getDesignJobs();
        break;
      case 2:
        this.jobs = jobsService.getBackendJobs();
        break;
      default:
        break;
    }
  }

  private mounted() {
    this.onSelect(this.selectedSkill)
  }
}
</script>

<style scoped>
</style>


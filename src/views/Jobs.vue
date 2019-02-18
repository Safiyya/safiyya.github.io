<template>
  <div
    class="past-page container mx-auto"
    v-if="isLoaded"
  >
    <h1>Stuff I've done</h1>

    <div class="flex flex-wrap -m-2">
      <template v-for="job in jobs">
        <div class="w-1/2 p-2 " :key="job.start">
          <job-card
            class=""
            :job="job"
            
          ></job-card>
        </div>

      </template>
    </div>

  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Provide } from "vue-property-decorator";
import { jobsService } from "../services/jobs.service";
import Job from "../models/job";
import JobCard from "@/components/JobCard.vue";

@Component({
  components: {
    "job-card": JobCard
  }
})
export default class Experience extends Vue {
  private jobs: Job[] = [];
  private isLoaded: boolean = false;

  public mounted() {
    this.isLoaded = false;
    return jobsService
      .get()
      .then((jobs) => {
        this.jobs = jobs;
        this.isLoaded = true;
      })
      .catch(() => {
        this.isLoaded = true;
      });
  }
}
</script>

<style>
</style>


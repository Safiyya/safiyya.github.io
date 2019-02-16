<template>
  <div
    class="past-page"
    v-if="isLoaded"
  >
    <h1>Stuff I've done</h1>

    <template v-for="job in jobs">
      <job-card
        :job="job"
        :key="job.start"
      ></job-card>
    </template>

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
export default class PastPage extends Vue {
  jobs: Job[] = [];
  isLoaded: boolean = false;

  mounted() {
    this.isLoaded = false;
    return jobsService
      .get()
      .then(jobs => {
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


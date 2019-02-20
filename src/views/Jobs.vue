<template>
  <div
    class="experience pt-24 h-full flex flex-col items-center container mx-auto"
    v-if="isLoaded"
  >

    <div class="flex flex-wrap item-center justify-center w-full">
      <template v-for="job in jobs">
        <div class="w-1/4 m-3 box " :key="job.start">
          <job-card
            class="content"
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
.box {
  position: relative;
}
.box:before {
  content: "";
  display: block;
  padding-top: 100%; /* initial ratio of 1:1*/
}

.content {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}
</style>


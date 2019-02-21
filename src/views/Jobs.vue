<template>
  <div
    class="experience pt-24 h-full flex flex-col justify-start items-center container mx-auto"
    v-if="isLoaded"
  >
    <div class="grid item-center justify-start w-full relative flex-grow">
      <div
        v-for="job in jobs"
        @click.stop="toggleJobDetails(job)"
        class="grid-item m-2 relative cursor-pointer bg-white "
        v-bind:class="{'expanded': job.isSelected, 'collapsed':job.isUnselected}"
        :key="job.start"
      >
        <job-card
          class="content"
          :job="job"
        ></job-card>

      </div>
    </div>
    <div class="h-48 flex items-center justify-around w-full px-48">
      <a class="button" target="blank" href="https://www.visualcv.com/safiyyababio-fullstack/pdf/">
      <img
          class="w-4 h-4 fill-current mx-2 "
          svg-inline
          src="@/assets/icons/download.svg"
          alt="About"
        />
      Download PDF </a>
    </div>

  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Provide } from "vue-property-decorator";
import { jobsService } from "../services/jobs.service";
import Job from "../models/job";
import JobCard from "@/components/JobCard.vue";
import { wrapGrid } from "animate-css-grid";

@Component({
  components: {
    "job-card": JobCard
  }
})
export default class Experience extends Vue {
  private jobs: Job[] = [];
  private isLoaded: boolean = false;

  toggleJobDetails(job: Job) {
    if (job.isSelected) {
      this.jobs.forEach(j => {
        j.isSelected = false;
        j.isUnselected = false;
      });
    } else {
      this.jobs.forEach(j => {
        j.isSelected = false;
        j.isUnselected = true;
      });
      job.isSelected = true;
      job.isUnselected = false;
    }
  }

  public mounted() {
    this.$nextTick(() => {
      this.isLoaded = false;
      return jobsService
        .get()
        .then(jobs => {
          this.jobs = jobs;
          this.isLoaded = true;
        })
        .then(() => {
          wrapGrid(<HTMLElement>document.querySelector(".grid"), {
            easing: "linear",
            duration: 750
          });
        })
        .catch(() => {
          this.isLoaded = true;
        });
    });
  }
}
</script>

<style>
.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(6, 15%);
  grid-gap: 16px;
  grid-auto-flow: dense;
}

.grid-item {
  /* transition: transform 1000ms; */
  /* grid-column: span 1; */
  grid-row: span 3;
  transition: margin 250ms;
}

.grid-item:not(.expanded):hover {
  margin: -0.0175rem;
  transition: margin 250ms;
  /* padding: 5px; */
  /* animation: fadeIn 0.4s forwards;
  animation-delay: 0.3s; */
}

.grid-item.expanding {
  /* transition: transform 1000ms; */
  background: red;
  grid-column: span 2;
  grid-row: 1 / span 4;
}

.grid-item.expanded {
  /* transition: transform 1000ms; */
  grid-column: span 2;
  grid-row: 1 / span 4;
}

.grid-item.collapsed {
  /* transition: transform 1000ms; */
  /* grid-column: span 1; */
  grid-row: span 2;
}

.box {
  position: relative;
}
.box:before {
  content: "";
  display: block;
  padding-top: 100%;
}

.content {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}
</style>


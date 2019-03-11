<template>
  <div
    class="experience flex flex-col justify-start items-center container mx-auto"
    v-if="isLoaded"
  >
    <div class="grid item-center justify-start w-full relative flex-grow">
      <div
        v-for="job in jobs"
        @click.stop="toggleJobDetails(job)"
        class="grid-item m-2 relative cursor-pointer bg-white box "
        v-bind:class="{'expanded': job.isSelected, 'collapsed':job.isUnselected}"
        :key="job.start"
      >
        <job-card
          class="content"
          :job="job"
        ></job-card>

      </div>
    </div>
    <div class="h-32 flex items-start justify-around w-full px-48">
      <a
        class="button bg-teal "
        target="blank"
        href="https://www.visualcv.com/safiyyababio-fullstack/pdf/"
      >
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
import { jobsService } from "@/services/jobs.service";
import Job from "@/models/job";
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

  // public mounted() {
  //   this.$nextTick(() => {
  //     this.isLoaded = false;
  //     return jobsService
  //       .get()
  //       .then((jobs: Job[]) => {
  //         this.jobs = jobs;
  //         this.isLoaded = true;
  //       })
  //       .then(() => {
  //         wrapGrid(document.querySelector(".grid") as HTMLElement, {
  //           easing: "anticipate",
  //           duration: 750
  //         });
  //       })
  //       .catch(() => {
  //         this.isLoaded = true;
  //       });
  //   });
  // }

  private toggleJobDetails(job: Job) {
    if (job.isSelected) {
      this.jobs.forEach((j: Job) => {
        j.isSelected = false;
        j.isUnselected = false;
      });
    } else {
      this.jobs.forEach((j: Job) => {
        j.isSelected = false;
        j.isUnselected = true;
      });
      job.isSelected = true;
      job.isUnselected = false;
    }
  }
}
</script>

<style>
.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(6, 15%);
  grid-auto-flow: dense;
}

.grid-item:not(.expanded):hover {
  margin: -0.0175rem;
  transition: margin 250ms;
}

    .grid-item {
        grid-column:span 1;
        grid-row: span 3;
    }

    .grid-item.collapsed {
        grid-column:span 1;
        grid-row: span 2;
    }

    .grid-item.expanded {
        grid-column: span 2;
        grid-row: 1/ span 4;
      }


</style>


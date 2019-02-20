<template>
  <div
    class="experience py-24 h-full flex flex-col items-center container mx-auto"
    v-if="isLoaded"
  >

    <div class="grid item-center justify-start w-full relative">
      <template v-for="job in jobs">
        <div
          @click.stop="toggleJobDetails($event, job)"
          class="grid-item m-2 box cursor-pointer bg-white"
          :key="job.start"
        >
          <job-card
            class="content pointer-events-none "
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
import { wrapGrid } from "animate-css-grid";

@Component({
  components: {
    "job-card": JobCard
  }
})
export default class Experience extends Vue {
  private jobs: Job[] = [];
  private isLoaded: boolean = false;
  private selectedJob: Job = new Job();
  private isJobSelected: boolean = false;
  forceGridAnimation: Function;

  toggleJobDetails(event: Event, job: Job) {
    this.isJobSelected = !this.isJobSelected;

    if (!(<Element>event.target).classList.contains("selected")) {
      document.querySelectorAll(".grid-item").forEach((el: Element) => {
        el.classList.remove("selected");
        el.classList.add("unselected");
      });

      (<Element>event.target).classList.add("selected");
      (<Element>event.target).classList.remove("unselected");
    } else {
      // reset display
      document.querySelectorAll(".grid-item").forEach((el: Element) => {
        el.classList.remove("selected");
        el.classList.remove("unselected");
      });
    }
    this.selectedJob = job;
  }

  public updated() {
    const grid = <HTMLElement>document.querySelector(".grid");

    //  console.log(grid)
    wrapGrid(grid, {
      easing: "easeInOut",
      duration: 750
    });
  }

  public mounted() {
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
.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(6, 15%);
  grid-gap: 16px;
  grid-auto-flow: dense;
  height: calc(100% - 1rem);
}

.grid-item {
  /* transition: transform 1000ms; */
  /* grid-column: span 1; */
  grid-row: span 3;
}

.grid-item.selected {
  /* transition: transform 1000ms; */
  grid-column: span 2;
  grid-row: 1 / span 4;
}

.grid-item.unselected {
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


<template>
  <div>
    <job-card
      class="h-full bg-white md:bg-transparent rounded"
      :job="job"
    >
      <button
        class="text-xs text-orange uppercase flex justify-center items-center p-2 rounded my-2"
        @click="open()"
      >
        Learn more

      </button>
    </job-card>
    <portal
      to="modal"
      v-if="isSelected"
    >

      <!-- <transition name="slide-down"> -->

        <div 
          style="top:0;left:0;overflow-y:auto"
          class="fixed w-screen h-screen flex flex-col  bg-white z-20 "
        >
          <job-card
            class="h-full "
            :job="job"
            :is-expanded=true
          >
          </job-card>

          <div
            class="h-8  py-1 absolute"
            style="top:0;right:0;"
          >
            <button
              class="h-6 w-6 m-2 text-grey-dark fill-current"
              style="bottom:0;right:0"
              @click="close()"
            >
              <img
                svg-inline
                src="../assets/icons/close.svg"
                alt="Close"
              /></button>
          </div>

        </div>
      <!-- </transition> -->
    </portal>

  </div>

</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import Job from "@/models/job";
import JobCard from "@/components/JobCard.vue";

@Component({
  components: {
    "job-card": JobCard
  }
})
export default class SkillJob extends Vue {
  @Prop() public job: Job;

  public isSelected: boolean = false;

  open() {
    this.isSelected = true;
  }

  close() {
    this.isSelected = false;
  }
}
</script>

<style scoped>
.slide-down-enter-active {
  transition: all 400ms ease;
}
.slide-down-leave-active {
  transition: all 400ms;
  transform: scale(1);
  opacity: 1;
}
.slide-down-enter,
.slide-down-leave-to {
  transform: scale(0);
  opacity: 0;
}
</style>

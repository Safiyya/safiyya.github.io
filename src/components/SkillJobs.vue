<template>
  <div :class="{'max-h-full overflow-y-auto overflow-x-hidden':isExpanded}">
    <job-card
      class="h-full bg-white md:bg-transparent rounded"
      :job="job"
      :is-expanded="isExpanded"
    >
      <button
        class="md:hidden text-xs text-orange uppercase flex justify-center items-center p-2 rounded my-2"
        @click.stop="openModal()"
      >
        Learn more

      </button>
      <button
        class="hidden md:block text-xs text-orange uppercase flex justify-center items-center p-2 rounded my-2"
        @click.stop="toggleJob()"
      >
        {{ isExpanded ? "Close" : "Learn more"}}

      </button>
    </job-card>

    <modal
      ref="modal"
      :fullscreen=true
    >
      <job-card
        class="h-full"
        :job="job"
        :is-expanded=true
      >
      </job-card>
    </modal>

    <!-- <portal
      to="about-jobs-section"
      v-if="isExpanded"
    >
      <job-card
        class="flex"
        :job="job"
        :is-expanded=true
      >
      </job-card>
    </portal> -->

  </div>

</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import Job from "@/models/job";
import JobCard from "@/components/JobCard.vue";
import Modal from "@/components/Modal.vue";

@Component({
  components: {
    "job-card": JobCard,
    modal: Modal
  }
})
export default class SkillJob extends Vue {
  @Prop() public job: Job;
  

  public isExpanded: boolean = false;

  openModal() {
    (this.$refs.modal as Modal).open();
  }

  toggleJob() {
    this.isExpanded = !this.isExpanded;
    // this.isExpanded ? this.$emit("expand") : this.$emit("collapse");
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

<template>
  <div :class="{'max-h-full overflow-y-auto overflow-x-hidden bg-grey-lightest rounded-b' :isExpanded}">
    <job-card
      class="h-full bg-white md:bg-transparent rounded relative"
      :job="job"
      :is-expanded="isExpanded"
    >
      <button
        class="md:hidden text-xs text-pink uppercase flex justify-center items-center p-2 rounded my-2"
        @click.stop="openModal()"
      >
        Learn more

      </button>

      <button
        v-show="!isExpanded"
        class="hidden md:flex text-xs text-pink uppercase  justify-center items-center p-2 rounded my-2"
        @click.stop="isExpanded=true"
      >
        Learn more

      </button>
      <button-close
        v-show="isExpanded"
        @click.native.stop="isExpanded=false"
        class="hidden md:block absolute w-4 h-4 m-1" style="top:0;right:0;"
      ></button-close>
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
import ButtonClose from "@/components/buttons/ButtonClose.vue";

@Component({
  components: {
    "job-card": JobCard,
    modal: Modal,
    "button-close": ButtonClose
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

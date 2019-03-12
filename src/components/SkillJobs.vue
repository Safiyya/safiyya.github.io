<template>
  <div>
    <job-card
      class="h-full bg-white md:bg-transparent rounded"
      :job="job"
    >
      <button
        class="text-xs text-orange uppercase flex justify-center items-center p-2 rounded my-2"
        @click="openModal()"
      >
        Learn more

      </button>
    </job-card>

    <modal ref="modal">
      <job-card
        class="h-full"
        :job="job"
        :is-expanded=true
      >
      </job-card>
    </modal>
  </div>

</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import Job from "@/models/job";
import JobCard from "@/components/JobCard.vue";
import Modal from '@/components/Modal.vue';

@Component({
  components: {
    "job-card": JobCard,
    "modal":Modal
  }
})
export default class SkillJob extends Vue {
  @Prop() public job: Job;

  public isSelected: boolean = false;

  openModal(){
      (this.$refs.modal as Modal).open();
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

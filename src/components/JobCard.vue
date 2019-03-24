<template>

  <card>
    <div
      @mouseover="toggleDetails()"
      @mouseout="toggleDetails()"
      class="w-full h-full company-background rounded-lg flex justify-center items-center"
      :style="!!job.company.background && 'background-image: url('+job.company.background+')'"
      :class="{'bg-gradient-secondary': !job.company.background}"
    >
      <div
        class="opacity-screen rounded-lg"
        v-show="!showDetails"
      >

      </div>
      <img
        v-show="!showDetails"
        class="absolute w-3/5 self-center company-picture p-4"
        :src="job.company.picture"
        alt=""
      >

      <div
        v-show="showDetails"
        class="rounded-lg p-8 w-full h-full flex flex-col justify-center items-center  bg-secondary-darkest text-grey-lightest"
      >
        <div class="text-xl">
          {{job.company.vision}}
        </div>
        <button
          :href="job.company.url"
          target="blank"
          class="mt-4 p-3 rounded-full flex text-white text-bold uppercase border border-2 border-primary"
        >Visit website
          <simple-svg
            class="text-white w-8 h-8 fill-current flex justify-center items-center h-full"
            :filepath="require('@/assets/icons/chevron-right.svg')"
            :width="'50%'"
            :height="'50%'"
          />

        </button>
      </div>

    </div>
  </card>

</template>

<script lang="ts">
import { Vue, Component, Prop, Provide } from "vue-property-decorator";
import Job from "@/models/job";
import IconWithTextVue from "@/components/IconWithText.vue";
import "../extensions/string.extensions";
import Card from "@/components/cards/Card.vue";

@Component({
  components: {
    "icon-with-text": IconWithTextVue,
    card: Card
  }
})
export default class JobCard extends Vue {
  @Prop() public job: Job;
  @Prop() public isExpanded: boolean;
  showDetails: boolean = false;

  toggleDetails() {
    this.showDetails = !this.showDetails;
  }
}
</script>

<style>
.company-background {
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  background-origin: content-box;
}

.company-background:hover > .company-picture {
  transform: scale(1.25);
  transition: all 400ms;
}

.company-picture {
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center center;
  background-origin: content-box;
  transition: all 400ms;
}

.opacity-screen {
  top: 0;
  left: 0;
  filter: grayscale(0.75) opacity(0.5);
  @apply absolute w-full h-full absolute bg-secondary;
}

.blur {
  filter: blur(10px) opacity(0.5);
  transform: scale(2);
  pointer-events: none;
}
</style>


<template>

  <card>
    <div class="job-card w-full h-full rounded-lg flex justify-center items-center">
      <div
        class="company-background rounded-lg absolute"
        :style="!!job.company.background && 'background-image: url('+job.company.background+')'"
        :class="{'bg-gradient-secondary': !job.company.background}"
      >
        <div class="opacity-screen rounded-lg">
        </div>

      </div>
      <img
        class="absolute w-3/5 self-center company-picture p-4"
        :src="job.company.picture"
        alt=""
      >

      <div class="details rounded-lg p-8 w-full h-full flex flex-col justify-between items-center  bg-secondary-darkest text-grey-lightest">
        <div class="text-xl">
          {{job.company.vision}}
        </div>

        <a
          :href="job.company.url"
          target="blank"
          class="button mt-4 p-3 rounded-full flex items-center text-white text-sm text-bold uppercase border border-2 border-primary"
        >Visit website
          <simple-svg
            class="text-white w-6 h-6 fill-current flex justify-center items-center h-full"
            :filepath="require('@/assets/icons/chevron-right.svg')"
            :width="'100%'"
            :height="'100%'"
          />
        </a>

        <div class="flex w-full justify-between mt-8">
          <icon-with-text 
            :class="{'invisible':!!!job.location.country}"
            :icon-url="require('@/assets/icons/map-pin.svg')"
            :text="job.location.country"
          ></icon-with-text>
           <icon-with-text
            :class="{'invisible':!!!job.company.industry}"
            :icon-url="require('@/assets/icons/briefcase.svg')"
            :text="job.company.industry"
          ></icon-with-text>
        </div>

        
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
}
</script>

<style>
.job-card > .company-background {
  opacity: 1;
  display:block;
  transition: all 400ms;
}

.job-card:hover > .company-background {
  opacity: 0;
  visibility:hidden;
  transition: all 400ms;
}

.job-card > .company-picture {
  opacity: 1;
  transition: all 400ms;
}

.job-card:hover > .company-picture {
  opacity: 0;
  visibility:hidden;
  transform: scale(1.25);
  transition: all 400ms;
}

.company-background {
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  background-origin: content-box;
  @apply h-full w-full;
}

/* .company-background:hover > .company-picture {
  transform: scale(1.25);
  transition: all 400ms;
} */

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
  filter: grayscale(0.5) opacity(0.5);
  @apply absolute w-full h-full absolute bg-secondary;
}
</style>


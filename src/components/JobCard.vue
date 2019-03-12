<template>

  <div class=" flex overflow-hidden flex-col ">
    <div
      v-if="!isExpanded"
      v-bind:class="{'h-32 lg:h-32':!isExpanded}"
      class="w-full flex flex-row justify-between rounded-t lg:rounded-t-none lg:rounded-l text-center "
    >
      <div
        class="company-picture w-full h-full p-3"
        :style="'background-image: url('+job.company.picture+')'"
        :title="job.company.name"
      >
      </div>

    </div>

    <div
      v-if="isExpanded"
      class="m-2 p-2 rounded h-48 relative flex flex-col justify-between"
    >
      <div
        class="absolute blur company-picture w-full h-full p-3"
        :style="'background-image: url('+job.company.picture+')'"
      >
      </div>
      <div class="text-lg my-3 text-left ">

        {{job.company.vision}}
      </div>

      <div
        class="flex  flex-row items-left justify-between text-xs mt-5"
        :class="{'mb-6':job.isSelected, 'flex-col': job.isSelected, 'flex-row':job.isUnselected }"
      >
        <icon-with-text
          :url="job.company.url"
          :text="job.company.name"
        >
          <img
            svg-inline
            src="../assets/icons/network.svg"
            alt="Dates"
          />
        </icon-with-text>

        <icon-with-text :text="job.location.country">
          <img
            svg-inline
            src="../assets/icons/location.svg"
            alt="Location"
          />
        </icon-with-text>
        <!-- <icon-with-text
        class="invisible"
        :text="job.start.formatDate() + ' - ' +job.end.formatDate()"
      >
        <img
          svg-inline
          src="../assets/icons/calendar.svg"
          alt="Dates"
        />
      </icon-with-text> -->

        <icon-with-text :text="job.company.industry">
          <img
            svg-inline
            src="../assets/icons/library.svg"
            alt="Industry"
          />
        </icon-with-text>

      </div>

    </div>

    <div v-bind:class="{'bg-grey-darkest text-grey-lightest flex-1':isExpanded}">

      <div class="text-xl font-semibold py-3  flex flex-col justify-center">
        {{job.title}}
        <slot></slot>
      </div>

      <div
        v-if="isExpanded"
        class="flex flex-wrap items-end px-2 my-3"
      >
        <span
          v-for="(tech, ix) in job.technologies"
          :key="tech"
          :class="{'ml-0': ix==0}"
          class="whitespace-no-wrap bg-grey-dark uppercase text-xs text-white font-bold py-1 px-3 rounded-full m-1"
        >
          <span>{{tech}} </span>
        </span>
      </div>

      <div
        v-if="isExpanded"
        class="rounded-b lg:rounded-b-none w-full lg:rounded-r p-4 flex flex-col justify-center "
      >
        <div class="flex flex-col lg:flex-grow">

          <ul class=" text-lg list-reset mb-6 flex flex-col">
            <li
              v-for="task in job.tasks"
              :key="task.header"
              class="text-left mb-2"
            >
              <span>
                <img
                  class="w-6 h-6 mr-3 text-grey-light fill-current float-left"
                  svg-inline
                  src="../assets/icons/checkmark-outline.svg"
                  alt="example"
                />
                <span>{{task.header}}</span>
              </span>
            </li>
          </ul>
        </div>
      </div>

    </div>

  </div>

</template>

<script lang="ts">
import { Vue, Component, Prop, Provide } from "vue-property-decorator";
import Job from "@/models/job";
import IconWithTextVue from "@/components/IconWithText.vue";
import "../extensions/string.extensions";

@Component({
  components: {
    "icon-with-text": IconWithTextVue
  }
})
export default class JobCard extends Vue {
  @Prop() public job: Job;
  @Prop() public isExpanded: boolean;
}
</script>

<style>
.company-picture {
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;

  background-origin: content-box;
}

.blur {
  filter: blur(10px) opacity(0.5);
  transform: scale(2);
}
</style>


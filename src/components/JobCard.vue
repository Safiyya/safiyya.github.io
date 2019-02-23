<template>

  <div
    class="w-full border rounded flex overflow-hidden "
    v-bind:class="{'flex-col': !job.isSelected, 'flex-row':job.isSelected}"
  >
    <!-- <div
      v-if="job.freelance"
      class="corner-ribbon bg-teal text-teal-lightest top-right font-bold"
    >Freelance</div> -->
    <div class="h-full w-full   p-4 flex flex-col rounded-t lg:rounded-t-none lg:rounded-l text-center "
    :class="{'bg-grey-lightest':job.isSelected}">
      <div
        class="company-picture "
        :class="{'w-32 h-32 lg:w-48 lg:h-48 xl:w-64 xl:h-64 ':job.isSelected, 'h-full':!job.isSelected}"
        :style="'background-image: url('+job.company.picture+')'"
        :title="job.company.name"
      >
      </div>

      <div
          class="flex items-left justify-between"
          :class="{'mb-6':job.isSelected, 'flex-col': job.isSelected, 'flex-row':job.isUnselected }"
        >

          <icon-with-text
            v-if="job.isSelected"
            :text="job.location.city + ', ' +job.location.country"
          >
            <img
              svg-inline
              src="../assets/icons/location.svg"
              alt="Location"
            />
          </icon-with-text>
          <icon-with-text v-if="job.isSelected" :text="job.start.formatDate() + ' - ' +job.end.formatDate()">
            <img
              svg-inline
              src="../assets/icons/calendar.svg"
              alt="Dates"
            />
          </icon-with-text>
          <icon-with-text
            v-if="job.isSelected"
            :url="job.company.url"
            :text="job.company.name"
          >
            <img
              svg-inline
              src="../assets/icons/network.svg"
              alt="Dates"
            />
          </icon-with-text>
          <icon-with-text
            v-if="job.isSelected"
            :text="job.company.industry"
          >
            <img
              svg-inline
              src="../assets/icons/library.svg"
              alt="Industry"
            />
          </icon-with-text>

        </div>

    </div>

    <div class="rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
      <div class="flex flex-col flex-grow">

        <div
          class="font-bold text-base lg:text-2xl  flex justify-center"
          :class="{'mb-6':job.isSelected, 
          'text-black':job.isSelected, 
          'text-grey':job.isUnselected }"
        >{{job.title}}
        </div>

        
        <ul
          v-if="job.isSelected"
          class="text-grey-darker text-lg list-reset mb-6 flex  flex-col"
        >
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

        <div
          v-if="job.isSelected"
          class="flex flex-wrap items-end"
        >
          <span
            v-for="(tech, ix) in job.technologies"
            :key="tech"
            :class="{'ml-0': ix==0}"
            class="bg-grey-dark uppercase text-xs text-white font-bold py-1 px-3 rounded-full m-1"
          >
            <span>{{tech}} </span>

          </span>
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
}
</script>

<style>
.company-picture {
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;

  background-origin: content-box;
}
</style>


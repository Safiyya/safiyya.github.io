<template>

  <div class="w-full  border rounded flex flex-col overflow-hidden ">
    <div v-if="job.freelance" class="corner-ribbon bg-teal text-teal-lightest top-right font-bold">Freelance</div>
    <div class="h-full w-full  flex flex-col justify-between p-4 rounded-t lg:rounded-t-none lg:rounded-l text-center ">
      <div
        class="company-picture h-full"
        :style="'background-image: url('+job.company.picture+')'"
        :title="job.company.name"
      >
      </div>

    </div>

    <div class="rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
      <div class="flex flex-col flex-grow">

        <div class="text-black font-bold text-2xl  flex justify-start mb-6">{{job.title}}</div>
  

        <div class="flex items-left flex-col ">

          <icon-with-text class="mb-2" :text="job.location.city + ', ' +job.location.country">
            <img
              svg-inline
              src="../assets/icons/location.svg"
              alt="Location"
            />
          </icon-with-text>
          <icon-with-text :text="job.start.formatDate() + ' - ' +job.end.formatDate()">
            <img
              svg-inline
              src="../assets/icons/calendar.svg"
              alt="Location"
            />
          </icon-with-text>

        </div>
        <!-- <ul
          class="text-grey-darker text-base list-reset mb-6 flex flex-grow flex-col"
          
        >
          <li v-for="task in job.tasks"
          :key="task.header" class="text-left mb-2">
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
        </ul> -->

        <!-- <div class="flex flex-wrap items-end">
          <span v-for="tech in job.technologies" :key="tech"
            class="bg-blue-dark uppercase text-xs text-white font-bold py-2 px-4 rounded-full m-1"
          >
            <span>{{tech}}
            </span>

          </span>
        </div> -->
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
  @Prop() job: Job;
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


<template>

  <div class="max-w-md w-full  lg:flex ">
    <div class="h-auto bg-grey-lightest flex flex-col justify-between border border-r-0 p-4 rounded-t lg:rounded-t-none lg:rounded-l text-center ">
      <div
        class="bg-cover company-picture w-48 h-48 mb-4"
        :style="'background-image: url('+job.company.picture+')'"
        :title="job.company.name"
      >
      </div>
     <div class="flex items-left flex-col ">
        <p class="text-sm text-grey-dark flex items-center mb-1" >
          <img
            svg-inline
            class="svg-icon mr-1"
            src="../assets/zondicons/factory.svg"
            alt="example"
          />
          <a :href="job.company.url">{{job.company.name}}</a>
          
        </p>

        <p class="text-sm text-grey-dark flex items-center mb-1">
          <img
            svg-inline
            class="svg-icon mr-1"
            src="../assets/zondicons/location.svg"
            alt="example"
          />
          {{job.location.city}}, {{job.location.country}}
        </p>
      </div>
    </div>

    <div class="border-r border-b border-l border-grey-light lg:border-l-0 lg:border-t lg:border-grey-light bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
      <div class="mb-8">
       
        <div class="text-black font-bold text-xl mb-2 flex">{{job.title}}</div>

        <ul
          class="text-grey-darker text-base list-reset"
          v-for="task in job.tasks"
          :key="task.header"
        >
          <li class="text-left">{{task.header}}</li>
        </ul>
      </div>
       <p class="text-sm text-grey-dark flex items-center mb-1">
          <img
            svg-inline
            class="svg-icon mr-1"
            src="../assets/zondicons/time.svg"
            alt="example"
          />
          {{job.start}} until {{job.end}}
        </p>
      
    </div>
  </div>

</template>

<script lang="ts">
import { Vue, Component, Prop, Provide } from "vue-property-decorator";
import Job from "@/models/job";

@Component({})
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


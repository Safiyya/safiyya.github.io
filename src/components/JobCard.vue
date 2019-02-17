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
        <icon-with-text
          :text="job.company.name"
          :url="job.company.url"
        >
          <img
            svg-inline
            src="@/assets/icons/home.svg"
            :alt="text"
          />
        </icon-with-text>

        <icon-with-text :text="job.location.city + ', ' +job.location.country">
          <img
            svg-inline
            src="@/assets/icons/home.svg"
            :alt="text"
          />
        </icon-with-text>

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
      <icon-with-text :text="job.start + '/' +job.end">
        <img
          svg-inline
          src="../assets/icons/time.svg"
          alt="example"
        />
      </icon-with-text>

    </div>
  </div>

</template>

<script lang="ts">
import { Vue, Component, Prop, Provide } from "vue-property-decorator";
import Job from "@/models/job";
import IconWithTextVue from "@/components/IconWithText.vue";

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


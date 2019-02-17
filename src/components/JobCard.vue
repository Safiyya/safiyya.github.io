<template>

  <div class="max-w-md lg:h-96 w-full shadow-md rounded-lg lg:flex ">
    <div class="h-auto bg-grey-lightest flex flex-col justify-between p-4 rounded-t lg:rounded-t-none lg:rounded-l text-center ">
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
            src="@/assets/icons/location.svg"
            :alt="text"
          />
        </icon-with-text>

              <icon-with-text :text="job.start + '/' +job.end">
        <img
          svg-inline
          src="../assets/icons/calendar.svg"
          alt="example"
        />
      </icon-with-text>

      </div>
    </div>

    <div class="bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
      <div class="flex flex-col flex-grow">

        <div class="text-black font-bold text-2xl mb-2 flex">{{job.title}}</div>

        <ul
          class="text-grey-darker text-base list-reset"
          v-for="task in job.tasks"
          :key="task.header"
        >
          <li class="text-left mb-2">
            <span>
              <img
                class="w-6 h-6 mr-3 text-grey-light hover:text-blue fill-current float-left"
                svg-inline
                src="../assets/icons/checkmark-outline.svg"
                alt="example"
              />
              <span>{{task.header}}</span>
            </span>

          </li>
        </ul>

        <div class="flex flex-wrap items-end">
          <span
            v-for="tech in job.technologies"
            :key="tech"
            class="bg-blue text-sm text-white font-bold py-2 px-4 rounded-full m-1"
          >
            <span>{{tech}}
            </span>

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


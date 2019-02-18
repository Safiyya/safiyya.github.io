<template>
  <nav class="h-16 bg-transparent flex w-full">

    <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
      <div class="text-sm lg:flex-grow">
        <a
          href="#responsive-header"
          class="block mt-4 lg:inline-block lg:mt-0 text-teal-lighter hover:text-white mr-4"
        >
          Docs
        </a>
        <a
          href="#responsive-header"
          class="block mt-4 lg:inline-block lg:mt-0 text-teal-lighter hover:text-white mr-4"
        >
          Examples
        </a>
        <a
          href="#responsive-header"
          class="block mt-4 lg:inline-block lg:mt-0 text-teal-lighter hover:text-white"
        >
          Blog
        </a>
      </div>
      <div>
        <a
          href="#"
          class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal hover:bg-white mt-4 lg:mt-0"
        >Download</a>
      </div>
    </div>
    <!-- <ul class="list-reset flex">
      <li>
        <navigation-pill
          class="text-blue fill-current"
          :text="'About'"
          :to="'/about'"
        >
          <img
            svg-inline
            src="@/assets/icons/home.svg"
            alt="About"
          />
        </navigation-pill>
      </li>
      <li>
        <navigation-pill
          class="text-red fill-current"
          :text="'Experience'"
          :to="'/jobs'"
        >
          <img
            svg-inline
            src="@/assets/icons/portfolio.svg"
            alt="Experience"
          />
        </navigation-pill>
      </li>
      <li>
        <navigation-pill
          class="flex-col"
          :text="'Projects'"
          :to="'/projects'"
        >
          <img
            svg-inline
            src="@/assets/icons/gift.svg"
            alt="Projects"
          />
        </navigation-pill>
      </li>
      <li>
        <navigation-pill
          class="flex-col"
          :text="'Skills'"
          :to="'/skills'"
        >
          <img
            svg-inline
            src="@/assets/icons/code.svg"
            alt="Skills"
          />
        </navigation-pill>
      </li>
      <li>
        <navigation-pill
          class="flex-col"
          :text="'Bookshelf'"
          :to="'/bookshelf'"
        >
          <img
            svg-inline
            src="@/assets/icons/news-paper.svg"
            alt="Bookshelf"
          />
        </navigation-pill>
      </li>

      <li>
        <navigation-pill
          class="flex-col"
          :text="'Resume'"
          :to="'/resume'"
        >
          <img
            svg-inline
            src="@/assets/icons/document.svg"
            alt="Resume"
          />
        </navigation-pill>
      </li>
      <li>
        <navigation-pill
          class="flex-col"
          :text="'Contact'"
          :to="'/contact'"
        >
          <img
            svg-inline
            src="@/assets/icons/at-symbol.svg"
            alt="Contact"
          />
        </navigation-pill>
      </li>
    </ul> -->
  </nav>
</template>

<script lang="ts">
import { Vue, Component, Prop, Watch } from "vue-property-decorator";
import NavigationPillVue from "@/components/NavigationPill.vue";

@Component({
  components: {
    "navigation-pill": NavigationPillVue
  }
})
export default class extends Vue {}
</script>

<style>
</style>

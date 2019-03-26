<template>

  <div
    id="app"
    class="h-full"
  >
    <!-- <span
      class="fixed text-red text-3xl z-50"
      style="top:3rem"
    >
      <span class="block sm:hidden">XS</span>
      <span class="hidden sm:block md:hidden">SM</span>
      <span class="hidden md:block lg:hidden">MD</span>
      <span class="hidden lg:block xl:hidden">LG</span>
      <span class="hidden xl:block">XL</span>
    </span> -->

    <header-menu
      @navigate="$scrollTo($event)"
      class="md:w-4/5 xl:w-full flex  lg:px-32"
    ></header-menu>
    <div v-scroll-spy="{data: 'section'}">
      <home
      @navigate="$scrollTo(5)"
        style="height:calc(100vh - 16rem + 3rem)"
        class="lg:px-32 px-4 "
      ></home>
      <about class="mt-16 md:mt-0"></about>
      <skills></skills>
      <experience class="xl:px-32 xl:mb-32 mt-16"></experience>
      <currently class="mb-32 xl:mb-48"></currently>
      <contact></contact>
    </div>

    <div>

    </div>
  </div>

</template>

<script lang="ts">
import { Vue, Component, Prop, Provide, Watch } from "vue-property-decorator";
import Home from "@/views/Home.vue";
import MenuVue from "@/components/Menu.vue";
import Experience from "@/views/Experience.vue";
import About from "@/views/About.vue";
import Projects from "@/views/Projects.vue";
import Contact from "@/views/Contact.vue";
import Currently from "@/views/Currently.vue";
import { Route } from "vue-router";
import HeaderVue from "@/components/Header.vue";
import Skills from "@/views/Skills.vue";

@Component({
  components: {
    home: Home,
    experience: Experience,
    currently: Currently,
    about: About,
    skills: Skills,
    projects: Projects,
    contact: Contact,
    "header-menu": HeaderVue
  }
})
export default class AppVue extends Vue {
  private section: number = 0;

}
</script>

<style lang="scss">
</style>

<template>
  <!-- <span class="fixed text-red text-3xl z-50" style="top:3rem">
  <span class="block sm:hidden">XS</span>
  <span class="hidden sm:block md:hidden">SM</span>
  <span class="hidden md:block lg:hidden">MD</span>
  <span class="hidden lg:block xl:hidden">LG</span>
  <span class="hidden xl:block">XL</span>
</span> -->

  <div
    id="app"
    class="h-full"
  >

    <header-menu class="mx-32"></header-menu>
    <home style="height:calc(100vh - 16rem + 3rem)" class="px-32 "></home>
    <about></about>
    <div>

    </div>
  </div>

</template>

<script lang="ts">
import { Vue, Component, Prop, Provide, Watch } from "vue-property-decorator";
import Home from "@/views/Home.vue";
import MenuVue from "@/components/Menu.vue";
import Experience from "@/views/Jobs.vue";
import About from "@/views/About.vue";
import Projects from "@/views/Projects.vue";
import Contact from "@/views/Contact.vue";
import Who from "@/views/Who.vue";
import { Route } from "vue-router";
import HeaderVue from "@/components/Header.vue";

@Component({
  components: {
    home: Home,
    experience: Experience,
    about: About,
    projects: Projects,
    contact: Contact,
    "header-menu": HeaderVue
  }
})
export default class AppVue extends Vue {}
</script>

<style lang="scss">

</style>

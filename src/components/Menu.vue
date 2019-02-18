<template>
  <nav class="h-12 texture-background flex w-full border-b-4 border-orange">

    <div class="w-full block flex-grow lg:flex lg:items-center justify-start lg:w-auto">
      <div class="text-xl mx-24 flex justify-between w-full">
        <router-link data-menuanchor="about"
          to="/about"
          class="uppercase text-grey-lighter"
        >About</router-link>
        <router-link data-menuanchor="experience"
          to="/jobs"
          class="uppercase text-grey-lighter"
        >Experience</router-link>
        <router-link data-menuanchor="portfolio"
          to="/portfolio"
          class="uppercase text-grey-lighter"
        >Portfolio</router-link>
        <router-link data-menuanchor="contact"
          to="/contact"
          class="uppercase text-grey-lighter"
        >Contact</router-link>
      </div>

    </div>
    
  </nav>
</template>

<script lang="ts">
import { Vue, Component, Prop, Watch } from "vue-property-decorator";

@Component({
  components: {
  }
})
export default class extends Vue {}
</script>

<style>
</style>

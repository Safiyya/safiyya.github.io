<template>
  <nav class="h-12 texture-background flex w-full border-b-4 border-teal">

    <div class="w-full block flex-grow flex items-center justify-start">
      <div
        class="md:mx-32 flex justify-around md:w-1/2 w-full text-xs md:text-base"
        id="header-menu"
      >
        <a
          data-menuanchor="about"
          href="#about"
          class="uppercase text-grey-lighter"
        >About</a>
        <a
          data-menuanchor="experience"
          href="/#experience"
          class="uppercase text-grey-lighter"
        >Experience</a>
        <a
          data-menuanchor="portfolio"
          href="/#portfolio"
          class="uppercase text-grey-lighter"
        >Currently</a>
        <a
          data-menuanchor="contact"
          href="/#contact"
          class="uppercase text-grey-lighter"
        >Contact</a>
      </div>

    </div>

  </nav>
</template>

<script lang="ts">
import { Vue, Component, Prop, Watch } from "vue-property-decorator";

@Component({
  components: {}
})
export default class extends Vue {}
</script>

<style>
</style>

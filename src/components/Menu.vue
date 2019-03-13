<template>
  <nav class="z-50 h-12 texture-background flex w-screen">

    <div class="w-full block flex-grow flex items-center justify-start">
      <div v-scroll-spy-active="{selector: 'a.menu-link', class: 'active'}" v-scroll-spy-link
        class="md:mx-32 flex justify-around md:w-1/2 w-full text-xs md:text-base"
        id="header-menu"
      >
           <a
        v-scroll-spy-link id="home"
          href="#home"
          class="hidden menu-link uppercase text-grey-lighter"
        >Home</a>
        <a
        v-scroll-spy-link id="about"
          href="#about"
          class="menu-link uppercase text-grey-lighter"
        >About</a>
        <!-- <a
        v-scroll-spy-link id="experience"
          href="/#experience"
          class="menu-link uppercase text-grey-lighter"
        >Experience</a> -->
        <a
        v-scroll-spy-link id="projects"
          href="/#portfolio"
          class="menu-link uppercase text-grey-lighter"
        >Currently</a>
        <a
        v-scroll-spy-link id="contact"
          href="/#contact"
          class="menu-link uppercase text-grey-lighter"
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
nav {
  top: 100%;
  position: absolute;
  width: 100%;
}

nav.fixed {
  top: 0;
  position: fixed;
  animation: pop 1s;
}

@keyframes pop {
  0% {
    transform: translateY(-3rem);
  }
}
</style>

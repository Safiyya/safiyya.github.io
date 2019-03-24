<template>
  <nav class="py-20  flex uppercase font-bold">
    <a
      id="home"
      href="#home"
      class="no-underline"
    >About me</a>
      <a
      id="recent"
      href="#recent"
      class="mx-32 no-underline"
    >Recent work</a>
     <a
      id="current"
      href="#current"
      class="no-underline"
    >Currently</a>
     <a
      id="contact"
      href="#contact"
      class="ml-auto no-underline"
    >Get in touch</a>
  </nav>

  <!-- <nav class="z-50 h-12 texture-background border-b-4 border-teal flex w-screen">

    <div class="w-full block flex-grow flex items-center justify-start">
      <div v-scroll-spy-active="{selector: 'a.menu-link', class: 'active'}" v-scroll-spy-link
        class="md:mx-auto flex justify-around md:w-1/2 w-full text-xs md:text-base"
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
        >Skills</a>
        <a
        v-scroll-spy-link id="projects"
          href="/#portfolio"
          class="menu-link uppercase text-grey-lighter"
        >Projects</a>
        <a
        v-scroll-spy-link id="contact"
          href="/#contact"
          class="menu-link uppercase text-grey-lighter"
        >Contact</a>
      </div>

    </div>

  </nav> -->
</template>

<script lang="ts">
import { Vue, Component, Prop, Watch } from "vue-property-decorator";

@Component({
  components: {}
})
export default class extends Vue {}
</script>

<style>
/* nav {
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
} */
</style>

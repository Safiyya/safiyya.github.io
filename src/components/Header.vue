<template>
  <nav
    class="md:py-20  flex uppercase font-bold text-secondary"
    :class="{'bg-secondary text-white md:bg-white md:text-secondary':isMobileMenuVisible}"
  >
    <div class=" w-12 h-12 md:hidden">
      <button
        @click="toggle()"
        class="flex items-center p-1 text-secondary"
      >
        <simple-svg
          v-show="!isMobileMenuVisible"
          class="flex justify-center"
          :filepath="require('@/assets/icons/menu.svg')"
          :width="'100%'"
          :height="'100%'"
        />
        <simple-svg
          v-show="isMobileMenuVisible"
          class="flex justify-center text-white"
          :filepath="require('@/assets/icons/x.svg')"
          :width="'100%'"
          :height="'100%'"
        />
      </button>
    </div>
    <div
      v-scroll-spy-active
      v-scroll-spy-link
      class="menu-container flex-grow md:flex md:justify-between md:items-center md:w-auto"
      :class="{
        'hidden':!isMobileMenuVisible,
        'h-screen flex flex-col p-3 justify-between items-end ':isMobileMenuVisible}"
    >
      <a
        id="home"
        href="#home"
        class="hidden"
      >Home</a>
      <a
        @click="navigate(1)"
        id="about"
        href="#about"
        class="header mb-8 md:mb-0 no-underline"
      >About me</a>
      <a
        id="skills"
        href="#skills"
        class="hidden"
      >Skills</a>
      <a
        @click="navigate(3)"
        id="recent"
        href="#recent"
        class="header lg:mx-12 xl:mx-32 my-8 md:my-0 no-underline"
      >Recent work</a>
      <a
        @click="navigate(4)"
        id="current"
        href="#current"
        class="header my-8 md:my-0 no-underline"
      >Currently</a>
      <a
        @click="navigate(5)"
        id="contact"
        href="#contact"
        class="header lg:ml-auto my-8 md:my-0 no-underline"
      >Get in touch</a>
    </div>

  </nav>
</template>

<script lang="ts">
import { Vue, Component, Prop, Watch } from "vue-property-decorator";

@Component({
  components: {}
})
export default class extends Vue {
  private isMobileMenuVisible: boolean = false;

  private toggle() {
    this.isMobileMenuVisible = !this.isMobileMenuVisible;
  }

  private navigate(sectionId: number) {
    this.$emit("navigate", sectionId);
  }
}
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

 */
.menu-container {
}

.menu-container.h-screen {
  animation: pop-right 400ms;
}

@keyframes pop-right {
  0% {
    transform: translateX(100%);
  }
}

@keyframes pop-left {
  0% {
    transform: translateX(0%);
  }
}
</style>

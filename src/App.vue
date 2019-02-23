<template>

  <div
    id="app"
    class="h-full"
  >
<!-- <span class="absolute text-red text-3xl z-50" style="top:3rem">
  <span class="block sm:hidden">XS</span>
  <span class="hidden sm:block md:hidden">SM</span>
  <span class="hidden md:block lg:hidden">MD</span>
  <span class="hidden lg:block xl:hidden">LG</span>
  <span class="hidden xl:block">XL</span>
</span> -->

    <div class="header-menu hide z-10">
      <header-menu></header-menu>
    </div>

    <full-page
      @on-leave="onLeave"
      @after-load="onLeave"
      ref="fullpage"
      :options="options"
      id="fullpage"
    >
      <div class="section">
        <home v-on:move-down="onMoveDown()"></home>
      </div>
      <div class="section">
        <about></about>
      </div>
      <div class="section">
        <experience></experience>
      </div>
      <div class="section">
        <projects></projects>
      </div>
      <div class="section">
        <contact></contact>
      </div>
    </full-page>
    <router-view />
  </div>

  <!-- -->

</template>

<script lang="ts">
import { Vue, Component, Prop, Provide } from "vue-property-decorator";
import Home from "@/views/Home.vue";
import MenuVue from "@/components/Menu.vue";
import Experience from "@/views/Jobs.vue";
import About from "@/views/About.vue";
import Projects from "@/views/Projects.vue";
import Contact from "@/views/Contact.vue";
import Who from "@/views/Who.vue";

@Component({
  components: {
    "home": Home,
    "experience": Experience,
    "about": About,
    "projects": Projects,
    "contact": Contact,
    "who": Who,
    "header-menu": MenuVue
  }
})
export default class AppVue extends Vue {
  private options: any = {
    menu: "#header-menu",

    anchors: ["home", "about", "experience", "portfolio", "contact"],
    onLeave: this.onLeave,
    afterLoad: this.afterLoad
    // fitToSection: false
  };
  private isMenuVisible: boolean = false;

  private onMoveDown() {
    (this.$refs.fullpage as any).api.moveSectionDown();
  }

  private afterLoad(origin: any, destination: any, direction: any) {
    if (destination.index === 0) {
      (document.querySelector(".header-menu") as HTMLElement).classList.add(
        "hide"
      );
    } else {
      (document.querySelector(".header-menu") as HTMLElement).classList.remove(
        "hide"
      );
    }

    // if (destination.index == 1) {
    //   document.querySelectorAll(".badge").forEach((el: Element) => {
    //     el.classList.add("flip-in-hor-bottom");
    //   });
    // }
  }

  private onLeave(origin: any, destination: any, direction: any) {
    if (origin.index === 1) {
      (document.querySelector(".header-menu") as HTMLElement).classList.add(
        "header-fixed"
      );
    }

    if (destination.index === 1) {
      (document.querySelector(".header-menu") as HTMLElement).classList.remove(
        "header-fixed"
      );
    }

    if (destination.index === 0) {
      (document.querySelector(".header-menu") as HTMLElement).classList.add(
        "hide"
      );
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: "Raleway", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.header-menu {
  -webkit-transition: all 750ms ease;
  -moz-transition: all 750ms ease;
  -o-transition: all 750ms ease;
  transition: all 750ms ease;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 3rem;
  overflow: auto;
}
.header-menu.header-fixed {
  bottom: auto;
  margin-top: 0;
  height: 3rem;
  overflow: auto;
  -webkit-transition: all 750ms ease;
  -moz-transition: all 750ms ease;
  -o-transition: all 750ms ease;
  transition: all 750ms ease;
}
.header-menu.hide {
  overflow: hidden;
  height: 0;
  -webkit-transition: all 750ms ease;
  -moz-transition: all 750ms ease;
  -o-transition: all 750ms ease;
  transition: all 750ms ease;
}
</style>

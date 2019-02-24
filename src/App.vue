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

    <header-menu></header-menu>

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
import { Vue, Component, Prop, Provide, Watch } from "vue-property-decorator";
import Home from "@/views/Home.vue";
import MenuVue from "@/components/Menu.vue";
import Experience from "@/views/Jobs.vue";
import About from "@/views/About.vue";
import Projects from "@/views/Projects.vue";
import Contact from "@/views/Contact.vue";
import Who from "@/views/Who.vue";
import { Route } from "vue-router";

@Component({
  components: {
    home: Home,
    experience: Experience,
    about: About,
    projects: Projects,
    contact: Contact,
    who: Who,
    "header-menu": MenuVue
  }
})
export default class AppVue extends Vue {
  public mounted() {
    let isMobile = false;
    let nav = document.querySelector("nav") as HTMLElement;

    var navPos = nav.getBoundingClientRect().top;
    var lastPos = 0;

    document.onscroll = (e: UIEvent) => {
      var supportPageOffset = window.pageXOffset !== undefined;
      var isCSS1Compat = (document.compatMode || "") === "CSS1Compat";

      var scrollTop = supportPageOffset
        ? window.pageYOffset
        : isCSS1Compat
        ? document.documentElement.scrollTop
        : document.body.scrollTop;

      var pos = scrollTop;

      if (!isMobile) {
        if (pos >= navPos + nav.offsetHeight && lastPos < pos) {
          nav.classList.add("fixed");
        }
        if (pos < navPos && lastPos > pos) {
          nav.classList.remove("fixed");
        }
        lastPos = pos;
      }
    };
  }

  private options: any = {
    menu: "#header-menu",

    anchors: ["home", "about", "experience", "portfolio", "contact"],
    onLeave: this.onLeave,
    afterLoad: this.afterLoad,
    fitToSection: false,
    autoScrolling: false
  };
  private isMenuVisible: boolean = false;

  private onMoveDown() {
    (this.$refs.fullpage as any).api.moveSectionDown();
  }

  private afterLoad(origin: any, destination: any, direction: any) {}

  private onLeave(origin: any, destination: any, direction: any) {}
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

.section:not:first-child {
  height: calc(100% - 3rem);
  padding-top: 3rem;
}
</style>

<template>

  <div
    id="app"
    class="h-full"
  >
 
    <span class="fixed text-red text-3xl z-50" style="top:3rem">
  <span class="block sm:hidden">XS</span>
  <span class="hidden sm:block md:hidden">SM</span>
  <span class="hidden md:block lg:hidden">MD</span>
  <span class="hidden lg:block xl:hidden">LG</span>
  <span class="hidden xl:block">XL</span>
</span>

 
    <header-menu></header-menu>

    <div v-scroll-spy>

      <div
        class="section"
        id="home-section"
      >
        <home class="h-screen w-full" v-on:move-down="onMoveDown()" ></home>
      </div>
      <div
        class="section"
        id="about-section"
      >
        <about class="pt-8 md:pt-16  p-4" v-on:disable-scroll="disableScrolling()" v-on:enable-scroll="enableScrolling()"></about>
      </div>
      <div
        class="section"
        id="experience-section"
      >
        <experience class="pt-16 p-4"></experience>
      </div>
      <div
        class="section"
        id="projects-section"
      >
        <projects></projects>
      </div>
      <div
        class="section"
        id="contact-section"
      >
        <contact class="pt-16 p-4 h-screen"></contact>
      </div>
    </div>
    <portal-target slim :transition="{ name: 'scale-center'}" name="modal"></portal-target>
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
  private section: number = 1;

  public mounted() {
    const isMobile = false;
    const nav = document.querySelector("nav") as HTMLElement;

    const navPos = nav.getBoundingClientRect().top;
    let lastPos = 0;

    document.onscroll = (e: UIEvent) => {
      const supportPageOffset = window.pageXOffset !== undefined;
      const isCSS1Compat = (document.compatMode || "") === "CSS1Compat";

      const scrollTop = supportPageOffset
        ? window.pageYOffset
        : isCSS1Compat
        ? document.documentElement.scrollTop
        : document.body.scrollTop;

      const pos = scrollTop;

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


  private disableScrolling(){
    console.log("disable scrolling");
    (document.querySelector("body") as HTMLBodyElement).style.overflow ="hidden";
  }

  private enableScrolling(){
    console.log("enable scrolling");
    (document.querySelector("body") as HTMLBodyElement).style.overflow ="auto";
    
  }

  private onMoveDown() {
    console.log("onMoveDown");
    (this as any).$scrollTo(1);
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

.section:not:first-child {
  height: calc(100% - 3rem);
  padding-top: 3rem;
}

.scale-center-enter-active {
  transition: all 400ms ease;
}
.scale-center-leave-active {
  transition: all 400ms;
  transform: scale(1);
  opacity: 1;
}
.scale-center-enter,
.scale-center-leave-to {
  transform: scale(0);
  opacity: 0;
}
</style>

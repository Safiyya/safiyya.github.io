<template>

  <div
    id="app"
    class="h-full"
  >
    <div class="header-menu hide z-10">
      <header-menu id="header-menu"></header-menu>
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

@Component({
  components: {
    home: Home,
    experience: Experience,
    about: About,
    projects: Projects,
    contact: Contact,
    "header-menu": MenuVue
  }
})
export default class AppVue extends Vue {
  options: any = {
    menu: "#header-menu",

    anchors: ["home", "about", "experience", "portfolio", "contact"],
    onLeave: this.onLeave,
    afterLoad: this.afterLoad,
    fitToSection: false
  };
  isMenuVisible: boolean = false;

  onMoveDown() {
    this.$refs.fullpage.api.moveSectionDown();
  }

  afterLoad(origin: any, destination: any, direction: any) {
    if (destination.index == 0) {
      (<HTMLElement>document.querySelector(".header-menu")).classList.add(
        "hide"
      );
    } else {
      (<HTMLElement>document.querySelector(".header-menu")).classList.remove(
        "hide"
      );
    }
  }

  onLeave(origin: any, destination: any, direction: any) {
    if (origin.index == 1) {
      (<HTMLElement>document.querySelector(".header-menu")).classList.add(
        "header-fixed"
      );
    }
    //back to the 1st section
    if (destination.index == 1) {
       
      (<HTMLElement>document.querySelector(".header-menu")).classList.remove(
        "header-fixed"
      );
    }

    if (destination.index == 0) {
       
      (<HTMLElement>document.querySelector(".header-menu")).classList.add(
        "hide"
      );
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.header-menu {
  -webkit-transition: all 1s ease;
  -moz-transition: all 1s ease;
  -o-transition: all 1s ease;
  transition: all 1s ease;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 4rem;
  overflow: auto;
}
.header-menu.header-fixed {
  bottom: auto;
  margin-top: 0;
  height: 4rem;
   -webkit-transition: all 1s ease;
  -moz-transition: all 1s ease;
  -o-transition: all 1s ease;
  transition: all 1s ease;
}
.header-menu.hide {
  overflow: hidden;
  height: 0;
  -webkit-transition: all 1s ease;
  -moz-transition: all 1s ease;
  -o-transition: all 1s ease;
  transition: all 1s ease;
}
</style>

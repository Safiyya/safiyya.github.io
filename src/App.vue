<template>

  <div
    id="app"
    class="h-full"
  >
    <div class="header-menu invisible">
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
        second section
      </div>
      <div class="section">
        thrid section ...
      </div>
      <div class="section">
        fouth section ...
      </div>
      <div class="section">
        five section ...
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

@Component({
  components: {
    home: Home,
    experience: Experience,
    "header-menu": MenuVue
  }
})
export default class AppVue extends Vue {
  options: any = {
    menu: "#menu",
    // afterLoad: this.onLeave,
    // afterLoad: this.onLeave,
    onLeave: this.onLeave,
    fitToSection: false
    // paddingTop: "4rem"
    // anchors: ["page1", "page2", "page3"],
    // sectionsColor: ["#41b883", "#ff5f45", "#0798ec"]
  };
  isMenuVisible: boolean = false;

  onMoveDown() {
    this.$refs.fullpage.api.moveSectionDown();
  }

  onLeave(origin: any, destination: any, direction: any) {
    if (destination.index == 0) {
      (<HTMLElement>document.querySelector(".header-menu")).classList.add(
        "invisible"
      );
    } else {
      (<HTMLElement>document.querySelector(".header-menu")).classList.remove(
        "invisible"
      );
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
    }

    //     if (!origin) return;
    //     this.isMenuVisible =
    //       (origin.isFirst && direction === "down") || !destination.isFirst
    //       // (destination.isFirst && direction === "up") ||
    //       // !origin.isFirst ||
    //       // ;
    //     console.log(this.isMenuVisible, origin, destination, direction);

    // // if(this.isMenuVisible){
    // //   (<HTMLElement>document.querySelector('#header-menu')).classList.remove("tiny")
    // // }else{
    // //   (<HTMLElement>document.querySelector('#header-menu')).classList.add("tiny")

    // // }

    //     // if (nextIndex == 2 && direction == "down") {
    //     //   $(".nav-resize").addClass("tiny");
    //     // }
    //     // if (nextIndex == 1 && direction == "up") {
    //     //   $(".nav-resize").removeClass("tiny");
    //     // }
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
  -webkit-transition: all 0.7s ease;
  -moz-transition: all 0.7s ease;
  -o-transition: all 0.7s ease;
  transition: all 0.7s ease;

  position: absolute;
  top:0;
  // top: 100%;
  // margin-top: -4rem;
  left: 0;
  background: black;
  width: 100%;
  color: #fff;
  height: 4rem;
  z-index: 999;
}
.header-menu.header-fixed {
  bottom: auto;
  // top: 6rem;
  margin-top: 0;
}
</style>

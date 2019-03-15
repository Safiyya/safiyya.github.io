<template>
  <div class="wrapper home texture-background flex flex-col items-center justify-center">

    <!-- <div
      v-for="i in 250"
      :key="i"
      class="particle"
      v-bind:class="getClass()"
    ></div> -->
    <div class="align-self-center flex text-5xl flex-col items-center justify-center container mx-auto">
      <div class="sentence">
        <span>H</span>
        <span>i</span>
        <span>,</span>
        <span>&nbsp;</span>
        <span>I</span>
        <span>'</span>
        <span>m</span>
        <span>&nbsp;</span>
        <span class="text-pink-dark">Safiyya Babio</span>
        <span>.</span>
      </div>
      <div class="sentence">
        <span>I</span>
        <span>'</span>
        <span>m</span>
        <span>&nbsp;</span>
        <span>a</span>
        <span>&nbsp;</span>
        <span>f</span>
        <span>u</span>
        <span>l</span>
        <span>l</span>
        <span>-</span>
        <span>s</span>
        <span>t</span>
        <span>a</span>
        <span>c</span>
        <span>k</span>
        <span>&nbsp;</span>
        <span>d</span>
        <span>e</span>
        <span>v</span>
        <span>e</span>
        <span>l</span>
        <span>o</span>
        <span>p</span>
        <span>e</span>
        <span>r</span>
        <span>.</span>
      </div>
      <!-- <span class="fade-in vibrate">BUTTON</span> -->
     

    </div>
     <div class="slide-in-bottom flex w-3/5 justify-around my-16">
        <button-section
          @click.native="goToPage(1)"
          :icon-url="require('@/assets/heroicons/heroicons-sm/heroicon-tools-sm.svg')"
          :text="'Skills'"
        ></button-section>
        <button-section
          @click.native="goToPage(2)"
          :icon-url="require('@/assets/heroicons/heroicons-sm/heroicon-puzzle-sm.svg')"
          :text="'Currently'"
        ></button-section>
        <button-section
          @click.native="goToPage(3)"
          :is-rotate=true
          :icon-url="require('@/assets/heroicons/heroicons-sm/heroicon-paper-airplane-sm.svg')"
          :text="'Contact'"
        ></button-section>

      </div>

  </div>
</template>
 
<script lang="ts">
import { Component, Vue, Emit } from "vue-property-decorator";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src
import ButtonSection from "@/components/buttons/ButtonSection.vue";

@Component({
  components: {
    HelloWorld,
    "button-section": ButtonSection
  }
})
export default class Home extends Vue {
  private goToPage(index: number) {
    this.$emit("show-page", index);
  }

  private getClass() {
    const i = Math.floor(Math.random() * 25);
    const j = Math.floor(Math.random() * 25);
    return `elem${i} anim-delay${j} fill-current`;
  }
}
</script>

<style scoped lang="css">
/* 

@-webkit-keyframes filter-animation {
  0% {
    -webkit-filter: blur(5px);
  }

  100% {
    -webkit-filter: blur(0px);
  }
} */

.button-link:hover > span {
  @apply text-pink;
}

.rotate-on-hover > svg {
  transform: rotate(0deg);
  transition: all 250ms ease;
}

.rotate-on-hover:hover > svg {
  transform: rotate(90deg);
  transition: all 250ms ease;
}



.sentence {
  position: relative;
  @apply text-grey-lightest
  /* background: white; */;
}

.sentence span {
  opacity: 0;
  /* font-size: 25px;
  line-height: 25px; */
  display: inline-block;
  -webkit-transform-style: preserve-3d;
  transform-style: preserve-3d;
  -webkit-animation-duration: 1s;
  animation-duration: 1s;
  -webkit-animation-fill-mode: forwards;
  animation-fill-mode: forwards;
}

.sentence span:nth-of-type(1n) {
  /* color: orange; */
  -webkit-transform: translateY(-100%);
  transform: translateY(-100%);
  -webkit-animation-name: enter;
  animation-name: enter;
  -webkit-animation-delay: 0.1s;
  animation-delay: 0.1s;
}

.sentence span:nth-of-type(2n) {
  /* color: blue; */
  -webkit-transform: translateY(100%);
  transform: translateY(100%);
  -webkit-animation-name: enter-bottom;
  animation-name: enter-bottom;
  -webkit-animation-delay: 0.2s;
  animation-delay: 0.2s;
}

.sentence span:nth-of-type(3n) {
  /* color: blue; */
  -webkit-transform: translateY(100%);
  transform: translateY(100%);
  -webkit-animation-name: enter;
  animation-name: enter;
  -webkit-animation-delay: 0.3s;
  animation-delay: 0.3s;
}

.sentence span:nth-of-type(4n) {
  /* color: blue; */
  -webkit-transform: translateY(100%);
  transform: translateY(100%);
  -webkit-animation-name: enter-bottom;
  animation-name: enter-bottom;
  -webkit-animation-delay: 0.4s;
  animation-delay: 0.4s;
}

.sentence span:nth-of-type(5n) {
  /* color: blue; */
  -webkit-transform: translateY(100%);
  transform: translateY(100%);
  -webkit-animation-name: enter;
  animation-name: enter;
  -webkit-animation-delay: 0.5s;
  animation-delay: 0.5s;
}

@-webkit-keyframes enter {
  0% {
    opacity: 0;
    -webkit-transform: translateY(-50px);
    transform: translateY(-50px);
  }
  25% {
    opacity: 1;
  }
  100% {
    opacity: 1;
    -webkit-transform: translateY(0px);
    transform: translateY(0px);
  }
}
@keyframes enter {
  0% {
    opacity: 0;
    -webkit-transform: translateY(-50px);
    transform: translateY(-50px);
  }
  25% {
    opacity: 1;
  }
  100% {
    opacity: 1;
    -webkit-transform: translateY(0px);
    transform: translateY(0px);
  }
}
@-webkit-keyframes enter-bottom {
  0% {
    opacity: 0;
    -webkit-transform: translateY(50px);
    transform: translateY(50px);
  }
  25% {
    opacity: 1;
  }
  100% {
    opacity: 1;
    -webkit-transform: translateY(0px);
    transform: translateY(0px);
  }
}
@keyframes enter-bottom {
  0% {
    opacity: 0;
    -webkit-transform: translateY(50px);
    transform: translateY(50px);
  }
  25% {
    opacity: 1;
  }
  100% {
    opacity: 1;
    -webkit-transform: translateY(0px);
    transform: translateY(0px);
  }
}
</style>


<template>
  <div class="wrapper home texture-background flex flex-col items-center justify-center">

    <!-- <div
      v-for="i in 250"
      :key="i"
      class="particle"
      v-bind:class="getClass()"
    ></div> -->
    <div class=" flex text-5xl flex-col items-center justify-center container mx-auto">
      <div class="sentence">
        <span>H</span>
        <span>i</span>
        <span>,</span>
        <span>&nbsp;</span>
        <span>I</span>
        <span>'</span>
        <span>m</span>
        <span>&nbsp;</span>
        <span class="text-orange">Safiyya Babio</span>
        <span >.</span>
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
        <span >.</span>
      </div>
      <!-- <span class="fade-in vibrate">BUTTON</span> -->
      <div class="slide-in-bottom">
<button
        @click="moveDown()"
        class=" move-down-on-hover flex justify-center items-center my-8 
        border-4  p-4 rounded-full "
      >
        <img
          class="w-8 h-8 text-grey-lighter group-hover:text-white fill-current "
          svg-inline
          src="@/assets/icons/cheveron-down.svg"
          alt="About"
        />
      </button>
      </div>
      
      <!-- <div class="sentence"  v-split-characters:span>I'm a full-stack web developer.</div> -->
    </div>

    <!-- <div class="z-10 flex flex-col items-center justify-center container mx-auto">
      <div class="text-grey-lighter text-4xl md:text-5xl">
        <div class="letters">Hi, I'm <span class="letters text-orange font-semibold">Safiyya Babio</span>.
        </div>
        <div class="letters">I'm a full-stack web developer.</div>
      </div> -->

    <!-- <button
        @click="moveDown()"
        class="group rotate-on-hover flex justify-center items-center my-8 
        texture-background border-2 border-grey hover:border-white py-3 px-4 rounded text-grey hover:text-white font-bold text-xs sm:text-base md:text-xl uppercase"
      >
        Let's work together
        <img
          class="w-6 h-6 text-grey group-hover:text-white fill-current ml-2 "
          svg-inline
          src="@/assets/icons/arrow-thick-right.svg"
          alt="About"
        />
      </button> -->
    <!-- </div> -->

  </div>
</template>
 
<script lang="ts">
import { Component, Vue, Emit } from "vue-property-decorator";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src

@Component({
  components: {
    HelloWorld
  }
})
export default class Home extends Vue {
  private moveDown() {
    this.$emit("move-down");
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

.rotate-on-hover > svg {
  transform: rotate(0deg);
  transition: all 250ms ease;
}

.rotate-on-hover:hover > svg {
  transform: rotate(90deg);
  transition: all 250ms ease;
}

.move-down-on-hover{
  transform: translateY(0px);
  transition: all 250ms ease;
}


.move-down-on-hover:hover{
  transform: translateY(1rem);
  transition: all 250ms ease;
}

.sentence {
  position: relative;
  @apply text-grey-lightest
  /* background: white; */
}

.sentence span {
  opacity: 0;
    /* font-size: 25px;
  line-height: 25px; */
  display: inline-block;
  -webkit-transform-style: preserve-3d;
          transform-style: preserve-3d;
  -webkit-animation-duration: 1.5s;
          animation-duration: 1.5s;
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


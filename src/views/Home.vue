<template>
  <div class="flex relative flex-col xl:flex-row lg:justify-around xl:justify-end">

    <div class="hidden relative md:flex xl:block xl:absolute  pin-l xl:mx-32 xl:w-2/5">

      <img
        class="h-full w-full object-contain object-center"
        :src="require('../assets/images/hero-cropped.png')"
        alt=""
        srcset=""
      >

    </div>
    <div class="flex flex-col xl:items-end  ">
      <div class="flex flex-col items-center mt-16 xl:pt-32">
        <h1 class="text-center">Full-stack developer &amp; designer</h1>
        <h4 class="my-4 xl:my-1">
          <div class="text-center subtitle pt-2 ">
            Reliable software from the ground up for small business owners
          </div>
          <div class="text-center subtitle  ">
            and early-stage startups.
          </div>
        </h4>

        <button class="primary my-8 xl:my-5">
          What do you need?
        </button>

      </div>

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
.subtitle {
  letter-spacing: 0.65px;
}

.hero {
  background: url("../assets/images/hero-cropped.png") no-repeat;
  height: 100%;
}

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


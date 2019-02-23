<template>
  <div class="wrapper home h-full w-full texture-background flex flex-col items-center justify-center">

    <div
      v-for="i in 250"
      :key="i"
      class="particle"
      v-bind:class="getClass()"
    ></div>

    <div class="z-10 flex flex-col items-center justify-center container mx-auto">
      <div class="text-grey-lighter text-4xl md:text-5xl">
        <div>Hi, I'm <span class="text-orange font-semibold">Safiyya Babio</span>.
        </div>
        <div>I'm a full-stack web developer.</div>
        <!-- <div class="mt-3">I'm available.</div> -->

      </div>

      
      <button
        @click="moveDown()"
        class="group rotate-on-hover flex justify-center items-center my-8 
        texture-background border-2 border-grey hover:border-white py-3 px-4 rounded text-grey hover:text-white font-bold text-xs sm:text-base md:text-xl uppercase"
      >
        Let's make something together
        <img
          class="w-6 h-6 text-grey group-hover:text-white fill-current ml-2 "
          svg-inline
          src="@/assets/icons/arrow-thick-right.svg"
          alt="About"
        />
      </button>
    </div>

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

<style scoped>
.rotate-on-hover > svg {
  transform: rotate(0deg);
  transition: all 250ms ease;
}

.rotate-on-hover:hover > svg {
  transform: rotate(90deg);
  transition: all 250ms ease;
}

@-webkit-keyframes filter-animation {
  0% {
    -webkit-filter: blur(5px);
  }

  100% {
    -webkit-filter: blur(0px);
  }
}
</style>


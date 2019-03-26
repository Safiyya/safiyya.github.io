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

        <button
          @click="goToContact()"
          class="primary my-1 md:my-8 xl:my-5"
        >
          Tell me about your project
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
  private goToContact() {
    this.$emit("navigate", 5);
  }
}
</script>

<style scoped lang="css">
.subtitle {
  letter-spacing: 0.65px;
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


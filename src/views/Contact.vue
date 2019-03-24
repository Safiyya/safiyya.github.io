<template>
  <div class="pt-48 w-full flex flex-col items-center relative">
    <div class="text-3xl w-2/3 flex justify-center text-center">
      Remote working is second nature to me, I spend my time between Paris, London, Beirut and Vancouver.  
    </div>

    <h6 class="mt-8">Let's meet, coffee is on me.</h6>

    <div class="relative w-full flex justify-center mb-48">
      <div class="w-4/5 bg-white shadow-lg rounded-lg h-96  absolute my-12 ">

      </div>

    </div>

    <div class="bg-secondary-darker text-white w-full h-96 mt-48 flex flex-col items-center justify-center">

      <div class="w-2/5 mt-24 flex justify-between">
        <social-button
          :icon-url="require('@/assets/icons/twitter.svg')"
          :url="'https://twitter.com/safiyyababio'"
        ></social-button>

        <social-button
          :icon-url="require('@/assets/icons/linkedin.svg')"
          :url="'https://www.linkedin.com/in/safiyyasaidoubabio/'"
        ></social-button>

        <social-button
          :icon-url="require('@/assets/icons/github.svg')"
          :url="'https://github.com/Safiyya'"
        ></social-button>

        <social-button
          :icon-url="require('@/assets/icons/dribble.svg')"
          :url="'https://dribbble.com/safiyya'"
        ></social-button>

        <social-button
          :icon-url="require('@/assets/icons/pocket-casts.svg')"
          :url="'https://lists.pocketcasts.com/ea8d9037-e5df-42eb-9175-009e4583523f'"
        ></social-button>
      </div>
      <div class="mt-8 mb-2">
        Designed and developer by me (C) Babioz Ltd
      </div>
      <div class="my-2">
        Made with Vue and TailwindCSS
      </div>
      <div class="my-2">
        Illustrations from Absurd Design
      </div>

    </div>
  </div>
</template>
 
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Badge from "@/components/Badge.vue";
import SocialButton from "@/components/buttons/SocialButton.vue";

@Component({
  components: {
    "social-button": SocialButton
  }
})
export default class Contact extends Vue {}
</script>

<style scoped>
.grayscale {
  filter: grayscale(0.9);
}
</style>


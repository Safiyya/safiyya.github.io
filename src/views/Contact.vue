<template>
  <div class="pt-48 w-full flex flex-col items-center relative">
    <div class="text-3xl w-2/3 flex justify-center text-center">
      Remote working is second nature to me, I spend my time between Paris, London, Beirut and Vancouver.  
    </div>

    <h6 class="mt-8">How can I help?</h6>

    <div class="relative w-full flex justify-center  h-96">
      <div class="w-4/5  bg-white shadow-lg rounded-lg h-auto p-8 absolute my-3 ">
        <contact-form class="w-full"></contact-form>
      </div>

    </div>

    <div class="bg-secondary-darker text-white w-full h-108 mt-48 flex flex-col items-center justify-center">

      <div class="w-2/5 mt-48 flex justify-between">
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
        Designed and developed by me © Babioz Ltd
      </div>
      <div class="my-2 text-white">
        Made with <a
          class="footer"
          href="https://vuejs.org/"
        >Vue.js</a> and <a
          class="footer"
          href="http://tailwindcss.com"
        >TailwindCSS</a>
      </div>
      <div class="my-2">
        Illustrations from <a
          class="footer"
          href="https://absurd.design/"
        >Absurd Design</a>
      </div>

    </div>
  </div>
</template>
 
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Badge from "@/components/Badge.vue";
import SocialButton from "@/components/buttons/SocialButton.vue";
import ContactForm from "@/components/forms/ContactForm.vue";

@Component({
  components: {
    "social-button": SocialButton,
    "contact-form":ContactForm
  }
})
export default class Contact extends Vue {}
</script>

<style scoped>
.grayscale {
  filter: grayscale(0.9);
}
</style>


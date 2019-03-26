<template>
  <div class=" w-full flex flex-col items-center relative">
    <div class=" pt-32 text-xl xl:text-3xl w-2/3 flex justify-center text-center">
      Interested in working together? 
      
    </div>

    <h6 class="mt-8 mb-2">Let's talk.</h6>
    <div class="w-4/5 xl:w-full xl:px-32 mb-48 pb-24 z-10">
    <div class="xl:pr-4">

      <contact-form class="shadow-lg rounded-lg bg-white p-8"></contact-form>
    </div>

    </div>

    <div  class="absolute pin-b pt-32  bg-secondary-darker text-white w-full  mt-48 flex flex-col items-center justify-center">
      <div class="w-4/5 lg:w-2/5 z-20 mt-48 flex justify-between">
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
      <div class="mt-8 mb-2 text-sm xl:text-base">
        Handcrafted by me © Babioz 
      </div>
      <div class="my-2 text-white text-sm xl:text-base">
        Made with <a
          class="footer"
          href="https://vuejs.org/"
        >Vue.js</a>,  <a
          class="footer"
          href="http://tailwindcss.com"
        >TailwindCSS</a> and <a
          class="footer"
          href="https://feathericons.com/"
        >Feather</a>
      </div>
      <div class="my-2 mb-8 text-sm xl:text-base">
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
    "contact-form": ContactForm
  }
})
export default class Contact extends Vue {

    // Remote working is second nature to me, I spend my time between Paris, London, Beirut and Vancouver.
    
}
</script>

<style scoped>
.grayscale {
  filter: grayscale(0.9);
}
</style>


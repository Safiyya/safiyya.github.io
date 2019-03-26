<template>
  <div class="bg-secondary flex flex-col items-center h-96 pt-16 text-white relative mb-48">
    <div class="w-3/5 text-center">
      <h3 class="text-white">
        Currently busy with
      </h3>
      <div class="my-2">
        Startup projects, podcasts binging or learning crusade, I never miss a chance to push myself.
      </div>
    </div>
    <div class="w-4/5 xl:w-full -mx-2 xl:px-32 justify-between flex flex-col md:flex-row xl:absolute mt-8 xl:mt-32">
      <div class="md:w-1/3 md:px-2">
        <current-card
          class=" shadow-lg h-full"
          :title="'Maptio'"
          :text="'With beautiful &amp; intuitive visualisations, Maptio gets self-managed teams better align to a single vision.'"
          :icon-url="'https://app.maptio.com/assets/images/logo-full.png'"
        >
         <a target="blank" href="http://maptio.com">www.maptio.com</a>
         </current-card>
      </div>

      <div class="md:w-1/3 md:px-2 my-4 md:my-0 xl:py-0">
        <current-card
          class=" shadow-lg h-full "
          :title="'LearnUI.Design'"
          :text="'Refreshing my design skills with this online course.'"
          :icon-url="'https://learnui.design/img/video-series-icon.png'"
        >
        <a target="blank" href="https://learnui.design/">https://learnui.design/</a>
         

        </current-card>
      </div>

      <div class="md:w-1/3 md:px-2">
        <current-card
          class="shadow-lg h-full"
          :title="'Podcasts'"
          :text="'   Startups, design, software, story-telling, true crimes, comedy, social commentary… my ears never rest ;)'"
          :icon-url="'https://cdn6.aptoide.com/imgs/f/b/2/fb2e8f869a475c9b0a33446b2be063e1_icon.png?w=240'"
        >
          <a target="blank" href="https://lists.pocketcasts.com/ea8d9037-e5df-42eb-9175-009e4583523f">Currated list</a>
      
      
        </current-card>
      </div>

    </div>

  </div>
</template>
 
<script lang="ts">
import { Component, Vue, Emit, Prop } from "vue-property-decorator";
import CurrentCard from "@/components/cards/CurrentCard.vue";
import Button from '@/components/buttons/Button.vue';

@Component({
  components: {
    "current-card": CurrentCard,
    "button-secondary":Button
  }
})
export default class Currently extends Vue {}
</script>
<style scoped>
</style>


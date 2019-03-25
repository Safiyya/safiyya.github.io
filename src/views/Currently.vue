<template>
  <div class="bg-secondary flex flex-col items-center h-96 pt-16 text-white relative mb-32">
    <div class="w-3/5 text-center">
      <h3 class="text-white">
        Currently working on
      </h3>
      <div>
        Startup projects, podcasts binging or learning crusade, I never miss a chance to push myself.
      </div>
    </div>
    <div
      class="w-full -mx-2 px-32 justify-between flex absolute "
      style="top:14rem"
    >
      <current-card
        class="w-1/3 px-2 shadow-lg h-full"
        :title="'Maptio'"
        :text="'With beautiful &amp; intuitive visualisations, Maptio gets self-managed teams better align to a single vision.'"
        :icon-url="'https://app.maptio.com/assets/images/logo-full.png'"
      ></current-card>

        <current-card
        class="w-1/3 px-2  shadow-lg h-full"
        :title="'Podcasts'"
        :text="'   Startups, design, software, story-telling, true crimes, comedy, social commentary… my ears never rest ;)'"
        :icon-url="'https://cdn6.aptoide.com/imgs/f/b/2/fb2e8f869a475c9b0a33446b2be063e1_icon.png?w=240'"
      ></current-card>

      <current-card
        class="w-1/3 px-2  shadow-lg h-full"
        :title="'Podcasts'"
        :text="'   Startups, design, software, story-telling, true crimes, comedy, social commentary… my ears never rest ;)'"
        :icon-url="'https://cdn6.aptoide.com/imgs/f/b/2/fb2e8f869a475c9b0a33446b2be063e1_icon.png?w=240'"
      ></current-card>

    </div>

  </div>
</template>
 
<script lang="ts">
import { Component, Vue, Emit, Prop } from "vue-property-decorator";
import CurrentCard from "@/components/cards/CurrentCard.vue";

@Component({
  components: {
    "current-card": CurrentCard
  }
})
export default class Currently extends Vue {}
</script>
<style scoped>
</style>


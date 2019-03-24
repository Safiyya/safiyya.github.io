<template>
  <div class="bg-secondary flex flex-col items-center h-96 pt-16 text-white relative mb-32">
    <div class="w-3/5 text-center">
      <h3 class="text-white">
        Current obsessions
      </h3>
      <div>
        Startup projects, podcasts binging or random learning crusade.
      </div>
    </div>
    <div
      class="w-2/3 justify-around flex absolute "
      style="top:14rem"
    >
      <card class="w-1/3 shadow-lg h-full">
        <div class="p-4 text-black">
          <div class="flex items-center mb-8">
            <img
              class="w-16 h-16 rounded-full"
              src="https://app.maptio.com/assets/images/logo-full.png"
              alt=""
              srcset=""
            >
            <span class="text-2xl  mx-2">Maptio</span>
          </div>
          <div class="my-3 self-end">
            <div>
              I cofounded Maptio with Tom Nixon in 2017.

            </div>
            <div>
              With beautiful &amp; intuitive visualisations, Maptio gets self-managed teams better align to a single vision.
            </div>
          </div>

        </div>

      </card>
        <card class="w-1/3 shadow-lg h-full">
        <div class="p-4 text-black">
          <div class="flex items-center mb-8">
            <img 
              class="w-16 h-16 rounded-full"
              src="https://cdn6.aptoide.com/imgs/f/b/2/fb2e8f869a475c9b0a33446b2be063e1_icon.png?w=240"
              alt=""
              srcset=""
            >
            <span class="text-2xl  mx-2">Podcasts</span>
          </div>
          <div class="my-3 self-end">
            <div>
              Startups, design, software, story-telling, true crimes, comedy, social commentary… my ears never rest ;) 
            </div>
          </div>

        </div>

      </card>

    </div>

  </div>
</template>
 
<script lang="ts">
import { Component, Vue, Emit, Prop } from "vue-property-decorator";
import Card from "@/components/cards/Card.vue";

@Component({
  components: {
    card: Card
  }
})
export default class Currently extends Vue {}
</script>
<style scoped>
</style>


<template>
  <card class="shadow-lg h-full">
    <div class="p-6 text-black h-full flex flex-col justify-between">
      <div class="flex justify-center items-center h-half">
        <img
          class="w-12 h-12 rounded-full"
          :src="iconUrl"
          alt=""
          srcset=""
        >
        <span class="text-2xl font-semibold  mx-2">{{title}}</span>
      </div>

      <div class=" self-end text-xl  text-center">
        {{text}}
      </div>
      <div class="mb-3 flex justify-center">
        <slot></slot>
      </div>
    </div>

  </card>
</template>

<script lang="ts">
import { Vue, Component, Prop, Provide } from "vue-property-decorator";
import Card from "@/components/cards/Card.vue";

@Component({
  components: {
    card: Card
  }
})
export default class CurrentCard extends Vue {
  @Prop() public title: string;
  @Prop() public iconUrl: string;
  @Prop() public text: string;
}
</script>

<style>
</style>

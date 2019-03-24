

<template>

  <div>
    <button
      class="text-sm font-bold flex items-center  text-white rounded-full pr-3 bg-white border border-grey"
    >
      <span class="rounded-full h-12 w-12 bg-grey">
        <simple-svg
          class="text-white  fill-current flex justify-center items-center h-full"
          :filepath="iconUrl"
          :width="'50%'"
          :height="'50%'"
        />
      </span>

      <span
        class="mx-3 bg-white text-black uppercase"
      > {{text}}</span>
    </button>
  </div>

</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Button extends Vue {
  @Prop() text: string;
  @Prop() iconUrl: string;
}
</script>

<style scoped lang="css">

</style>

<template>
  <p class="text-black flex items-center mb-1">
    <span class="rounded-full w-4 h-4 flex justify-center items-baseline mr-1">

      <span class="svg-icon w-full h-full text-grey-dark fill-current">
        <simple-svg
          class="flex justify-center items-center "
          :filepath="iconUrl"
          :width="'100%'"
          :height="'100%'"
        />
      </span>

    </span>

    <span class="font-semibold text-grey">
      <span>{{text}}</span>
    </span>

  </p>
</template>

<script lang="ts">
import { Vue, Component, Prop, Watch } from "vue-property-decorator";

@Component({})
export default class extends Vue {
  @Prop() public text: string;
  @Prop() public iconUrl: string;
}
</script>

<style>
</style>

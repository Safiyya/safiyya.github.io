

<template>

  <div>
    <a
      :href="url"
      target="blank"
      class="secondary"
    >
      <span class="rounded-full h-12 w-12">
        <simple-svg
          class="text-white  fill-current flex justify-center items-center h-full"
          :filepath="iconUrl"
          :width="'50%'"
          :height="'50%'"
        />
      </span>

      <span class="mx-3  text-black uppercase"> {{text}}</span>
    </a>
  </div>

</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Button extends Vue {
  @Prop() public text: string;
  @Prop() public iconUrl: string;
  @Prop() public url: string;
}
</script>

<style scoped lang="css">
a.secondary {
  @apply text-sm font-bold flex items-center  text-white rounded-full pr-3 bg-white border border-grey;
}

a.secondary > span:first-child {
  @apply bg-grey;
}

a.secondary:hover {
  @apply border-secondary;
}

a.secondary:hover > span:first-child {
  @apply bg-secondary;
}
</style>

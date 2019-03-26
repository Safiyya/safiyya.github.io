

<template>

  <a
    :href="url"
    target="blank"
    class="social flex items-center rounded-full p-3 h-12 w-12 xl:h-16 xl:w-16"
  >
    <span class="rounded-full h-wull w-full">
      <simple-svg
        class="fill-current flex justify-center items-center h-full"
        :filepath="iconUrl"
        :width="'50%'"
        :height="'50%'"
      />
    </span>
  </a>

</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class SocialButton extends Vue {
  @Prop() public iconUrl: string;
  @Prop() public url: string;
}
</script>

<style scoped lang="css">
</style>

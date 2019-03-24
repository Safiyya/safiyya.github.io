

<template>

    <a :href="url"
      class="social bg-white text-black flex items-center rounded-full p-3 h-16 w-16"
    >
      <span class="rounded-full h-wull w-full">
        <simple-svg
          class="text-black  fill-current flex justify-center items-center h-full"
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
  @Prop() iconUrl: string;
  @Prop() url: string;
}
</script>

<style scoped lang="css">

</style>

<template>
  <button
    class="m-2 text-grey-dark fill-current hover:text-pink"
    @click="close()"
  >
    <img
      svg-inline
      src="../../assets/icons/close.svg"
      alt="Close"
    /></button>
</template>

<script>
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class ButtonClose extends Vue {
  close() {
    this.$emit("close");
  }
}
</script>

<style>
</style>

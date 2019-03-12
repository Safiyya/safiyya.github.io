<template>
  <portal
    to="modal"
    v-if="isVisible"
  >
    <div
      style="top:0;left:0;overflow-y:auto"
      class="fixed w-screen h-screen flex flex-col  bg-white z-20 "
    >
      <slot></slot>

      <div
        class="h-8  py-1 absolute"
        style="top:0;right:0;"
      >
        <button
          class="h-6 w-6 m-2 text-grey-dark fill-current"
          style="bottom:0;right:0"
          @click="close()"
        >
          <img
            svg-inline
            src="../assets/icons/close.svg"
            alt="Close"
          /></button>
      </div>
    </div>

  </portal>

</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Modal extends Vue {
  private isVisible: boolean=false;

  open() {
    this.isVisible = true;
  }

  close() {
    this.isVisible = false;
  }
}
</script>



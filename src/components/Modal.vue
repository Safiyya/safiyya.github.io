<template>
  <portal
    to="modal"
    v-if="isVisible"
  >
    <div style="top:0; left:0" class="fixed z-50 w-full h-full">
      <div class=" relative bg-grey-lightest h-full">
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

   
    </div>

  </portal>

</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Modal extends Vue {
  @Prop() fullscreen: boolean;

  private isVisible: boolean = false;

  open() {
    this.isVisible = true;
      (document.querySelector("body") as HTMLBodyElement).style.overflow ="hidden";
  
  }

  close() {
    this.isVisible = false;
      (document.querySelector("body") as HTMLBodyElement).style.overflow ="auto";
  
  }

}
</script>
<style scoped>


</style>



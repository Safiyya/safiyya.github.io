

<template>

  <div class=" flex flex-col justify-around box  bg-white rounded-lg ">
    <div class="content ">
      <div class="w-full h-full  ">
        <slot></slot>

      </div>
    </div>

  </div>

</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Card extends Vue {}
</script>

<style scoped lang="css">
.box {
  position: relative;
}
.box:before {
  content: "";
  display: block;
  padding-top: 100%;
}

.content {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}
</style>

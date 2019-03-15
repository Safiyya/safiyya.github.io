<template>
  <button
    @click="goToPage(2)"
    class="button-link"
  >
    <simple-svg
      class="flex justify-center w-12 h-12" 
      :class="{'rotate':isRotate}"
      :filepath="iconUrl"
      :width="'100%'"
      :height="'100%'"
    />
    <span>{{text}}</span>
  </button>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class ButtonSection extends Vue {
    @Prop() text:string;
    @Prop() iconUrl:string;
    @Prop() isRotate:boolean;

    
}
</script>

<style scoped lang="css">

.rotate{
    transform: rotate(90deg)
}

.button-link {

  transform: scale(1);
  transition: all 250ms ease;
  @apply w-32 h-32 bg-grey-darkest flex flex-col items-center justify-center items-center my-8 border-0 p-4 rounded-full;
}

.button-link:hover{

  transform: scale(1.05);
  transition: all 250ms ease;
}

.button-link > span {
  @apply uppercase text-sm my-2 text-grey-light;
}

.button-link:hover > span {
  @apply text-pink;
}

</style>

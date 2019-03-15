<template>
  <button
    @click="goToPage(2)"
    class="button-link w-32 h-32 sm:w-24 sm:h-24 md:w-32 md:h-32 "
  >
    <simple-svg
      class="flex justify-center items-center " 
      :class="{'rotate':isRotate}"
      :filepath="iconUrl"
      :width="'60%'"
      :height="'60%'"
    />
    <span class="text-xs lg:text-sm">{{text}}</span>
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
  @apply bg-grey-darkest flex flex-col items-center justify-center items-center border-0 rounded-full;
}

.button-link:hover{

  transform: scale(1.05);
  transition: all 250ms ease;
}

.button-link > span {
  @apply uppercase  my-2 text-grey-light;
}

.button-link:hover > span {
  @apply text-pink;
}

</style>

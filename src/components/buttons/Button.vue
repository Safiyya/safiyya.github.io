

<template>

  <div>
    <button
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

      <span
        class="mx-3  text-black uppercase"
      > {{text}}</span>
    </button>
  </div>

</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Button extends Vue {
  @Prop() text: string;
  @Prop() iconUrl: string;
}
</script>

<style scoped lang="css">

button.secondary{
@apply text-sm font-bold flex items-center  text-white rounded-full pr-3 bg-white border border-grey;
}

button.secondary > span:first-child{
@apply bg-grey
}

button.secondary:hover{
@apply border-secondary;
}

button.secondary:hover > span:first-child{
@apply bg-secondary;
}



</style>

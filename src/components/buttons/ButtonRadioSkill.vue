

<template>

  <div>
    <input
      class="hidden"
      type="radio"
      :id="picked"
      value="picked"
      v-model="picked"
    >
    <button
      type="radio"
      name="skill-selection"
      class="skill-button pr-3"
      :class="{'bg-primary':active, 'bg-white border border-primary':!active}"
    >
      <span class="rounded-full h-12 w-12 bg-primary">
        <simple-svg
          class="text-white  fill-current flex justify-center items-center h-full"
          :filepath="iconUrl"
          :width="'50%'"
          :height="'50%'"
        />
      </span>

      <span
        class="mx-3"
        :class="{'bg-white text-black':!active}"
      > {{text}}</span></button>
  </div>

</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class ButtonRadioSkill extends Vue {
  @Prop() text: string;
  @Prop() iconUrl: string;
  @Prop() active: string;
  @Prop() picked:number;

}
</script>

<style scoped lang="css">
.skill-button {
  @apply text-sm font-bold flex items-center  text-white rounded-full;
}

.skill-button > span {
  @apply uppercase;
}
</style>

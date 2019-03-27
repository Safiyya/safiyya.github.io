

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
      :class="{'bg-primary active cursor-auto':active, 'bg-white border border-primary cursor-pointer':!active}"
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
        :class="{'text-black':!active}"
      > {{text}}</span></button>
  </div>

</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class ButtonRadioSkill extends Vue {
  @Prop() public text: string;
  @Prop() public iconUrl: string;
  @Prop() public active: string;
  @Prop() public picked: number;
}
</script>

<style scoped lang="css">
.skill-button {
  transition: all 250ms;
  @apply text-sm font-bold flex items-center  text-white rounded-full;
}

.skill-button:not(.active):hover,
.skill-button:not(.active):hover > span {
  transition: all 250ms;
  @apply bg-primary text-white;
}

.skill-button > span {
  @apply uppercase;
}
</style>

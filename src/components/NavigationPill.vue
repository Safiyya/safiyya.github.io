<template>
  <router-link
    :to="to"
    class="flex flex-col items-center w-12 "
  >
    <slot></slot> {{text}}
  </router-link>
</template>

<script lang="ts">
import { Vue, Component, Prop, Watch } from "vue-property-decorator";

@Component({})
export default class extends Vue {
  @Prop() public text: string;
  @Prop() public to: string;
}
</script>

<style>
</style>

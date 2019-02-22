<template>
  <p class="text-black flex items-center mb-1">
    <span class="rounded-full w-4 h-4 flex justify-center items-baseline mr-1">

      <span class="svg-icon w-full h-full text-grey-dark fill-current">
        <slot></slot>
      </span>

    </span>

    <span class="text-sm font-semibold text-grey">
      <a
        v-if="url"
        :href="url"
        target="blank"
      >{{text}}</a>
      <router-link
        v-else-if="to"
        :to="to"
        active-class="active"
      >{{text}}</router-link>
      <span v-else>{{text}}</span>
    </span>

  </p>
</template>

<script lang="ts">
import { Vue, Component, Prop, Watch } from "vue-property-decorator";

@Component({})
export default class extends Vue {
  @Prop() public text: string;
  @Prop({ required: false }) public url: string;
  @Prop({ required: false }) public to: string;
}
</script>

<style>
</style>

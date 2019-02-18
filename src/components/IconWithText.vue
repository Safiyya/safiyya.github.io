<template>
  <p class="text-grey-dark flex items-center mb-1">
    <span class="bg-grey-light rounded-full w-8 h-8 flex justify-center items-center mr-1">

        <span class="svg-icon w-4 h-4 text-white fill-current">
            <slot ></slot>
        </span>
      
      
    </span>

    <a v-if="url" :href="url" target="blank">{{text}}</a>
    <span v-else >{{text}}</span>

  </p>
</template>

<script lang="ts">
import { Vue, Component, Prop, Watch } from "vue-property-decorator";

@Component({})
export default class extends Vue {
  @Prop() text: string;
  @Prop() url: string;
}
</script>

<style>
</style>

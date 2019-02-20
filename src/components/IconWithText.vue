<template>
  <p class="text-black flex items-center mb-1">
    <span class="rounded-full w-8 h-8 flex justify-center items-center mr-1">

        <span class="svg-icon w-4 h-4 text-grey-dark fill-current">
            <slot ></slot>
        </span>
      
      
    </span>

    <a v-if="url" :href="url" target="blank">{{text}}</a>
    <router-link v-else-if="to" :to="to" active-class="active">{{text}}</router-link>
    <span v-else >{{text}}</span>

  </p>
</template>

<script lang="ts">
import { Vue, Component, Prop, Watch } from "vue-property-decorator";

@Component({})
export default class extends Vue {
  @Prop() text: string;
  @Prop({required:false}) url: string;
  @Prop({required:false}) to: string;
}
</script>

<style>
</style>

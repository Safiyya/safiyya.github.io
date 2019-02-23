<template>
  <div class=" flex flex-col items-center vertical-line cursor-pointer">
   <div class="circle w-16 h-16 md:w-20 md:h-20 lg:w-48 lg:h-48 my-3 rounded-full flex justify-center items-center" :class="'bg-'+color">
      <simple-svg
        :filepath="iconUrl"
        :width="'50%'"
        :height="'50%'"
      />
    </div>
    <span class="title text-xs md:text-2xl mb-2 font-bold whitespace-no-wrap">{{title}}</span>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component({})
export default class Badge extends Vue {
  @Prop() public title: string;
  @Prop() public color: string;
  @Prop({ required: false }) public iconUrl: string;
}
</script>
<template>
  <div
    class="group flex flex-col items-center vertical-line"
    @mouseenter="setActive($event)"
    @mouseleave="setInactive($event)"
  >
    <div class="w-48 h-48 my-3 bg-grey-lightest group-hover:bg-teal  rounded-full flex justify-center items-center">
      <slot></slot>
    </div>
    <span class="text-2xl text-grey-darker mb-2 font-bold">{{title}}</span>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component({})
export default class Badge extends Vue {
  @Prop() title: string;
  @Prop({ required: false }) subtitle: string;
  @Prop() text: string;
  @Prop({ required: false }) active: boolean;

  isHovering: boolean = false;

  setActive($event: any) {
    document.querySelectorAll(".badge").forEach((el: Element) => {
      el.classList.remove("active");
    });
    (<Element>$event.target).classList.add("active");
    this.$emit("activate", true);
  }

  setInactive($event: any) {
    (<Element>$event.target).classList.remove("active");
    this.$emit("activate", false);
    if (document.querySelectorAll(".badge.active").length === 0) {
      document
        .querySelectorAll(".badge")
        .item(0)
        .classList.add("active");
    }
  }
}
</script>

<style scoped>
.active > .rounded-full {
  @apply bg-teal;
}

.vertical-line {
  position: relative;
}

.vertical-line::after {
  @apply border border-4 border-transparent;
  width: 0;
  height: 3rem;
  display: block;
  content: "";
  left: 50%;
  z-index: 1;
  top: 16rem;
  margin-left: -1px;
}

.vertical-line:hover::after,
.vertical-line.active::after {
  @apply border border-2 border-teal;
}
</style>

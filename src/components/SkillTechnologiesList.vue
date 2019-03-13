<template>
  <div class="flex flex-col w-full">
    <div class="w-full">
      <div class="w-full">
        <div
          v-for="technology in skill.technologies"
          :key="technology.name"
          class="mb-2 md:mb-4 flex flex-col"
        >
          <div class="bg-grey-lighter rounded-sm">
            <div
              class="bg-teal text-teal-lightest font-semibold rounded-sm text-xs md:text-lg leading-none py-1 text-left px-2"
              :style="{width: technology.level/5 * 100+ '%'}"
            >{{technology.name}}</div>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import Skill from "@/models/skill";

@Component({
  components: {}
})
export default class SkillTechnologiesList extends Vue {
  @Prop() public skill: Skill;
}
</script>

<style>
</style>

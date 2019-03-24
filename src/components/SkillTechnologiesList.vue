<template>
  <div class="flex flex-col w-full">
    <div class="w-full">
      <div class="w-full">
        <div
          v-for="technology in skill.technologies"
          :key="technology.name"
          class="my-12 flex flex-col"
        >
          <div class=" rounded-sm">
            <div
              class="pl-32 font-semibold bg-primary-darker text-white rounded-sm  leading-none py-3 text-left"
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

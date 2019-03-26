<template>
  <div class="flex flex-col w-full my-32 relative">

    <div
      class="flex my-4 align-stretch"
      :class="{'flex-row-reverse':!even}"
    >
      <div class="w-1/2 relative ">
        <div
          v-if="triangle"
          class="triangle absolute"
          :class="{'right':even, 'left':!even}"
        ></div>
        <div
          class="z-50 bg-white border-0 rounded-lg  shadow-lg h-full"
          :class="{'rounded-l-none mr-20':even, 'rounded-r-none ml-20':!even}"
        >
          <skill-list
            class="py-4 pr-16"
            :skill="skill"
          ></skill-list>
        </div>
      </div>
      <div
        class="w-2/5 py-16 flex flex-col items-start"
        :class="{'pl-0':!even}"
      >
        <h6>{{skill.tagline}}</h6>
        <h3>{{skill.headline}}</h3>
        <div class="mt-4">
          <h4
            class="text-grey-darker"
            v-for="(line, lix) in skill.summary"
            :key="lix"
          >{{line}}</h4>
        </div>

      </div>
    </div>

  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import Skill from "@/models/skill";
import SkillTechnologiesList from "@/components/SkillTechnologiesList.vue";

@Component({
  components: {
    "skill-list": SkillTechnologiesList
  }
})
export default class SkillSection extends Vue {
  @Prop() public skill: Skill;
  @Prop() public even: boolean;
  @Prop() public triangle: boolean;
}
</script>

<style scoped>
.triangle {
    z-index: -1;
  width: 1200px;
  height: 1550px;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
  top: -150%;
  background-image: linear-gradient(to bottom right, #F5A802 , #F27169, #F44792 );
}

.triangle.left {
  left: 75%;
}

.triangle.right {
  right: 75%;
}
</style>

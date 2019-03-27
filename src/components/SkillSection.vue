<template>
  <div class="w-4/5 lg:w-full lg:my-16 xl:my-32 relative">

    <div
      class="flex flex-col-reverse lg:flex-row my-4 align-stretch"
      :class="{'lg:flex-row-reverse':!even}"
    >
      <div class="lg:w-1/2 relative ">
        <div
          v-if="triangle"
          class="hidden lg:block triangle absolute"
          :class="{'right':even, 'left':!even}"
        ></div>
        <div
          class="z-50 bg-white border-0 rounded-lg  lg:shadow-lg h-full"
          :class="{'rounded-l-none lg:mr-20':even, 'rounded-r-none lg:ml-20':!even}"
        >
          <skill-list
            class="lg:py-4 lg:pr-16"
            :skill="skill"
          ></skill-list>
        </div>
      </div>
      <div
        class="lg:w-2/5 lg:py-16 lg:pl-8 xl:pl-0 py-8 flex flex-col items-start"
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

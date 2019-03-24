<template>
  <div>
    <skill-section
      v-for="(skill,six) in skills"
      :key="skill.category"
      :skill="skill"
      :even="six % 2 ===0"
      :triangle="six === 1 || six===2"
    >
    </skill-section>
  </div>

</template>
 
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { skillsService } from "@/services/skills.service";
import SkillSection from "@/components/SkillSection.vue";
import Skill from "@/models/skill";

@Component({
  components: {
    "skill-section": SkillSection
  }
})
export default class Skills extends Vue {
  skills: Skill[] = [];


  private mounted(){
      this.skills = skillsService.get();
  }
}
</script>

<style scoped>
</style>


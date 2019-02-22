<template>
  <div
    class="about  py-24 h-full flex flex-col items-center container mx-auto"
    v-if="isLoaded"
  >
    <div class=" flex w-full items-start justify-between">

      <div
        v-for="skill in skills"
        :key="skill.category"
        class="flex flex-col items-center group"
      >
        <badge
          class="badge w-1/4 px-3 text-grey-light"
          :class="{'text-teal':skill.isSelected}"
          :title="skill.category"
          :color="skill.isSelected ? 'teal' : 'grey-light'"
          :icon-url="skill.iconUrl"
          v-on:click.native="showSkill(skill)"
        >
        </badge>
        <div
          v-if="skill.isSelected"
          class="w-1 h-12 border-transparent  border-2"
          :class="{'border-teal':skill.isSelected}"
        ></div>
        <div
          v-else
          class="w-1 h-12 border-transparent group-hover:border-grey-light border-2"
          :class="{'border-teal':skill.isSelected}"
        ></div>

      </div>

    </div>

    <div class="w-full border-t-4 border-teal  flex flex-grow ">
      <div class="w-1/2 px-4 h-auto my-3">
        <div
          v-for="technology in selectedSkill.technologies"
          :key="technology.name"
          class=" w-full  mt-2 flex flex-col"
        >
          <span class="mb-1 text-left">{{technology.name}}</span>
          <div class="bg-grey-lighter">
            <div
              class="bg-teal text-teal-lightest rounded-sm text-xs leading-none py-1 text-left px-2 "
              :style="{width: technology.level/5 * 100+ '%'}"
            >{{technology.level/5 * 100}}%</div>
          </div>

        </div>
      </div>
      <div class="px-4 w-1/2 bg-transparent  flex flex-col items-center justify-start">
        <div class="text-3xl text-center my-8">
          {{selectedSkill.tagline}}
        </div>
        <div class="w-2/3 text-left">
          {{selectedSkill.summary}}
        </div>
      </div>

    </div>

  </div>
</template>
 
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Badge from "@/components/Badge.vue";
import { skillsService } from "@/services/skills.service";
import Skill from "@/models/skill";

@Component({
  components: {
    badge: Badge
  }
})
export default class About extends Vue {
  private skills: Skill[] = [];
  private isLoaded: boolean = false;

  public mounted() {
    this.isLoaded = false;
    return skillsService
      .get()
      .then((skills: Skill[]) => {
        this.skills = skills;
        this.skills[0].isSelected = true;
        this.isLoaded = true;
      })
      .catch(() => {
        this.isLoaded = true;
      });
  }

  private get selectedSkill(): Skill {
    return this.skills.filter((s: Skill) => s.isSelected)[0];
  }

  private showSkill(skill: Skill) {
    this.skills.forEach((s: Skill) => {
      s.isSelected = s.category === skill.category;
    });
  }
}
</script>

<style scoped>
</style>


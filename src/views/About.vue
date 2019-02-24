<template>
  <div
    class="about pt-16 h-full flex flex-col items-center container mx-auto"
    v-if="isLoaded"
  >
    <div class=" flex flex-wrap md:flex-no-wrap md:flex-row w-full items-start justify-between mb-4 lg:mb-16">

      <div
        v-for="skill in skills"
        :key="skill.category"
        class="flex flex-col items-center group flex-grow "
      >
        <badge
          class="badge mx-2 text-grey-light"
          :class="{'text-teal':skill.isSelected}"
          :title="skill.category"
          :color="skill.isSelected ? 'teal' : 'grey-light'"
          :icon-url="skill.iconUrl"
          v-on:click.native="showSkill(skill)"
        >
        </badge>
        <!-- <div
          class="w-1 py-6 border-transparent  border-2"
          :class="{'border-teal':skill.isSelected, 'group-hover:border-grey-light':!skill.isSelected}"
        ></div> -->

      </div>

    </div>


    <div class="flex w-full bg-grey-lightest md:bg-white p-4 md:p-0 md:border-t-4 border-teal flex-col-reverse md:flex-row ">
      <div class="w-full md:w-1/2 h-auto mt-3 md:my-3 flex flex-wrap md:block">
        <div
          v-for="technology in selectedSkill.technologies"
          :key="technology.name"
          class="mt-2 mx-2 md:mx-0 flex flex-col"
        >
          <span class="md:mb-1 text-left text-xs font-semibold bg-grey-dark text-white py-1 px-3 rounded-full md:bg-white md:text-black  md:p-0 md:font-normal  md:text-base">{{technology.name}}</span>
          <div class="bg-grey-lighter hidden md:block">
            <div
              class="bg-teal text-teal-lightest rounded-sm text-xs leading-none py-1 text-left px-2"
              :style="{width: technology.level/5 * 100+ '%'}"
            >{{technology.level/5 * 100}}%</div>
          </div>

        </div>
      </div>
      <div class="px-4 md:w-1/2 bg-transparent  flex flex-col flex-grow items-center justify-start">
        <div class="text-2xl md:text-3xl text-center my-4 md:my-8 hidden md:block">
          {{selectedSkill.tagline}}
        </div>
        <div class="w-full md:w-4/5 text-left text-sm sm:text-base lg:text-xl">
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


<template>
  <div
    class="about flex flex-col justify-center items-center container mx-auto"
    v-if="isLoaded"
  >

    <div class=" flex flex-wrap w-full items-start justify-between mb-4 ">

      <div
        v-for="skill in skills"
        :key="skill.category"
        class="flex flex-col items-center group w-full md:w-1/2  md:p-4 my-4 "
      >
        <badge
          class="badge mx-2 text-grey-dark "
          :class="{'text-teal':skill.isSelected}"
          :title="skill.category"
          :color="skill.isSelected ? 'teal' : 'grey-light'"
          :icon-url="skill.resolvedIconUrl"
          v-on:click.native="showSkill(skill)"
        >
        </badge>

        <div class="w-full">
          <span class="w-full text-lg md:text-lg ">
            {{skill.tagline}}
          </span>
          <div class="w-full my-2">
            <div class="">
              <div
                v-for="technology in skill.technologies"
                :key="technology.name"
                class="mt-2 mx-2 md:mx-0 flex flex-col"
              >
                <div class="bg-grey-lighter">
                  <div
                    class="bg-teal text-teal-lightest font-semibold rounded-sm text-xs leading-none py-1 text-left px-2"
                    :style="{width: technology.level/5 * 100+ '%'}"
                  >{{technology.name}}</div>
                </div>

              </div>
            </div>
            <div class="hidden text-base text-left mt-2">
              {{skill.summary}}
            </div>
          </div>
        </div>

      </div>

    </div>

    <!-- <div class="hidden w-full p-4 md:p-0 md:border-t-4 border-teal flex-col-reverse md:flex-row ">
      <div class="w-full md:w-1/2 h-auto mt-3 md:my-3 flex flex-wrap md:block">
        <div
          v-for="technology in selectedSkill.technologies"
          :key="technology.name"
          class="mt-2 mx-2 md:mx-0 flex flex-col"
        >
          <span class="mb-1 text-left text-xs bg-grey-dark py-1 px-3 rounded-full bg-white text-black  p-0 font-normal  text-base">{{technology.name}}</span>
          <div class="bg-grey-lighter">
            <div
              class="bg-teal text-teal-lightest rounded-sm text-xs leading-none py-1 text-left px-2"
              :style="{width: technology.level/5 * 100+ '%'}"
            >{{technology.level/5 * 100}}%</div>
          </div>

        </div>
      </div>
      <div class="px-4 md:w-1/2 bg-transparent  flex flex-col flex-grow items-center justify-start">
        <div class="text-lg md:text-3xl text-center my-4 md:my-8">
          {{selectedSkill.summary}}
        </div>
      </div>

    </div> -->

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
        // this.skills[0].isSelected = true;
        this.isLoaded = true;
      })
      .catch(() => {
        this.isLoaded = true;
      });
  }

  // private get selectedSkill(): Skill {
  //   return this.skills.filter((s: Skill) => s.isSelected)[0];
  // }

  private showSkill(skill: Skill) {
    this.skills.forEach((s: Skill) => {
      s.isSelected = s.category === skill.category;
    });
  }
}
</script>


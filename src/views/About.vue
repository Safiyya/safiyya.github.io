<template>
  <div class="about py-24 h-full flex flex-col items-center container mx-auto">
    <div class=" flex w-full items-start justify-between">
      <badge
        class="badge w-1/4 px-3 active"
        :title="'Front-end'"
        id="badge-0"
        v-on:activate="showSkills($event, 0)"
      >
        <img
          svg-inline
          src="@/assets/heroicons/heroicons-lg/heroicon-browser-lg.svg"
          alt="Front end"
        />
      </badge>

      <badge
        class="badge  w-1/4 px-3 "
        :title="'Back-end'"
        id="badge-1"
        v-on:activate="showSkills($event,1)"
      >
        <img
          svg-inline
          src="@/assets/heroicons/heroicons-lg/heroicon-database-lg.svg"
          alt="Fast"
        />
      </badge>

      <badge
        class="badge  w-1/4 px-3 "
        :title="'Product'"
        id="badge-2"
        v-on:activate="showSkills($event,2)"
      >
        <img
          svg-inline
          src="@/assets/heroicons/heroicons-lg/heroicon-chart-lg.svg"
          alt="Product"
        />
      </badge>

      <badge
        class="badge w-1/4 px-3 "
        :title="'Built with love'"
        id="badge-3"
        v-on:activate="showSkills($event,3)"
      >
        <img
          svg-inline
          src="@/assets/heroicons/heroicons-lg/heroicon-heart-lg.svg"
          alt="Quality"
        />
      </badge>
    </div>

    <div
      class="w-full border-t-4 border-teal  flex flex-grow "
      v-if="isLoaded"
    >
      <div class="w-1/2 px-4 h-auto my-3">
        <div
          v-for="technology in activeSkill.technologies"
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
          {{activeSkill.tagline}}
        </div>
        <div class="w-2/3 text-left">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
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
  skills: Skill[] = [];
  activeSkill: Skill = {
    category: "",
    summary: "",
    tagline : "",
    technologies: []
  };

  showSkills(isReset: boolean, i: number) {
    this.activeSkill = !isReset ? this.skills[0] : this.skills[i];
  }

  private isLoaded: boolean = false;

  public mounted() {
    this.isLoaded = false;
    return skillsService
      .get()
      .then(skills => {
        this.skills = skills;
        this.activeSkill = this.skills[0];
        this.isLoaded = true;
      })
      .catch(() => {
        this.isLoaded = true;
      });
  }
}
</script>

<style scoped>
</style>


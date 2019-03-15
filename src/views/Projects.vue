
  

<template>
  <div class="projects h-screen container mx-auto flex items-center">

    <div
      v-for="(project, i) in projects"
      :key="i"
      class="w-1/5 relative "
      :class="{'pb-32 -mt-32':i%2==0, 'pt-32 -mb-32':i%2>0}"
      @mouseenter="select(i)"
      @mouseleave="unselect(i)"
    >
      <div class="box w-full  ">
        <div class=" bubble texture-background rounded-full content flex items-center justify-center  text-grey-lightest">
          <div class="flex flex-col">
            <span class="text-3xl">{{project.name}} {{project.isSelected}}</span>
            <span class="text-base text-grey-light my-2">{{project.tagline}}</span>
            <a target="blank" :href="project.link.url">{{project.link.label}}</a>

            <span v-show="project.isSelected" class="text-xs" :key="six" v-for="(summary, six) in project.summary">{{summary}}</span>
          
          </div>
        </div>
      </div>
    </div>

  </div>
</template>
 
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import { projectsService } from "@/services/projects.service";
import Project from "@/models/project";

@Component({})
export default class Projects extends Vue {
  private projects: Project[] = [];

  mounted() {
    this.projects = projectsService.get();
  }

  select(index:number){
    let p = this.projects[index];
    p.isSelected =true;
    this.$set(this.projects, index, p);
  }

  unselect(index:number){
    let p = this.projects[index];
    p.isSelected =false;
    this.$set(this.projects, index, p);
  }
}
</script>

<style scoped>
.bubble,
.bubble * {
  transform: scale(1);
  transition: all 400ms;
}

/* .bubble:hover * {
  transform: scale(0.5);
  transition: all 400ms;
} */

.bubble:hover {
  transform: scale(2);
  transition: all 400ms;
}
</style>



  

<template>
  <div class="projects h-screen container mx-auto flex items-center">

    <div
      v-for="(project, i) in projects"
      :key="i"
      class="w-full "
      :class="{
        'pb-32 -mt-32':i%2==0, 
        'pt-32 -mb-32':i%2>0,
        'z-50':project.isSelected}"
      @mouseenter="select(i)"
      @mouseleave="unselect(i)"
    >
      <div class="box w-full cursor-pointer ">
        <div class=" relative bubble p-5 texture-background rounded-full content flex items-center justify-center  text-grey-lightest">
          <div
            class="w-full h-full absolute bubble-background"
            :style="'background-image: url('+project.link.image+')'"
          >

          </div>
          <div class="flex flex-col z-10">
            <span class="text-2xl font-bold text-grey-lightest">{{project.name}}</span>
            <span class="font-bold text-base text-grey-light my-2">{{project.tagline}}</span>
            <a
              class="text-pink"
              target="blank"
              :href="project.link.url"
            >

              {{project.link.label}}
            </a>

            <!-- <div class="summary">
              <span
                v-show="project.isSelected"
                class="text-xs"
                :key="six"
                v-for="(summary, six) in project.summary"
              >{{summary}}</span>
            </div> -->

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

  select(index: number) {
    let p = this.projects[index];
    p.isSelected = true;
    this.$set(this.projects, index, p);
  }

  unselect(index: number) {
    let p = this.projects[index];
    p.isSelected = false;
    this.$set(this.projects, index, p);
  }
}
</script>

<style scoped>
.bubble-background {
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center center;
}

.halfed {
  background: linear-gradient(
    180deg,
    var(--black),
    var(--black) 49%,
    var(--white) 51%,
    var(--white) 51%
  );
}

.bubble,
.bubble * {
  transform: scale(1);
  transition: all 400ms;
}

.bubble:hover > .summary {
  transform: scale(0.66);
  transition: all 400ms;
}

.bubble:hover {
  transform: scale(1.25);
  transition: all 400ms;
}
</style>


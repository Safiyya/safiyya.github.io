<template>

  <div class=" flex flex-col justify-around box  bg-grey-light ">
    <div class="content company-picture rounded-lg" 
    :style="!!job.company.background && 'background-image: url('+job.company.background+')'"
    :class="{'job-gradient': !job.company.background}" >
      <div class="">{{job.company.name}}
      </div>

    </div>
  </div>

</template>

<script lang="ts">
import { Vue, Component, Prop, Provide } from "vue-property-decorator";
import Job from "@/models/job";
import IconWithTextVue from "@/components/IconWithText.vue";
import "../extensions/string.extensions";

@Component({
  components: {
    "icon-with-text": IconWithTextVue
  }
})
export default class JobCard extends Vue {
  @Prop() public job: Job;
  @Prop() public isExpanded: boolean;
}
</script>

<style>
.company-picture {
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    background-origin: content-box;

}

.blur {
  filter: blur(10px) opacity(0.5);
  transform: scale(2);
  pointer-events: none;
}

.box {
  position: relative;
}
.box:before {
  content: "";
  display: block;
  padding-top: 100%;
}

.content {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}

.job-gradient{
    background-image: linear-gradient(to bottom right, #F5A802 , #F27169, #F44792 );

}
</style>


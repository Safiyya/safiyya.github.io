<template>
  <div class="job-card" >
    {{job.title}} {{job.start}}
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Provide } from "vue-property-decorator";
import Job from "@/models/job";

@Component({

})
export default class JobCard extends Vue {
  
  @Prop() job: Job;
}
</script>

<style>
</style>


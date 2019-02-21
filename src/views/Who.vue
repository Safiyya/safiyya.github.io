<template>
  <div class="who h-full flex" >
    <div class="w-1/3 bg-red">
      A recruiter
    </div>
    <div class="w-1/3 bg-yellow">
      A small business owner
    </div>
    <div class="w-1/3 bg-purple">
      A friend
    </div>
  </div>
</template>
 
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({})
export default class Who extends Vue {
mounted(){
     const myLandbotFrame = new LandbotFrameWidget({
        index: 'https://landbot.io/u/H-138679-U2BSN7OUPPSEA7YS/index.html',
        container: '#my-landbot',
        // or
        // container: document.getElementById('my-landbot'),
      });
}


}
</script>

<style scoped>
</style>


<template>
  <div class="home h-full w-full texture-background flex flex-col items-center justify-center">

    <div class="text-grey-lighter text-5xl">
      <div>Hello, I'm <span class="text-orange font-bold">Safiyya Babio</span>.
      </div>
      <div>I'm a full-stack web developer.</div>

 
    </div>
     <button @click="moveDown()"
     class="flex justify-center items-center group my-8 bg-transparent border-4 border-grey hover:border-white py-3 px-4 rounded text-grey hover:text-white font-bold text-xl uppercase" >
       View my work
        <img class="w-4 h-4 text-grey group-hover:text-white fill-current m-2"
              svg-inline
              src="@/assets/icons/arrow-thick-right.svg"
              alt="About"
            />
       </button>
  </div>
</template>
 
<script lang="ts">
import { Component, Vue, Emit } from "vue-property-decorator";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src

@Component({
  components: {
    HelloWorld
  }
})
export default class Home extends Vue {
 moveDown(){
   this.$emit('move-down');
 };

}
</script>

<style scoped>
/* .home::before {
    content: '';
    position: absolute;
    background: url(../assets/images/pezs.jpg) no-repeat;
    background-size: cover;
    width: 100%;
    height: 100%;
    left: 0;
    
    filter: blur(1px) grayscale(0.99);
} */



@-webkit-keyframes filter-animation {
  0% {
    -webkit-filter: blur(5px);
  }
  
  100% {
    -webkit-filter: blur(0px);
  }
}


</style>


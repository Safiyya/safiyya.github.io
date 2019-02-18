<template>
  <div class="home h-full w-full home-background flex flex-col items-center justify-center">

    <div class="text-grey-lighter text-5xl">
      <div>Hello, I'm <span class="text-orange font-bold">Safiyya Babio</span>.
      </div>
      <div>I'm a full-stack web developer.</div>

 
    </div>
     <button @click="moveDown()"
     class="flex flex-col justify-center items-center group my-8 bg-transparent border border-grey hover:border-white py-3 px-4 rounded text-grey hover:text-white font-bold text-xl uppercase" >
       View my work
        <img class="w-4 h-4 text-grey group-hover:text-white fill-current m-2"
              svg-inline
              src="@/assets/icons/arrow-thick-down.svg"
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

.home-background {
background-color: #22292f;
background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='32' viewBox='0 0 16 32'%3E%3Cg fill='%23613b1f' fill-opacity='0.4'%3E%3Cpath fill-rule='evenodd' d='M0 24h4v2H0v-2zm0 4h6v2H0v-2zm0-8h2v2H0v-2zM0 0h4v2H0V0zm0 4h2v2H0V4zm16 20h-6v2h6v-2zm0 4H8v2h8v-2zm0-8h-4v2h4v-2zm0-20h-6v2h6V0zm0 4h-4v2h4V4zm-2 12h2v2h-2v-2zm0-8h2v2h-2V8zM2 8h10v2H2V8zm0 8h10v2H2v-2zm-2-4h14v2H0v-2zm4-8h6v2H4V4zm0 16h6v2H4v-2zM6 0h2v2H6V0zm0 24h2v2H6v-2z'/%3E%3C/g%3E%3C/svg%3E");
/* -webkit-animation: filter-animation 3s; */
}

@-webkit-keyframes filter-animation {
  0% {
    -webkit-filter: blur(5px);
  }
  
  100% {
    -webkit-filter: blur(0px);
  }
}


</style>


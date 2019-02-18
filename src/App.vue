<template>
  <div id="app" class="h-screen"
  >

<!-- <nav class="bg-white mr-16 h-screen py-8 px-2">
  <ul class="list-reset">
    <li >
     <navigation-pill class="text-blue fill-current"
            :text="'About'"
            :to="'/about'"
          >
            <img
              svg-inline
              src="@/assets/icons/home.svg"
              alt="About"
            />
          </navigation-pill> </li>
    <li >
   <navigation-pill class="text-red fill-current"
            :text="'Experience'"
            :to="'/jobs'"
          >
            <img
              svg-inline
              src="@/assets/icons/portfolio.svg"
              alt="Experience"
            />
          </navigation-pill> </li>
    <li >
   <navigation-pill class="flex-col"
            :text="'Projects'"
            :to="'/projects'"
          >
            <img
              svg-inline
              src="@/assets/icons/gift.svg"
              alt="Projects"
            />
          </navigation-pill> </li>
    <li >
   <navigation-pill class="flex-col"
            :text="'Skills'"
            :to="'/skills'"
          >
            <img
              svg-inline
              src="@/assets/icons/code.svg"
              alt="Skills"
            />
          </navigation-pill> 
          </li>
          <li>
            <navigation-pill class="flex-col"
            :text="'Bookshelf'"
            :to="'/bookshelf'"
          >
            <img
              svg-inline
              src="@/assets/icons/news-paper.svg"
              alt="Bookshelf"
            />
          </navigation-pill>
          </li>

          <li>
             <navigation-pill class="flex-col"
            :text="'Resume'"
            :to="'/resume'"
          >
            <img
              svg-inline
              src="@/assets/icons/document.svg"
              alt="Resume"
            />
          </navigation-pill>
          </li>
          <li>
             <navigation-pill class="flex-col"
            :text="'Contact'"
            :to="'/contact'"
          >
            <img
              svg-inline
              src="@/assets/icons/at-symbol.svg"
              alt="Contact"
            />
          </navigation-pill>
          </li>
  </ul>
</nav> -->
<router-view />
    
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Provide } from "vue-property-decorator";
import NavigationPillVue from '@/components/NavigationPill.vue';

@Component({
  components: {
    "navigation-pill": NavigationPillVue
  }
})
export default class AppVue extends Vue {}
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>

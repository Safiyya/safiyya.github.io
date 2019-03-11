import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./registerServiceWorker";

import "@/assets/css/tailwind.css";
import "@/assets/css/styles.css";
import "@/assets/css/background-animations.scss";
import "@/assets/css/ribbon.css";

import VueSimpleSVG from "vue-simple-svg";
import Scrollspy from 'vue2-scrollspy';
import VueCarousel from 'vue-carousel';

Vue.use(VueCarousel, {
  perPage:1
});

Vue.use(Scrollspy, {
  data: "section",
  allowNoActive: true,
  time:500
});
Vue.use(VueSimpleSVG);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount("#app");

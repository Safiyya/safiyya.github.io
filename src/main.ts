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
import VueScrollto from "vue-scrollto";


Vue.use(VueSimpleSVG);
Vue.use(VueScrollto)

// Vue.use(VueFullPage);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount("#app");

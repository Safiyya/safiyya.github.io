import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/jobs",
      name: "jobs",
      component: () => import(/* webpackChunkName: "jobs" */ "./views/Jobs.vue")
    },
    {
      path: "/projects",
      name: "projects",
      component: () => import(/* webpackChunkName: "projects" */ "./views/Projects.vue")
    },
    {
      path: "/about",
      name: "about",
      component: () => import(/* webpackChunkName: "about" */ "./views/About.vue")
    },
    {
      path: "/contact",
      name: "contact",
      component: () => import(/* webpackChunkName: "contact" */ "./views/Contact.vue")
    },
    {
      path: "/bookshelf",
      name: "bookshelf",
      component: () => import(/* webpackChunkName: "bookshelf" */ "./views/Bookshelf.vue")
    }
  ]
});

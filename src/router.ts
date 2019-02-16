import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/past',
      name: 'past',
      component: () => import(/* webpackChunkName: "past" */ './views/Past.vue'),
    },
    {
      path: '/present',
      name: 'present',
      component: () => import(/* webpackChunkName: "present" */ './views/Present.vue'),
    },
    {
      path: '/likes',
      name: 'likes',
      component: () => import(/* webpackChunkName: "likes" */ './views/Likes.vue'),
    },
  ],
});

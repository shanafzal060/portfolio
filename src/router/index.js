import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path:'/skills',
    name: 'skills',
    component: () => import(/* webpackChunkName: "about" */ '../views/TheSkills.vue')
  },
  {
    path:'/projects',
    name:'projects',
    component: () => import(/* webpackChunkName: "about" */ '../views/TheProjects.vue')
  },
  {
    path:'/contact',
    name:'contact',
    component: () => import(/* webpackChunkName: "about" */ '../views/TheContact.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

import { createRouter, createWebHistory } from 'vue-router'
import Waiting from '../views/Waiting.vue'
import About from '../views/About-Us.vue'


const routes = [
  {
    path:'/',
    redirect: '/waiting',
  },
  {
    path: '/waiting',
    name: 'Waiting',
    component: Waiting
  },
  {
    path: '/about-us',
    name: 'About',
    component: About
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

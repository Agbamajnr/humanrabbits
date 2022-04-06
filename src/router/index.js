import { createRouter, createWebHistory } from 'vue-router'
import Waiting from '../views/Waiting.vue'

const routes = [
  {
    path: '/',
    name: 'Waiting',
    component: Waiting
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

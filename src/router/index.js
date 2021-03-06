import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Dashboard from '../views/Dashboard.vue'
import Login from '../views/Login.vue'
import Retrievepin from '../views/Forgot-Pin.vue'
import Register from '../views/Register.vue'
import Wallet from '../views/Wallet.vue'
import Game1 from '../views/FirstGame.vue'
import Profile from '../views/Profile.vue'
import Referral from '../views/Referral.vue'
import Join from '../views/Join.vue'
import MainProfile from '../views/MainProfile.vue';





const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/join/:rfCode',
    name: 'Join',
    component: Join
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/forgot-pin',
    name: 'Forgot-Pin',
    component: Retrievepin
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: '/dashboard/profile',
    name: 'MainProfile',
    component: MainProfile
  },
  {
    path: '/wallet',
    name: 'Wallet',
    component: Wallet
  },
  {
    path: '/referral',
    name: 'Referral',
    component: Referral
  },
  {
    path: '/games/rabbit1',
    name: 'Rabbit',
    component: Game1
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

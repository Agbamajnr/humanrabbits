import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import VueMeta from 'vue-meta'




createApp(App).use(VueMeta).use(store).use(router).mount('#app')


import './assets/css/tailwind.css';
import  "./assets/css/utilities.css";
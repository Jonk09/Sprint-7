import { createRouter, createWebHistory } from 'vue-router'
import BemVindo from '@/components/alertas.vue'
import Alertas from '@/components/bemvindo.vue'

const routes = [
  { path: '/', redirect: '/login' },
  // { path: '/login', component: Login },
  { path: '/bemvindo', component: BemVindo },
  { path: '/inicio', component: Alertas }
]

export const router = createRouter({
  history: createWebHistory(),
  routes
})


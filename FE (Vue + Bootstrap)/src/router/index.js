import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AnimeRoutes from './AnimeRoutes'
import CategoryRoutes from './CategoryRoutes'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: HomeView
    },
    ...AnimeRoutes,
    ...CategoryRoutes
  ]
})

export default router
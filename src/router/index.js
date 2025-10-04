import { createRouter, createWebHistory } from 'vue-router'
import Index from '@/components/GridAutoFlow.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // {
    //   path: '/',
    //   name: 'home',
    //   component: HomeView,
    // },
    {
      path: '/index',
      name: 'index',

      component: () => import('@/components/GridAutoFlow.vue'),
    },
  ],
})

export default router

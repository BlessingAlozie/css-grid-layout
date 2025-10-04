import { createRouter, createWebHistory } from 'vue-router'
import Index from '@/components/Index.vue'

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

      component: () => import('@/components/Index.vue'),
    },
  ],
})

export default router

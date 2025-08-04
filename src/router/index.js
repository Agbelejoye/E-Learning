import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CoursesView from '@/views/CoursesView.vue'
import PricingView from '@/views/PricingView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/contactview',
      name: 'contactview',
      component: () => import('../views/ContactView.vue'),
    },
    {
      path: '/coursesview',
      name: 'coursesview',
      component: CoursesView,
    },
    {
      path: '/pricingview',
      name: 'pricingview',
      component: PricingView,
    },
  ],
})

export default router

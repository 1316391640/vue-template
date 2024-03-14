import { createRouter, createWebHashHistory } from 'vue-router'
const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'index',
      redirect: '/home',
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('@/views/home/index.vue'),
    },
    {
      name: '404',
      path: '/404',
      component: () => import('@/views/404/index.vue'),
      meta: {
        title: 'NOT FIND',
      },
    },
    {
      name: 'any',
      path: '/:pathMatch(.*)*',
      redirect: '/404',
    },
  ],
})
export default router

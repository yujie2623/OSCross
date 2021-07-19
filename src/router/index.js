import { createRouter, createWebHashHistory } from 'vue-router'
import layout from '@/views/layout/index.vue'
import server from '@/views/server/index.vue'
import user from '@/views/layout/user.vue'

// 动态路由
// 0 普通用户 -1 未登录
export const dynamicRoutes  = [
  {
    path: '/users',
    meta: { roles: [0] },
    component: user,
    name: 'users',
    hidden: true,
    children: [{
      path: '/users',
      name: 'users',
      component: () => import('@/views/users.vue')
    }]
  }
]

// 组合路由
export const constantRoutes = [
  {
    path: '/login',
    name: 'login',
    hidden: true,
    component: () => import('@/views/login.vue')
  },
  {
    path: '/register',
    name: 'register',
    hidden: true,
    component: () => import('@/views/register.vue')
  },
  {
    path: '/',
    component: layout,
    name: 'home',
    children: [{
      path: '/',
      name: 'home',
      component: () => import('@/views/home.vue')
    }]
  },
  {
    path: '/product',
    component: layout,
    name: 'product',
    children: [{
      path: '/product',
      name: 'product',
      component: () => import('@/views/product.vue')
    }]
  },
  {
    path: '/download',
    component: layout,
    name: 'download',
    children: [{
      path: '/download',
      name: 'download',
      component: () => import('@/views/download.vue')
    }]
  },
  {
    path: '/server',
    component: layout,
    name: 'server',
    children: [{
      path: '/server',
      redirect: '/server/news',
      name: 'server',
      component: server,
      children: [
        {
          path: 'news',
          component: () => import('@/views/server/server/news.vue'),
          name: 'news'
        },
        {
          path: 'remark',
          component: () => import('@/views/server/server/remark.vue'),
          name: 'remark'
        },
        {
          path: '/details/:id',
          component: () => import('@/views/server/details.vue'),
          props: { default: true },
          name: 'details'
        }
      ]
    }]
  },
  {
    path: '/about',
    component: layout,
    name: 'about',
    hidden: true,
    children: [{
      path: '/about',
      name: 'about',
      component: () => import('@/views/about.vue')
    }]
  },
  {
    path: '/:pathMatch(.*)',
    name: '404',
    hidden: true,
    component: () => import('@/views/404.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes: constantRoutes,
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 }
  }
})

export default router
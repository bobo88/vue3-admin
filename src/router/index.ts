import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Mainer from '../layout/Mainer.vue'

// routes的约束类型是RouteRecordRaw
// 联合类型
type RouteConfig = RouteRecordRaw & {hidden?: boolean}; // hidden 是可选属性
const routes: Array<RouteConfig> = [
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue')
  },
  {
    path: '/',
    name: 'Mainer',
    component: Mainer,
    children: [
      // 首页
      {
        path: '/home',
        name: 'home',
        component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue')
      },
      // 用户管理
      {
        path: '/user-mgt',
        name: 'user-mgt',
        component: () => import(/* webpackChunkName: "A" */'../views/1userMgt/Index.vue'),
        redirect: '/user-mgt/user-list-mgt',
        children: [
          // 用户列表管理
          {
            path: 'user-list-mgt',
            name: 'user-list-mgt',
            component: () => import(/* webpackChunkName: "A" */'../views/1userMgt/user-list-mgt/Index.vue'),
            // redirect: '/user-management/user-list-mgt/all',
            children: [
              // 注册用户列表
              {
                path: 'user-all',
                name: 'user-all',
                component: () => import(/* webpackChunkName: "A" */'../views/1userMgt/user-list-mgt/all/Index.vue')
              },
              // Vip
              {
                path: 'user-vip',
                name: 'user-vip',
                component: () => import(/* webpackChunkName: "A" */'../views/1userMgt/user-list-mgt/vip/Index.vue')
              },
            ]
          },
          // 用户权限
          {
            path: 'user-auth',
            name: 'user-auth',
            component: () => import(/* webpackChunkName: "A" */'../views/1userMgt/user-auth/Index.vue'),
          },
        ]
      },
      // 内容管理
      {
        path: '/cont-mgt',
        name: 'cont-mgt',
        component: () => import(/* webpackChunkName: "B" */'../views/2contMgt/Index.vue'),
        redirect: '/cont-mgt/cont-list-mgt',
        children: [
          // 内容列表管理
          {
            path: 'cont-list-mgt',
            name: 'cont-list-mgt',
            component: () => import(/* webpackChunkName: "B" */'../views/2contMgt/cont-list-mgt/Index.vue'),
            // redirect: '/user-management/cont-list-mgt/all',
            children: [
              // 所有内容列表
              {
                path: 'cont-all',
                name: 'cont-all',
                component: () => import(/* webpackChunkName: "B" */'../views/2contMgt/cont-list-mgt/all/Index.vue')
              },
            ]
          },
        ]
      },
    ]
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

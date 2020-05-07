import Vue from 'vue'
import Router from 'vue-router'
import HomeLayout from '@/layout/Admin/HomeLayout'
Vue.use(Router)

export default new Router({
  linkExactActiveClass: 'active',
  routes: [
    {
      path: '/',
      redirect: 'home',
      component: HomeLayout,
      children: [
        {
          path: '/',
          name: 'home',
          // route level code-splitting
          // this generates a separate chunk (about.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import(/* webpackChunkName: "demo" */ './views/Admin/Home.vue')
        },
        {
          path: '/category',
          name: 'category',
          component: () => import(/* webpackChunkName: "demo" */ './views/Admin/Category.vue')
        },
      ]
    }
  ]
})

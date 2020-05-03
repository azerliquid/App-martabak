import Vue from 'vue'
import Router from 'vue-router'
import HomeLayout from '@/layout/HomeLayout'

Vue.use(Router)

export default new Router({
    linkActiveClass: 'active',
    routes: [
        {
            path: '/',
            redirect: 'home',
            component: HomeLayout,
            children: [
                {
                    path: '/home',
                    name: 'home',
                    component: () => import('./views/Admin/HomeLayout')
                }
            ]
        }
    ]
})
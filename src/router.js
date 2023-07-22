import { createRouter, createWebHistory  } from 'vue-router'
import TheLogin from './views/TheLogin'
import TheForget from './views/TheForget'
import AppMail from './views/AppMail'
import AppDashboard from './views/AppDashboard'

export default createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/login', component: TheLogin, alias: '/'},
        {path: '/forget', component: TheForget},
        {path: '/dashboard', component: AppDashboard},
        {path: '/mail/:mailId?', component: AppMail},
    ],
    linkActiveClass: 'active',
    linkExactActiveClass: 'active'
})
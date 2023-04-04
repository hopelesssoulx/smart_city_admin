// import blank_page from '../components/BlankPage.vue'
import Main from '../views/Main.vue'
import Home from '../views/Home.vue'

const routes = [
    // { path: '/', name: 'blank_page', component: blank_page },
    {
        path: '/',
        name: 'Main',
        component: Main,
        redirect: '/home',
        children: [
            { path: '/home', name: 'home', component: Home }, // 首页
        ]
    },
]


import { createRouter, createWebHashHistory } from 'vue-router'
const router = createRouter({
    history: createWebHashHistory(),
    routes,
})


export default router

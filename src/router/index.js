import blank_page from '../components/BlankPage.vue'


const routes = [
    { path: '/', name: 'blank_page', component: blank_page },
]


import { createRouter, createWebHashHistory } from 'vue-router'
const router = createRouter({
    history: createWebHashHistory(),
    routes,
})


export default router

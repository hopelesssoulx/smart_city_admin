// import blank_page from '../components/BlankPage.vue'
import Main from '../views/Main.vue'
import Home from '../views/Home.vue'
import NewsList from '../views/news/NewsList.vue'
import NewsEdit from '../views/news/NewsEdit.vue'
import NewsPub from '../views/news/NewsPub.vue'
import NewsBin from '../views/news/NewsBin.vue'
import userList from '../views/user/userList.vue'

const routes = [
    // { path: '/', name: 'blank_page', component: blank_page },
    {
        path: '/',
        name: 'Main',
        component: Main,
        redirect: '/home',
        children: [
            { path: '/home', name: 'home', component: Home }, // 首页

            { path: '/news/newsList', name: 'newsList', component: NewsList }, // 新闻列表
            { path: '/news/newsEdit', name: 'newsEdit', component: NewsEdit }, // 新闻列表
            { path: '/news/newsPub', name: 'newsPub', component: NewsPub }, // 新闻发布
            { path: '/news/newsBin', name: 'newsBin', component: NewsBin }, // 新闻草稿

            { path: '/user/userList', name: 'userList', component: userList }, // 用户列表
        ]
    }
]


import { createRouter, createWebHashHistory } from 'vue-router'
const router = createRouter({
    history: createWebHashHistory(),
    routes,
})


export default router

import VueRouter from 'vue-router'

import HomeContainer from './components/tabbar/HomeContainer.vue'
import MemberContainer from './components/tabbar/MemberContainer.vue'
import ShopContainer from './components/tabbar/ShopContainer.vue'
import SearchContainer from './components/tabbar/SearchContainer.vue'

import NewsList from './components/news/newslist.vue'

var router = new VueRouter({
    routes: [
        {
            path: '/',
            redirect: '/home'
        },
        {
            path: '/home',
            component: HomeContainer
        },
        {
            path: '/member',
            component: MemberContainer
        },
        {
            path: '/shop',
            component: ShopContainer
        },
        {
            path: '/search',
            component: SearchContainer
        },
        {
            path: '/home/newslist',
            component: NewsList
        }
    ],
    linkActiveClass: 'mui-active'
})

export default router
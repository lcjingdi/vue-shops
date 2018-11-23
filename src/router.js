import VueRouter from 'vue-router'

import account from './main/Account.vue'
import goodlist from './main/GoodsList.vue'

import login from './sub/login.vue'
import register from './sub/register.vue'

var router = new VueRouter({
    routes: [
        {
            path: '/account',
            component: account,
            children: [
                {
                    path: 'login', component: login
                },
                {
                    path: 'register', component: register
                }
            ]
        },
        {
            path:'/goodslist', component: goodlist
        }
    ]
})

export default router
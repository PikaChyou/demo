import { createRouter,createWebHistory,createWebHashHistory } from 'vue-router'
import App from '../App.vue'

import backmain from '../view/back/backmain.vue'
import mine2 from '../view//back/mine.vue'
import goodserchart from '../view//back/goodserchart.vue'
import goodsnote from '../view//back/goodsnote.vue'
import goodsranking from '../view//back/goodsranking.vue'
import goodssuggest from '../view//back/goodssuggest.vue'
import frontmain from '../view/front/frontmain.vue'
import mine1 from '../view//front/mine.vue'
import shopping from '../view//front/shopping.vue'
import goodchoose from '../view/front/goodchoose.vue'
import goodlist from '../view/front/goodlists.vue'
import login from '../view/login.vue'

const routes = [
    {
        path: '/',
        component:App
    },
    {
        path: '/login',
        component:login
    },
    {
        path: '/frontmain',
        component:frontmain,
        children:[
            {
                path: '/mine1',
                component:mine1
            },
            {
                path: '/shopping',
                component:shopping
            },
            {
                path: '/goodchoose',
                component:goodchoose
            },
            {
                path: '/goodlist',
                component:goodlist
            }
        ]
    },
    {
        path: '/backmain',
        component:backmain,
        children:[
            {
                path: '/mine2',
                component:mine2
            },
            {
                path: '/goodserchart',
                component:goodserchart
            },
            {
                path: '/goodsnote',
                component:goodsnote
            },
            {
                path: '/goodsranking',
                component:goodsranking
            },
            {
                path: '/goodssuggest',
                component:goodssuggest
            }
        ]
    },
]

const router = createRouter({
    history: createWebHistory(),
    // history:createWebHashHistory(),
    routes,
})

export default router;

import { createRouter,createWebHistory,createWebHashHistory } from 'vue-router'
import App from '../App.vue'

import backmain from '../view/back/backmain.vue'
import mine2 from '../view//back/mine.vue'
import statistical from '../view//back/statistical.vue'
import frontmain from '../view/front/frontmain.vue'
import mine1 from '../view//front/mine.vue'
import shopping from '../view//front/shopping.vue'
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
                path: '/statistical',
                component:statistical
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

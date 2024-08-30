import { createRouter,createWebHistory,createWebHashHistory } from 'vue-router'
import App from '../App.vue'

import back from '../view/back/back.vue'
import front from '../view/front/front.vue'

const routes = [
    {
        path: '/',
        component:App
    },
    {
        path: '/front',
        component:front,
        children:[]
    },
    {
        path: '/back',
        component:back,
        children:[]
    },
    // {
    //     path: '/file2/:username/abc/:userid', //注意看这个
    //     component:1
    // }
]

const router = createRouter({
    history: createWebHistory(),
    // history:createWebHashHistory(),
    routes,
})

export default router;

import { createRouter, createWebHistory } from 'vue-router';
import Home from "@/components/home.vue";
import About from "@/components/about.vue";
import Main from "@/components/store/main.vue";
import Action from "@/components/store/action.vue";

const routes = [
    { path: '', redirect: '/home'},
    { path: '/home', component: Home },
    { path: '/about', component: About },
    { path: '/store', component: Main},
    { path: '/store/:id/action', component: Action },
    {
        path: '/example',
        component: import('../components/example/main.vue'),
        children: [
            { path: '', redirect: '/example/table' },
            { path: 'table', component: import('../components/example/table.vue') },
            { path: ':id/action', component: import('../components/example/action.vue') },
        ]
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
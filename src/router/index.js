import { createRouter, createWebHistory } from 'vue-router';
import Home from "@/components/home.vue";

const routes = [
    { path: '', redirect: '/home'},
    { path: '/home', component: Home },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
import { createRouter, createWebHistory } from 'vue-router';
import Home from "@/components/home.vue";
import About from "@/components/about.vue";
import Main from "@/components/store/main.vue";

const routes = [
    { path: '', redirect: '/home'},
    { path: '/home', component: Home },
    { path: '/about', component: About },
    { path: '/store', component: Main}
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
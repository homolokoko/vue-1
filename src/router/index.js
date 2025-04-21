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
    {
        path: '/defect',
        component: import('../components/example/defect/main.vue'),
        children: [
            { path: '', redirect: '/defect/all' },
            { path: 'all', component: import('../components/example/defect/fetch.vue') },
            { path: 'store', component: import('../components/example/defect/create.vue') },
            { path: 'modify/:id', component: import('../components/example/defect/edit.vue') },
        ]
    },
    {
        path: '/citizen',
        component: import('../components/citizen/index.vue'),
        children: [
            {
                path: 'country',
                component: import('../components/citizen/country/index.vue') ,
                children: [
                    { path: '', component: import('../components/citizen/country/list.vue') },
                    { path: 'create', component: import('../components/citizen/country/create.vue') },
                    { path: ':id/edit', component: import('../components/citizen/country/edit.vue') },
                ]
            },
            {
                path: 'state',
                component: import('../components/citizen/state/index.vue'),
                children: [
                    { path: '', component: import('../components/citizen/state/list.vue') },
                    { path: 'create', component: import('../components/citizen/state/create.vue') },
                    { path: ':id/edit', component: import('../components/citizen/state/edit.vue') },
                ]
            },
            {
                path: 'city',
                component: import('../components/citizen/city/index.vue'),
                children: [
                    { path: '', component: import('../components/citizen/city/list.vue') },
                    { path: 'create', component: import('../components/citizen/city/create.vue') },
                    { path: ':id/edit', component: import('../components/citizen/city/edit.vue') },
                ]
            },
            { path: 'people', component: import('../components/citizen/people/index.vue') },
        ]
    },
    { path: '/photograph', component: import('../components/photograph/index.vue') },
    { path: '/dashboard', component: import('../components/dashboard/index.vue') },
    {
        path: '/product',
        component: import('../components/product/index.vue'),
        children: [
            { path: '', component: import('../components/product/list.vue') },
            { path: ':id', component: import('../components/product/detail.vue') },
            { path: 'create', component: import('../components/product/add.vue') },
        ]
    },
    {
        path: '/category',
        component: import('../components/category/index.vue'),
        children: [
            {path: '', component: import('../components/category/list.vue') },
            {path: 'add', component: import('../components/category/add.vue') },
            {path: ':id/edit', component: import('../components/category/edit.vue') },
        ]
    },
    { path: '/order', component: import('../components/order/index.vue') },
    { path: '/customer', component: import('../components/customer/index.vue') },
    { path: '/coupon', component: import('../components/coupon/index.vue') },
    { path: '/setting', component: import('../components/setting/index.vue') },
    {
        path: '/qr-code',
        component: import('../components/qr-code/index.vue'),
        children: [
            { path: '', redirect: '/qr-code/list' },
            { path: 'list', component: import('../components/qr-code/list.vue') },
            { path: 'view', component: import('../components/qr-code/view.vue') },
        ]
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home';
import About from '@/views/About';

const routes = [
    {
        path: "/",
        component: Home
        // component: () => import('@/views/Home')
    },
    {
        path: "/about",
        component: About
        // component: () => import('@/views/About')
    },
];

const router = createRouter({
    routes,
    // mode: "hash|history",
    history: createWebHistory()
});

export default router;

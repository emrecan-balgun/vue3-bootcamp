import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home';
import About from '@/views/About';
import Details from '@/views/Details';

const routes = [
    {
        name: "HomePage",
        path: "/public",
        component: Home
        // component: () => import('@/views/Home')
    },
    {
        name: "AboutPage",
        path: "/about",
        component: About
        // component: () => import('@/views/About')
    },
    {
        name: "DetailPage",
        path: "/detail/:userID",
        component: Details
        // component: () => import('@/views/About')
    },
];

const router = createRouter({
    routes,
    // mode: "hash|history",
    history: createWebHistory()
});

export default router;

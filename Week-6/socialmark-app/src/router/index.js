import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
    {
        name: "HomePage",
        path: "/",
        import: () => import('@/views/Home'),
    },
    {
        name: "LoginPage",
        path: "/login",
        import: () => import('@/views/Login'),
    },
    {
        name: "RegisterPage",
        path: "/register",
        import: () => import('@/views/Register'),
    },
]

export default createRouter({
    routes: [],
    history: createWebHashHistory() 
})
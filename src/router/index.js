import { createRouter, createWebHashHistory } from "vue-router";

const routes = [{
        path: "/",
        redirect: "login" //重定向到login界面
    },
    {
        path: "/login",
        name: "Login",
        component: () =>
            import ("../views/Login/index.vue") //引入login界面
    },
    {
        path: "/axios",
        name: "Axios",
        component: () =>
            import ("../views/Axios/axios.vue") //引入login界面
    }
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;
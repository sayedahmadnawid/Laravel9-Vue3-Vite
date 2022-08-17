import { createRouter, createWebHistory } from "vue-router"

import ProjectDetail from './pages/projects/ProjectDetail.vue'
import ProjectList from './pages/projects/ProjectList.vue'
import ProjectRegister from './pages/projects/ProjectRegister.vue'
//import NotFound from './pages/NotFound.vue'

const routes = [{
        path: "/",
        name: "Home",
        component: ProjectList,
    },
    {
        path: "/project-detail",
        name: "project-detail",
        component: ProjectDetail,
    },
    {
        path: "/project-register",
        name: "project-register",
        component: ProjectRegister,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
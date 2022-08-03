import { createRouter, createWebHistory } from "vue-router"

import ProjectDetail from './pages/projects/ProjectDetail.vue'
import ProjectList from './pages/projects/ProjectList.vue'
//import ProjectRegister from './pages/projects/ProjectRegister'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', redirect: '/projects' },
        { path: '/projects', component: ProjectList },
        { path: '/projects/:id', component: ProjectDetail },
        { path: '/:notFound(.*)', component: null }
    ]
})

export default router
import { createRouter, createWebHistory } from "vue-router"

import ProjectDetail from './pages/projects/ProjectDetail.vue'
import ProjectList from './pages/projects/ProjectList.vue'
import ProjectRegister from './pages/projects/ProjectRegister.vue'
import NotFound from './pages/NotFound.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', redirect: '/projects' },
        { path: '/projects', component: ProjectList },
        { path: '/test', component: ProjectRegister },
        {
            path: '/projects/:id',
            component: ProjectDetail,
            children: [{
                path: 'test',
                component: ProjectRegister
            }]
        },
        { path: '/:notFound(.*)', component: NotFound },
    ]
})

export default router
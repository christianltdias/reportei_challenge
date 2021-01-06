
import { createRouter, createWebHistory } from 'vue-router';

import Reports from '../components/pages/Reports.vue';
import Stories from '../components/pages/Stories.vue';
import Info from '../components/pages/Info.vue';
import Index from '../components/pages/Index.vue';
import UsersList from '../components/pages/UsersList.vue';
import NotFound from '../components/pages/NotFound.vue';
import AuthenticationError from '../components/pages/AuthenticationError.vue';
import store from '../store/index';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: Info, name: "index" },
        { path: '/index', component: Index, name: "inicio" },
        { path: '/users', component: UsersList, name: "users" },
        { path: '/stories', component: Stories, name: "stories" },
        { path: '/reports', component: Reports, name: "reports" },
        { path: '/unauthorized', component: AuthenticationError, name: "authetication" },
        { path: '/:notFound(.*)', component: NotFound }
    ]
});

router.beforeEach((to, from, next) => {
    if ((to.name === "inicio" || to.name === "stories" || to.name === "reports" || to.name === "users") && !store.getters.isLogged) {
        next({path:"/unauthorized"});
    } 
    next();
});

export default router;
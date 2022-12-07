import HelloView from "../views/HelloView.vue";
import ProjectsView from "../views/ProjectsView.vue";
import BlogView from "../views/BlogView.vue";

const routes = [
    {
        path: '/',
        redirect: '/hello',
        children: [
            {
                path: '/hello',
                component: HelloView,
            },
            {
                path: '/projects',
                component: ProjectsView,
            },
            {
                path: '/blog',
                component: BlogView,
            },
        ],
    },
];

export default routes;

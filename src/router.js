import { createMemoryHistory, createRouter } from "vue-router";

import Home from "./pages/Home.vue";
import Projects from "./pages/Projects.vue"; //<---- Import del componente About!
import Project from "./pages/Project.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/projects",
    name: "Projects",
    component: Projects,
  },
  {
    path: "/projects/:id",
    name: "Project",
    component: Project,
  },
];

const router = createRouter({
  history: createMemoryHistory(),
  routes,
});

export default router;

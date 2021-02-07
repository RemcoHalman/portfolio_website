import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Portfolio from "../views/Portfolio.vue";
import Cv from "../views/Cv.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      header: "home-header",
    },
  },
  {
    path: "/portfolio",
    name: "Portfolio",
    component: Portfolio,
  },
  {
    path: "/cv",
    name: "Cv",
    component: Cv,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

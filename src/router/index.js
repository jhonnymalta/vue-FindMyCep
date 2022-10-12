import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../views/HomeView.vue"),
    },
    {
      path: "/cep",
      name: "cep",
      component: () => import("../views/CepView.vue"),
    },
    {
      path: "/mylocations",
      name: "locations",
      component: () => import("../views/MyLocationsView.vue"),
    },
  ],
});

export default router;

import { createRouter, createWebHistory } from "vue-router";
import Home from "../components/Home.vue";
import NosRestaurants from "../components/NosRestaurants.vue"
import NosAssociations from "../components/NosAssociations.vue"
import NosPartenaires from "../components/NosPartenaires.vue"
import Coursiers from "../components/Coursiers.vue"
import Contact from "../components/Contact.vue"

const routerHistory = createWebHistory();

const router = createRouter({
  history: routerHistory,
  routes: [
    {
      path: "/",
      component: Home,
    },
    {
      path: "/NosRestaurants",
      component: NosRestaurants,
    },
    {
      path: "/NosAssociations",
      component: NosAssociations,
    },
    {
      path: "/NosPartenaires",
      component: NosPartenaires,
    },
    {
      path: "/Coursiers",
      component: Coursiers,
    },
    {
      path: "/Contact",
      component: Contact,
    },
  ],
});

export default router;
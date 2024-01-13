import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      component: AboutView,
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      const el = window.location.href.split("#")[1];
      if (el.length) {
        document.getElementById(el).scrollIntoView({ behavior: "smooth" });
      }
    } else if (savedPosition) {
      return savedPosition;
    } else {
      document.getElementById("app").scrollIntoView({ behavior: "smooth" });
    }
  },
});

export default router;

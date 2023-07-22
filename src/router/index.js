import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import ToyIndex from "../views/ToyIndex.vue";
import ToyDetails from "../views/ToyDetails.vue";
import ToyAdd from "../views/ToyAdd.vue";
import UserProfile from "../views/UserProfile.vue";

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
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
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // component: () => import('../views/AboutView.vue')
    },
    {
      path: "/toy",
      name: "toy",
      component: ToyIndex,
    },
    {
      path: "/toy/:toyId",
      component: ToyDetails,
    },
    {
      path: "/toy/edit/:toyId?",
      component: ToyAdd,
    },
    {
      path: "/userProfile",
      component: UserProfile,
    },
  ],
});

export default router;

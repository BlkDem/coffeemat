import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeScreen from "../views/HomeScreen.vue";
import DrinkView from "@/views/DrinkView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "HomeScreen",
    component: HomeScreen,
  },
  {
    path: "/detail/id=:id",
    name: "detail",
    component: DrinkView,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () =>
    //   import(/* webpackChunkName: "about" */ "../views/DrinkView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

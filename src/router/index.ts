import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeScreen from "../views/HomeScreen.vue";
import DrinkView from "@/views/DrinkView.vue";
import PaymentCardView from "@/views/PaymentCardView.vue";

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
  },
  {
    path: "/payment/card/id=:id",
    name: "card payment",
    component: PaymentCardView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

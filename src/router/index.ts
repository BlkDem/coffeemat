import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import ChooseDrinkView from "../views/ChooseDrinkView.vue";
import SelectedDrinkView from "@/views/SelectedDrinkView.vue";
import PaymentCardView from "@/views/PaymentCardView.vue";
import PaymentCashView from "@/views/PaymentCashView.vue";
import InfoPageView from '@/views/InfoPageView.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "HomeScreen",
    component: ChooseDrinkView,
  },
  {
    path: "/detail/id=:id",
    name: "detail",
    component: SelectedDrinkView,
  },
  {
    path: "/payment/card/id=:id",
    name: "card payment",
    component: PaymentCardView,
  },
  {
    path: "/payment/cash/id=:id",
    name: "cash payment",
    component: PaymentCashView,
  },
  {
    path: "/info",
    name: "information",
    component: InfoPageView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

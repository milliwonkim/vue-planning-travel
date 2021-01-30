import Vue from "vue";
import VueRouter from "vue-router";
import Schedules from "@/views/Schedules.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/schedules",
    name: "Schedules",
    component: Schedules
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;

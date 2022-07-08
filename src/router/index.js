import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Service from "../views/Service.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      layout: "main",
    },
  },
  {
    path: "/about",
    name: "About",
    component: About,
    meta: {
      layout: "main",
    },
  },

  {
    path: "/services",
    name: "Service",
    component: Service,
    meta: {
      layout: "main",
    },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;

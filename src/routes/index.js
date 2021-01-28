import Vue from "vue";
import Router from "vue-router";
import Login from "../components/Login.vue";
import LoginError from "../components/LoginError.vue";
import Register from "../components/Register.vue";
import PickADish from "../components/PickADish.vue";
import Main from "../components/Main.vue";

Vue.use(Router);

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "main",
      component: Main,
    },
    {
      path: "/login",
      name: "login",
      component: Login,
    },
    {
      path: "/loginError",
      name: "loginError",
      component: LoginError,
    },
    {
      path: "/register",
      name: "register",
      component: Register,
    },
    {
      path: "/pickADish",
      name: "pickADish",
      component: PickADish,
    },
  ],
});

export default router;

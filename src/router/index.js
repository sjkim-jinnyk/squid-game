import { createRouter, createWebHistory } from "vue-router";
import Main from "../views/Main.vue";
import Tutorial from "../views/Tutorial.vue";
import Questions from "../views/Questions.vue";

const routes = [
  { path: "", redirect: "/home" },
  { path: "/home", name: "Main", component: Main },
  { path: "/tutorial", name: "Tutorial", component: Tutorial },
  { path: "/questions", name: "Questions", component: Questions },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;

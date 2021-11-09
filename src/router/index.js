import { createRouter, createWebHistory } from "vue-router";
import Main from "../views/Main.vue";
import Tutorial from "../views/Tutorial.vue";
import Questions from "../views/Questions.vue";
import Loading from "../views/TestLoading.vue";
import Final from "../components/Final/Final_ENFP.vue";
// import Final_ENFP from "../components/Final/Final_ENFP.vue";

const routes = [
  { path: "", redirect: "/home" },
  { path: "/home", name: "Main", component: Main },
  { path: "/tutorial", name: "Tutorial", component: Tutorial, props: true },
  { path: "/questions", name: "Questions", component: Questions },
  { path: "/questions/result", name: "Final_ENFP", component: Final },
  { path: "/loading", name: "Loading", component: Loading },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;

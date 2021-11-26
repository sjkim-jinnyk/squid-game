import { createRouter, createWebHistory } from "vue-router";
import Main from "../views/Main.vue";
import Tutorial from "../views/Tutorial.vue";
import Questions from "../views/Questions.vue";
import Loading from "../views/TestLoading.vue";
import EventPage from "../views/EventPage.vue";
import Final_ENFJ from "../components/Final/Final_ENFJ.vue";
import Final_ENFP from "../components/Final/Final_ENFP.vue";
import Final_ENTJ from "../components/Final/Final_ENTJ.vue";
import Final_ENTP from "../components/Final/Final_ENTP.vue";
import Final_ESFJ from "../components/Final/Final_ESFJ.vue";
import Final_ESFP from "../components/Final/Final_ESFP.vue";
import Final_ESTJ from "../components/Final/Final_ESTJ.vue";
import Final_ESTP from "../components/Final/Final_ESTP.vue";
import Final_INFJ from "../components/Final/Final_INFJ.vue";
import Final_INFP from "../components/Final/Final_INFP.vue";
import Final_INTJ from "../components/Final/Final_INTJ.vue";
import Final_INTP from "../components/Final/Final_INTP.vue";
import Final_ISFJ from "../components/Final/Final_ISFJ.vue";
import Final_ISFP from "../components/Final/Final_ISFP.vue";
import Final_ISTJ from "../components/Final/Final_ISTJ.vue";
import Final_ISTP from "../components/Final/Final_ISTP.vue";

const routes = [
  { path: "/", name: "Main", component: Main },
  { path: "/tutorial", name: "Tutorial", component: Tutorial, props: true },
  { path: "/questions", name: "Questions", component: Questions },
  { path: "/loading", name: "Loading", component: Loading, props: true },
  { path: "/eventpage", name: "EventPage", component: EventPage, props: true },

  { path: "/questions/result/ENFJ", name: "Final_ENFJ", component: Final_ENFJ, props: true },
  { path: "/questions/result/ENFP", name: "Final_ENFP", component: Final_ENFP, props: true },
  { path: "/questions/result/ENTJ", name: "Final_ENTJ", component: Final_ENTJ, props: true },
  { path: "/questions/result/ENTP", name: "Final_ENTP", component: Final_ENTP, props: true },
  { path: "/questions/result/ESFJ", name: "Final_ESFJ", component: Final_ESFJ, props: true },
  { path: "/questions/result/ESFP", name: "Final_ESFP", component: Final_ESFP, props: true },
  { path: "/questions/result/ESTJ", name: "Final_ESTJ", component: Final_ESTJ, props: true },
  { path: "/questions/result/ESTP", name: "Final_ESTP", component: Final_ESTP, props: true },
  { path: "/questions/result/INFJ", name: "Final_INFJ", component: Final_INFJ, props: true },
  { path: "/questions/result/INFP", name: "Final_INFP", component: Final_INFP, props: true },
  { path: "/questions/result/INTJ", name: "Final_INTJ", component: Final_INTJ, props: true },
  { path: "/questions/result/INTP", name: "Final_INTP", component: Final_INTP, props: true },
  { path: "/questions/result/ISFJ", name: "Final_ISFJ", component: Final_ISFJ, props: true },
  { path: "/questions/result/ISFP", name: "Final_ISFP", component: Final_ISFP, props: true },
  { path: "/questions/result/ISTJ", name: "Final_ISTJ", component: Final_ISTJ, props: true },
  { path: "/questions/result/ISTP", name: "Final_ISTP", component: Final_ISTP, props: true },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;

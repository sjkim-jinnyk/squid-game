import { createApp } from "vue";
import { createHead } from "@vueuse/head";
import VueClipboard from "vue-clipboard2";
import App from "./App.vue";
import router from "./router";

VueClipboard.config.autoSetContainer = true;

const head = createHead();
const app = createApp(App).use(router).use(head).use(VueClipboard).mount("#app");

export default { app, head };

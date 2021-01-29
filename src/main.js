import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import TheFooter from "@/components/TheFooter.vue";
import TheHeader from "@/components/TheHeader.vue";

import "@/assets/scss/main.scss";
// import "vue-cookie-accept-decline/dist/vue-cookie-accept-decline.css";
// import VueCookieAcceptDecline from "vue-cookie-accept-decline";

const app = createApp(App);

// app.component("vue-cookie-accept-decline", VueCookieAcceptDecline);
app.component("the-footer", TheFooter);
app.component("the-header", TheHeader);
app.use(router);
app.mount("#app");

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

// Components
import TheFooter from "@/components/TheFooter.vue";
import TheHeader from "@/components/TheHeader.vue";

// Mixins
import titleMixin from "./mixins/titleMixin";

import "@/assets/scss/main.scss";
// import "vue-cookie-accept-decline/dist/vue-cookie-accept-decline.css";
// import VueCookieAcceptDecline from "vue-cookie-accept-decline";

// Global app created
const app = createApp(App);

// Register Components
// app.component("vue-cookie-accept-decline", VueCookieAcceptDecline);
app.component("the-footer", TheFooter);
app.component("the-header", TheHeader);

// Mixins
app.mixin(titleMixin);

// What the app uses
app.use(router);

// Mount app to index
app.mount("#app");

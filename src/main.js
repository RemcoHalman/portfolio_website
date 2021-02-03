import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store/index.js";

// Components
import TheFooter from "@/components/TheFooter.vue";
import TheHeader from "@/components/TheHeader.vue";

// Mixins
import titleMixin from "./mixins/titleMixin";

// Extras
import "@/assets/scss/main.scss";

// Global app created
const app = createApp(App);

// Register Components
app.component("the-footer", TheFooter);
app.component("the-header", TheHeader);

// Mixins
app.mixin(titleMixin);

// What the app uses
app.use(router);
app.use(store);

// Mount app to index
app.mount("#app");

import { createApp } from "vue";
import { createPinia } from "pinia";

import "./assets/index.css";

import App from "./App.vue";
import router from "./router";

const app = createApp(App);

app.use(createPinia());
app.use(router);

import i18n from "./locales";
app.use(i18n);

app.mount("#app");

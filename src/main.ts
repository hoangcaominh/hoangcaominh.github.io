import { createApp } from "vue"
import { createPinia } from "pinia"

import "./assets/main.css"

import App from "./App.vue"
import router from "./router"

const app = createApp(App)

app.use(createPinia())
app.use(router)

// PrimeVue stuffs
import "primevue/resources/themes/aura-light-amber/theme.css"
import "primeicons/primeicons.css"

import PrimeVue from "primevue/config"
app.use(PrimeVue)

import ToastService from "primevue/toastservice"
app.use(ToastService)

import Toast from "primevue/toast"
app.component("Toast", Toast)

import i18n from "./locales"
app.use(i18n)

app.mount("#app")

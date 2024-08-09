import { createI18n } from "vue-i18n"

import en from "./en"
import ja from "./ja"

const DEFAULT_LOCALE = "en"

export const SUPPORT_LOCALES = ["en", "ja"]

export const i18n = createI18n({
  locale: DEFAULT_LOCALE,
  fallbackLocale: "en",
  messages: {
    en: en.messages,
    ja: ja.messages
  }
})

export function setLocale(locale: string) {
  if (SUPPORT_LOCALES.includes(locale)) {
    i18n.global.locale = locale as typeof i18n.global.locale
    document.querySelector("html")?.setAttribute("lang", locale)
  }
}

export default i18n

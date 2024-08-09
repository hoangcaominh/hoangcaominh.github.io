<script setup>
import { reactive } from "vue"
import enIcon from "@/assets/icons/uk.png"
import jaIcon from "@/assets/icons/japan.png"
import { setLocale } from "@/locales"

const langs = reactive({
  en: enIcon,
  ja: jaIcon
})
</script>

<template>
  <div class="container flex justify-center">
    <div v-for="(icon, lang) in langs" :key="lang" class="mx-3">
      <div
        class="rounded-md bg-gradient-to-br hover:from-neutral-100 hover:to-neutral-300 active:from-red-400 active:to-red-700"
        @click="setLocale(lang)"
      >
        <img class="p-1 active:scale-90" :src="icon" :alt="lang" />
      </div>
    </div>
  </div>
</template>

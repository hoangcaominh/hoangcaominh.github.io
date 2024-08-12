<script setup lang="ts">
import routes from "@/data/json/routes.json";
</script>

<template>
  <PageTitle>Cao Minh's GitHub Website</PageTitle>
  <div class="text-center" v-for="(route, i) in routes" :key="route.to">
    <p class="mt-6 italic font-bold" :class="i % 2 == 0 ? 'text-blue-600' : 'text-red-500'">
      {{ route.description }}
    </p>
    <RouterLink class="p-1 text-green-700 hover:bg-green-700 hover:text-white" :to="route.to">{{
      route.name
    }}</RouterLink>
  </div>
  <a href="https://ko-fi.com/hoangcaominh" target="_blank">☕ Buy me a coffee</a>
</template>

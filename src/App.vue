<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router"
</script>

<template>
  <Toast />
  <div class="main">
    <header>
      <nav class="grid grid-cols-2 gap-2">
        <RouterLink class="route" to="/">Home</RouterLink>
        <RouterLink class="route" to="/about">About</RouterLink>
      </nav>
    </header>
    <SelectLang />

    <RouterView />
  </div>
</template>

<style scoped>
.main {
  @apply container mx-auto space-y-5;
}

.route {
  @apply p-5 text-2xl text-center border rounded-md border-solid border-gray-500 hover:bg-gray-100 active:bg-gray-300;
}
</style>

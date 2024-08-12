<script setup lang="ts">
import { RouterView } from "vue-router";
</script>

<template>
  <div class="py-3">
    <div class="container mx-auto bg-gray-100 opacity-90 p-4">
      <RouterView />
    </div>
  </div>
</template>

<style>
body {
  background: url("@/assets/images/background.png") no-repeat fixed;
}
</style>

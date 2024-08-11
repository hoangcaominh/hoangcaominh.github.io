<script setup lang="ts">
import websites from "@/data/json/websites.json"
</script>

<template>
  <PageTitle>Websites</PageTitle>
  <div class="text-center">
    <div v-for="website in websites" :key="website.description">
      <p class="font-bold">{{ website.description }}</p>
      <div class="my-1" v-for="link in website.links" :key="link.url">
        <a :href="link.url">{{ link.name }}</a>
      </div>
    </div>
    <PageBackButton></PageBackButton>
  </div>
</template>

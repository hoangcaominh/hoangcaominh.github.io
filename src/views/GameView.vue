<script setup lang="ts">
import games from "@/data/json/games.json";
</script>

<template>
  <PageTitle>Replays</PageTitle>
  <div class="text-center" v-for="(game, i) in games" :key="game.name">
    <p class="mt-6 italic font-bold" :class="i % 2 == 0 ? 'text-blue-600' : 'text-red-500'">
      {{ game.name }}
    </p>
    <div v-for="link in game.links" :key="link.url">
      <a
        class="p-1 text-green-700 hover:bg-green-700 hover:text-white"
        :href="link.url"
        target="_blank"
        >{{ link.name }}</a
      >
    </div>
    <PageBackButton></PageBackButton>
  </div>
</template>

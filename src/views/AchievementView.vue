<script setup lang="ts">
import achievements from "@/data/json/achievements.json";
</script>

<template>
  <PageTitle>Achievements</PageTitle>
  <div class="text-center">
    <table class="table-auto mx-auto my-4 border-collapse border border-slate-600">
      <thead>
        <tr>
          <th class="border border-slate-600 bg-blue-600 text-white p-1">Date</th>
          <th class="border border-slate-600 bg-red-500 text-white p-1">Comment</th>
        </tr>
      </thead>
      <tbody>
        <tr class="text-left" v-for="achievement in achievements" :key="achievement.achievement">
          <td
            class="border border-slate-600 bg-blue-600 text-white p-1"
            :class="{ 'is-milestone': achievement.isMilestone }"
          >
            {{ achievement.date }}
          </td>
          <td
            class="border border-slate-600 bg-red-500 text-white p-1"
            :class="{ 'is-milestone': achievement.isMilestone }"
          >
            {{ achievement.achievement }}
          </td>
        </tr>
      </tbody>
    </table>
    <PageBackButton></PageBackButton>
  </div>
</template>

<style scoped>
.is-milestone {
  @apply font-bold;
  color: yellow;
}
</style>

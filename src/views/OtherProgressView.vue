<script setup lang="ts">
import progress from "@/data/json/progress_others.json";
</script>

<template>
  <PageTitle>Other Progress (Spinoff STGs)</PageTitle>
  <div class="text-center">
    <table class="table-auto mx-auto my-4 border-collapse border border-slate-600">
      <thead>
        <tr>
          <th class="border border-slate-600 bg-blue-600 text-white p-1 w-16">Game</th>
          <th class="border border-slate-600 bg-pink-500 text-white p-1 w-32">Condition</th>
          <th class="border border-slate-600 bg-red-500 text-white p-1 w-96">Status</th>
        </tr>
      </thead>
      <tbody class="text-left" v-for="obj in progress" :key="obj.game">
        <tr v-for="(objective, i) in obj.objectives" :key="objective.condition">
          <td
            class="border border-slate-600 bg-blue-600 text-white p-1 w-8"
            v-if="i == 0"
            :rowspan="obj.objectives.length"
          >
            {{ obj.game }}
          </td>
          <td class="border border-slate-600 bg-pink-500 text-white p-1">
            {{ objective.condition }}
          </td>
          <td class="border border-slate-600 bg-red-500 text-white p-1">{{ objective.status }}</td>
        </tr>
      </tbody>
    </table>
    <PageBackButton></PageBackButton>
  </div>
</template>

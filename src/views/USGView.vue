<script setup lang="ts">
import usg from "@/data/json/usg.json";
</script>

<template>
  <PageTitle>Unplanned Scoring Goals</PageTitle>
  <div class="text-center">
    <table
      class="table-auto mx-auto my-4 border-separate border border-gray-400 text-white bg-slate-600"
    >
      <thead>
        <tr>
          <th class="border-separate border border-gray-400 p-1">Game</th>
          <th class="border-separate border border-gray-400 p-1">Difficulty</th>
          <th class="border-separate border border-gray-400 p-1">Shottype</th>
          <th class="border-separate border border-gray-400 p-1">Goal</th>
          <th class="border-separate border border-gray-400 p-1">Comment</th>
        </tr>
      </thead>
      <tbody>
        <!-- eslint-disable-next-line vue/require-v-for-key -->
        <tr class="text-left" v-for="obj in usg">
          <td class="border-separate border border-gray-400 p-1">{{ obj.game }}</td>
          <td class="border-separate border border-gray-400 p-1">{{ obj.difficulty }}</td>
          <td class="border-separate border border-gray-400 p-1">{{ obj.shottype }}</td>
          <td class="border-separate border border-gray-400 p-1">{{ obj.goal }}</td>
          <td class="border-separate border border-gray-400 p-1">{{ obj.comment }}</td>
        </tr>
      </tbody>
    </table>
    <PageBackButton></PageBackButton>
  </div>
</template>

<script setup lang="ts">
import replays from "@/data/json/replays.json"
</script>

<template>
  <PageTitle>Replays</PageTitle>
  <div class="text-center">
    <p>Click on the replay name to download</p>
    <table class="table-auto mx-auto my-4 border-collapse border border-slate-600">
      <thead>
        <tr>
          <th class="border border-slate-600 bg-blue-600 text-white p-1 w-16">Game</th>
          <th class="border border-slate-600 bg-pink-500 text-white p-1 w-40">Replay name</th>
          <th class="border border-slate-600 bg-red-500 text-white p-1 w-96">Comment</th>
        </tr>
      </thead>
      <tbody>
        <tr class="text-left" v-for="replay in replays" :key="replay.path">
          <td class="border border-slate-600 bg-blue-600 text-white p-1">{{ replay.game }}</td>
          <td class="border border-slate-600 bg-pink-500 text-white p-1">
            <a class="text-white hover:text-white" :href="replay.path">{{
              replay.path.split("/").pop()
            }}</a>
          </td>
          <td class="border border-slate-600 bg-red-500 text-white p-1">{{ replay.comment }}</td>
        </tr>
      </tbody>
    </table>
    <PageBackButton></PageBackButton>
  </div>
</template>

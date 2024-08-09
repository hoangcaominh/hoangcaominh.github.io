<script setup lang="ts">
import { ref } from "vue"
import dayjs from "dayjs"
import { CONSTANTS } from "thrpy-parser"

defineProps(["filename", "info"])

const stagesActive = ref(false)
</script>

<template>
  <div class="grid">
    <Transition name="replay-slide">
      <table
        class="container table-overlap border border-separate border-slate-500 text-left shadow-lg shadow-th06/50"
        v-show="!stagesActive"
      >
        <thead>
          <tr>
            <th class="border border-slate-500 bg-th06 text-slate-100 px-3 py-1" colspan="100%">
              {{ filename }}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th class="border border-slate-500 px-3 py-1">{{ $t(`table.labels.game`) }}</th>
            <td class="border border-slate-500 px-3 py-1">
              {{ $t(`table.values.${info.game}.title`) }}
            </td>
          </tr>
          <tr>
            <th class="border border-slate-500 px-3 py-1">{{ $t(`table.labels.difficulty`) }}</th>
            <td class="border border-slate-500 px-3 py-1">
              {{ $t(`table.values.difficulty.${info.difficulty}`) }}
            </td>
          </tr>
          <tr>
            <th class="border border-slate-500 px-3 py-1">{{ $t(`table.labels.shot`) }}</th>
            <td class="border border-slate-500 px-3 py-1">
              {{ $t(`table.values.${info.game}.shot[${info.shot}]`) }}
            </td>
          </tr>
          <tr>
            <th class="border border-slate-500 px-3 py-1">{{ $t(`table.labels.score`) }}</th>
            <td class="border border-slate-500 px-3 py-1">{{ $n(info.score) }}</td>
          </tr>
          <tr>
            <th class="border border-slate-500 px-3 py-1">{{ $t(`table.labels.date`) }}</th>
            <td class="border border-slate-500 px-3 py-1">
              {{ dayjs(info.date).format("YYYY-MM-DD") }}
            </td>
          </tr>
          <tr>
            <th class="border border-slate-500 px-3 py-1">{{ $t(`table.labels.name`) }}</th>
            <td class="border border-slate-500 px-3 py-1">{{ info.name }}</td>
          </tr>
          <tr>
            <th class="border border-slate-500 px-3 py-1">{{ $t(`table.labels.slowdown`) }}</th>
            <td class="border border-slate-500 px-3 py-1">{{ info.slowdown.toFixed(2) }}%</td>
          </tr>
          <tr>
            <th class="border border-slate-500 px-3 py-1">{{ $t(`table.labels.type`) }}</th>
            <td class="border border-slate-500 px-3 py-1">
              {{ $t(`table.values.type[${info.type}]`) }}
            </td>
          </tr>
          <tr>
            <Button
              class="mx-2 my-1 bg-th06 hover:bg-th06/75 active:bg-th06/50 border-transparent"
              v-if="
                info.type === CONSTANTS.REPLAY_TYPE.FULL_GAME &&
                info.difficulty !== CONSTANTS.DIFFICULTY.EXTRA
              "
              @click="stagesActive = !stagesActive"
            >
              <span>{{ $t(`table.labels.stages`) }} <span class="pi pi-caret-right"></span></span>
            </Button>
          </tr>
        </tbody>
      </table>
    </Transition>
    <Transition name="stages-slide">
      <table
        class="container table-overlap border border-separate border-slate-500 text-left shadow-lg shadow-th06/50"
        v-show="stagesActive"
      >
        <thead>
          <tr>
            <th class="border border-slate-500 bg-th06 text-slate-100 px-3 py-1" colspan="100%">
              {{ filename }} - {{ $t(`table.labels.stages`) }}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th class="border border-slate-500 px-3 py-1">Stage</th>
            <th class="border border-slate-500 px-3 py-1">Score</th>
            <th class="border border-slate-500 px-3 py-1">Lives</th>
            <th class="border border-slate-500 px-3 py-1">Bombs</th>
            <th class="border border-slate-500 px-3 py-1">Power</th>
            <th class="border border-slate-500 px-3 py-1">Rank</th>
          </tr>
          <tr v-for="stage in info.stages" :key="stage.stage">
            <th class="border border-slate-500 px-3 py-1">
              {{ $t(`table.labels.stage_number`, { stage: stage.stage }) }}
            </th>
            <td class="border border-slate-500 px-3 py-1">{{ $n(stage.score) }}</td>
            <td class="border border-slate-500 px-3 py-1">{{ stage.lives }}</td>
            <td class="border border-slate-500 px-3 py-1">{{ stage.bombs }}</td>
            <td class="border border-slate-500 px-3 py-1">{{ stage.power }}</td>
            <td class="border border-slate-500 px-3 py-1">{{ stage.rank }}</td>
          </tr>
          <tr>
            <Button
              class="mx-2 my-1 bg-th06 hover:bg-th06/75 active:bg-th06/50 border-transparent"
              @click="stagesActive = false"
            >
              <span><span class="pi pi-caret-left"></span> {{ $t(`table.labels.back`) }} </span>
            </Button>
          </tr>
        </tbody>
      </table>
    </Transition>
  </div>
</template>

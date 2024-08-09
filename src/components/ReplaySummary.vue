<script setup>
import { Buffer } from "buffer"
import { parse, CONSTANTS } from "thrpy-parser"
import { ref } from "vue"
import { useToast } from "primevue/usetoast"
import { appendStartingStage } from "@/utilities/replay"
const toast = useToast()

import Th06Summary from "./tables/Th06Summary.vue"
import Th07Summary from "./tables/Th07Summary.vue"
import Th08Summary from "./tables/Th08Summary.vue"
import Th09Summary from "./tables/Th09Summary.vue"
import Th10Summary from "./tables/Th10Summary.vue"
import Th11Summary from "./tables/Th11Summary.vue"
import Th12Summary from "./tables/Th12Summary.vue"
import Th128Summary from "./tables/Th128Summary.vue"
import Th13Summary from "./tables/Th13Summary.vue"
import Th14Summary from "./tables/Th14Summary.vue"
import Th15Summary from "./tables/Th15Summary.vue"
import Th16Summary from "./tables/Th16Summary.vue"
import Th17Summary from "./tables/Th17Summary.vue"
import Th18Summary from "./tables/Th18Summary.vue"

const touhouComponentList = {
  [CONSTANTS.GAME.TH06.ID]: Th06Summary,
  [CONSTANTS.GAME.TH07.ID]: Th07Summary,
  [CONSTANTS.GAME.TH08.ID]: Th08Summary,
  [CONSTANTS.GAME.TH09.ID]: Th09Summary,
  [CONSTANTS.GAME.TH10.ID]: Th10Summary,
  [CONSTANTS.GAME.TH11.ID]: Th11Summary,
  [CONSTANTS.GAME.TH12.ID]: Th12Summary,
  [CONSTANTS.GAME.TH128.ID]: Th128Summary,
  [CONSTANTS.GAME.TH13.ID]: Th13Summary,
  [CONSTANTS.GAME.TH14.ID]: Th14Summary,
  [CONSTANTS.GAME.TH15.ID]: Th15Summary,
  [CONSTANTS.GAME.TH16.ID]: Th16Summary,
  [CONSTANTS.GAME.TH17.ID]: Th17Summary,
  [CONSTANTS.GAME.TH18.ID]: Th18Summary
}

const props = defineProps(["file"])

const info = ref({})

props.file
  .arrayBuffer()
  .then((buffer) => {
    const replay = parse(Buffer.from(buffer))
    if (
      replay.type === CONSTANTS.REPLAY_TYPE.FULL_GAME &&
      replay.difficulty !== CONSTANTS.DIFFICULTY.EXTRA
    )
      info.value = appendStartingStage(replay)
    else info.value = replay
    toast.add({
      severity: "success",
      summary: "Success",
      detail: `Uploaded ${props.file.name}.`,
      life: 3000
    })
  })
  .catch((err) => {
    toast.add({
      severity: "error",
      summary: "Error",
      detail: `${props.file.name} ${err}`,
      life: 5000
    })
  })
</script>

<template>
  <component :is="touhouComponentList[info.game]" :filename="file.name" :info="info"></component>
</template>

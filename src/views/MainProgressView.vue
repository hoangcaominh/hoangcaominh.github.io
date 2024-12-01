<script setup lang="ts">
import progress from "@/data/json/progress_main.json";
import { Comment, h } from "vue";

interface MPReplay {
  type: string;
  meets3rdConditions: boolean;
  replayPath: string;
  description: string;
}

function getReplayCell(obj: MPReplay | undefined) {
  if (!obj) return h(Comment);

  const styles: string[] = [];
  if (obj.meets3rdConditions) {
    styles.push("meet-conditions");
    if (obj.type == "nmnb") styles.push("font-bold");
  } else {
    styles.push("!text-white");
  }

  let description = obj.description;
  if (obj.description == "" && obj.replayPath != "")
    description = obj.replayPath.split("/").pop() ?? "replay";
  return obj.replayPath != ""
    ? h("a", { href: obj.replayPath, class: styles }, [description])
    : h("p", { class: styles }, [description]);
}
</script>

<template>
  <PageTitle>Main Progress (Survival)</PageTitle>
  <div class="text-center">
    <div class="my-6">
      <p class="text-2xl">Labels</p>
      <table class="table-auto mx-auto my-2 border-collapse border border-gray-600">
        <tbody>
          <tr>
            <td class="border border-gray-600 px-2 py-1 text-white nmnb">No Miss No Bomb</td>
          </tr>
          <tr>
            <td class="border border-gray-600 px-2 py-1 text-white nm">No Miss</td>
          </tr>
          <tr>
            <td class="border border-gray-600 px-2 py-1 text-white nb">No Bomb</td>
          </tr>
          <tr>
            <td class="border border-gray-600 px-2 py-1 text-white ncc">1cc</td>
          </tr>
          <tr>
            <td class="border border-gray-600 px-2 py-1 text-white nc">Attempted</td>
          </tr>
          <tr>
            <td class="border border-gray-600 px-2 py-1 text-white na">Not available</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div>
      <p>Click on the replay name to download (if available)</p>
      <p>Only cells which have notable run (from No Bomb upward) have a replay</p>
      <p>
        Replays with <span class="bg-yellow-400">yellow</span> text color have one or more required
        conditions achieved. Those are:
      </p>
      <p>* PCB: No Border Break (NBB)</p>
      <p>* IN: Full Spell (FS) (Because you cannot die to last spells)</p>
      <p>* UFO: No Ventora/UFOS (NV/NU)</p>
      <p>* TD: No Trance (NT)</p>
      <p>* HSiFS: No Release (NR)</p>
      <p>* WBaWC: No Berserk Roar/Hyper and No Roar Break (NBR/NH & NRB)</p>
      <p>
        * UM: No Card (NC) (As in no cards are set up or bought in a run except item cards bar power
        up card)
      </p>
      <p>For replays from games not listed above, the text color will always be colored.</p>
      <p>
        A <span class="nmnb text-yellow-400 font-bold">PERFECT</span> run is considered a run with
        no miss, no bomb and no 3rd condition stated above.
      </p>
      <p>These replays will have their name in <span class="font-bold">bold</span>.</p>
    </div>
    <table class="table-auto mx-auto my-4 border-collapse border border-gray-600">
      <thead>
        <tr>
          <th class="border border-gray-600 bg-blue-600 text-white px-2 py-1">Game</th>
          <th class="border border-gray-600 bg-blue-600 text-white px-2 py-1">Easy</th>
          <th class="border border-gray-600 bg-blue-600 text-white px-2 py-1">Normal</th>
          <th class="border border-gray-600 bg-blue-600 text-white px-2 py-1">Hard</th>
          <th class="border border-gray-600 bg-blue-600 text-white px-2 py-1">Lunatic</th>
          <th class="border border-gray-600 bg-blue-600 text-white px-2 py-1">Extra</th>
          <th class="border border-gray-600 bg-blue-600 text-white px-2 py-1">Phantasm</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="game in progress" :key="game.game">
          <td class="border border-gray-600 bg-blue-600 text-white px-2 py-1 text-left">
            {{ game.game }}
          </td>
          <td class="border border-gray-600 px-2 py-1" :class="game.pb.easy.type">
            <component :is="getReplayCell(game.pb.easy)"></component>
          </td>
          <td class="border border-gray-600 px-2 py-1" :class="game.pb.normal.type">
            <component :is="getReplayCell(game.pb.normal)"></component>
          </td>
          <td class="border border-gray-600 px-2 py-1" :class="game.pb.hard.type">
            <component :is="getReplayCell(game.pb.hard)"></component>
          </td>
          <td class="border border-gray-600 px-2 py-1" :class="game.pb.lunatic.type">
            <component :is="getReplayCell(game.pb.lunatic)"></component>
          </td>
          <td class="border border-gray-600 px-2 py-1" :class="game.pb.extra.type">
            <component :is="getReplayCell(game.pb.extra)"></component>
          </td>
          <td class="border border-gray-600 px-2 py-1" :class="game.pb.phantasm?.type ?? 'na'">
            <component :is="getReplayCell(game.pb.phantasm)"></component>
          </td>
        </tr>
      </tbody>
    </table>
    <PageBackButton></PageBackButton>
  </div>
</template>

<style scoped>
.meet-conditions {
  color: yellow;
}

.na {
  background-color: black;
}

.nc {
  background-color: red;
}

.ncc {
  background-color: rgb(236, 165, 10);
}

.nb {
	background-color: green;
}

.nm {
  background-color: rgb(245, 23, 218);
}

.nmnb {
	background-color: purple;
}
</style>

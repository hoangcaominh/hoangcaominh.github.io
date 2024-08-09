import th08Spells from "./th08/spells"

export default {
  messages: {
    about: {
      body1: `
        This website is called Kosuzu, a replay summary analysis online service.
        And Kosuzu is a cute character from {touhou_project}.
      `,
      body2: `Supported games: {supported_games}`,
      wiki_url: "https://en.wikipedia.org/wiki/Touhou_Project",
      touhou_project: "Touhou Project"
    },
    table: {
      labels: {
        game: "Game",
        difficulty: "Difficulty",
        shot: "Shottype",
        route: "Route",
        score: "Score",
        date: "Date",
        name: "Name",
        slowdown: "Slowdown",
        type: "Replay type",
        spell_card: "Spell card",
        stages: "Stages",
        back: "Back",
        stage_number: ({ named, linked }: any) => {
          if (named("stage") === -1) return "Start"
          return `Stage ${linked(
            `table.values.${named("game") ? `${named("game")}.stage` : "stage"}[${named("stage")}]`
          )}`
        }
      },
      values: {
        th06: {
          title: "The Embodiment of Scarlet Devil",
          shot: ["ReimuA", "ReimuB", "MarisaA", "MarisaB"]
        },
        th07: {
          title: "Perfect Cherry Blossom",
          shot: ["ReimuA", "ReimuB", "MarisaA", "MarisaB", "SakuyaA", "SakuyaB"]
        },
        th08: {
          title: "Imperishable Night",
          shot: [
            "Border Team",
            "Magic Team",
            "Scarlet Team",
            "Ghost Team",
            "Solo Reimu",
            "Solo Yukari",
            "Solo Marisa",
            "Solo Alice",
            "Solo Sakuya",
            "Solo Remilia",
            "Solo Youmu",
            "Solo Yuyuko"
          ],
          spell_card: th08Spells,
          stage: ["1", "2", "3", "4A", "4B", "5", "6A", "6B", "Ex"]
        },
        th09: {
          title: "Phantasmagoria of Flower View",
          shot: [
            "Reimu",
            "Marisa",
            "Sakuya",
            "Youmu",
            "Reisen",
            "Cirno",
            "Lyrica",
            "Mystia",
            "Tewi",
            "Yuuka",
            "Aya",
            "Medicine",
            "Komachi",
            "Eiki",
            "Merlin",
            "Lunasa"
          ],
          stage: ["1", "2", "3", "4", "5", "6", "7", "8", "9"]
        },
        th10: {
          title: "Mountain of Faith",
          shot: ["Reimu", "Marisa"],
          subshot: ["A", "B", "C"]
        },
        th11: {
          title: "Subterranean Animism",
          shot: ["Reimu", "Marisa"],
          subshot: ["A", "B", "C"]
        },
        th12: {
          title: "Undefined Fantastic Object",
          shot: ["Reimu", "Marisa", "Sanae"],
          subshot: ["A", "B"]
        },
        th128: {
          title: "Great Fairy Wars",
          route: ["A1", "A2", "B1", "B2", "C1", "C2", "Ex"],
          stage: [
            "A1-1",
            "A1-2",
            "A1-3",
            "A2-2",
            "A2-3",
            "B1-1",
            "B1-2",
            "B1-3",
            "B2-2",
            "B2-3",
            "C1-1",
            "C1-2",
            "C1-3",
            "C2-2",
            "C2-3",
            "Ex"
          ]
        },
        th13: {
          title: "Ten Desires",
          shot: ["Reimu", "Marisa", "Sanae", "Youmu"]
        },
        th14: {
          title: "Double Dealing Character",
          shot: ["Reimu", "Marisa", "Sakuya"],
          subshot: ["A", "B"]
        },
        th15: {
          title: "Legacy of Lunatic Kingdom",
          shot: ["Reimu", "Marisa", "Sanae", "Reisen"]
        },
        th16: {
          title: "Hidden Star in Four Seasons",
          shot: ["Reimu", "Cirno", "Aya", "Marisa"],
          season: ["Spring", "Summer", "Autumn", "Winter"]
        },
        th17: {
          title: "Wily Beast and Weakest Creature",
          shot: ["Reimu", "Marisa", "Youmu"],
          subshot: ["Wolf", "Otter", "Eagle"]
        },
        th18: {
          title: "Unconnected Marketeers",
          shot: ["Reimu", "Marisa", "Sakuya", "Sanae"]
        },
        difficulty: ["Easy", "Normal", "Hard", "Lunatic", "Extra", "Phantasm"],
        type: ["Full game", "Stage practice", "Spell practice", "Versus"],
        stage: ["1", "2", "3", "4", "5", "6", "Ex"]
      }
    }
  }
}

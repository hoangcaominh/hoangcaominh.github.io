import th08Spells from "./th08/spells"

export default {
  messages: {
    about: {
      body1: `
        This website is called Kosuzu, a replay summary analysis online service.
        And Kosuzu is a cute character from {touhou_project}.
      `,
      body2: `Supported games: {supported_games}`,
      wiki_url: "https://ja.wikipedia.org/wiki/%E6%9D%B1%E6%96%B9Project",
      touhou_project: "東方プロジェクト"
    },
    table: {
      labels: {
        game: "ゲーム",
        difficulty: "難易度",
        shot: "キャラ",
        route: "ルート",
        score: "スコア",
        date: "日付",
        name: "名前",
        slowdown: "処理落ち率",
        type: "リプレイタイプ",
        spell_card: "スペルカード",
        stages: "ステージ",
        back: "戻る",
        stage_number: ({ named, linked }: any) => {
          if (named("stage") === -1) return "開始"
          return `${linked(
            `table.values.${named("game") ? `${named("game")}.stage` : "stage"}[${named("stage")}]`
          )}面`
        }
      },
      values: {
        th06: {
          title: "東方紅魔郷",
          shot: ["霊夢A", "霊夢B", "魔理沙A", "魔理沙B"]
        },
        th07: {
          title: "東方妖々夢",
          shot: ["霊夢A", "霊夢B", "魔理沙A", "魔理沙B", "咲夜A", "咲夜B"]
        },
        th08: {
          title: "東方永夜抄",
          shot: [
            "霊夢＆紫",
            "魔理沙＆アリス",
            "咲夜＆レミリア",
            "妖夢＆幽々子",
            "霊夢",
            "紫",
            "魔理沙",
            "アリス",
            "咲夜",
            "レミリア",
            "妖夢",
            "幽々子"
          ],
          spell_card: th08Spells,
          stage: ["1", "2", "3", "4A", "4B", "5", "6A", "6B", "Ex"]
        },
        th09: {
          title: "東方花映塚",
          shot: [
            "霊夢",
            "魔理沙",
            "咲夜",
            "妖夢",
            "鈴仙",
            "チルノ",
            "リリカ",
            "ミスティア",
            "てゐ",
            "幽香",
            "文",
            "メディスン",
            "小町",
            "映姫",
            "メルラン",
            "ルナサ"
          ],
          stage: ["1", "2", "3", "4", "5", "6", "7", "8", "9"]
        },
        th10: {
          title: "東方風神録",
          shot: ["霊夢", "魔理沙"],
          subshot: ["A", "B", "C"]
        },
        th11: {
          title: "東方地霊殿",
          shot: ["霊夢", "魔理沙"],
          subshot: ["A", "B", "C"]
        },
        th12: {
          title: "東方星蓮船",
          shot: ["霊夢", "魔理沙", "早苗"],
          subshot: ["A", "B"]
        },
        th128: {
          title: "妖精大戦争",
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
          title: "東方神霊廟",
          shot: ["霊夢", "魔理沙", "早苗", "妖夢"]
        },
        th14: {
          title: "東方輝針城",
          shot: ["霊夢", "魔理沙", "咲夜"],
          subshot: ["A", "B"]
        },
        th15: {
          title: "東方紺珠伝",
          shot: ["霊夢", "魔理沙", "早苗", "鈴仙"]
        },
        th16: {
          title: "東方天空璋",
          shot: ["霊夢", "チルノ", "文", "魔理沙"],
          season: ["春", "夏", "秋", "冬"]
        },
        th17: {
          title: "東方鬼形獣",
          shot: ["霊夢", "魔理沙", "妖夢"],
          subshot: ["W", "O", "E"]
        },
        th18: {
          title: "東方虹龍洞",
          shot: ["霊夢", "魔理沙", "咲夜", "早苗"]
        },
        difficulty: ["Easy", "Normal", "Hard", "Lunatic", "Extra", "Phantasm"],
        type: ["Full game", "Stage practice", "Spell practice", "Versus"],
        stage: ["1", "2", "3", "4", "5", "6", "Ex"]
      }
    }
  }
}

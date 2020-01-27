type TWeek = {
  name: string
  breakfast: string
  dinner: string
  color: { info: true } | { danger: true } | { primary: true } | { success: true } | { warning: true }
}

export const weekEnum: TWeek[] = [
  {
    name: '月',
    breakfast: 'さつまあげ',
    dinner: 'ハンバーグ',
    color: { info: true }
  },
  {
    name: '火',
    breakfast: '鶏の塩焼き',
    dinner: '生姜焼き',
    color: { danger: true }
  },
  {
    name: '水',
    breakfast: '白身フライ',
    dinner: 'チキングリル',
    color: { primary: true }
  },
  {
    name: '木',
    breakfast: 'オムレツ',
    dinner: 'ちくわの煮物',
    color: { success: true }
  },
  {
    name: '金',
    breakfast: 'ミニ天津',
    dinner: '魚の煮付け',
    color: { warning: true }
  },
  {
    name: '土',
    breakfast: 'サバの南蛮漬け',
    dinner: 'ポークカレー',
    color: { info: true }
  }
]

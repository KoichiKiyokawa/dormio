type EachDayOrder = { breakfast: boolean; dinner: boolean }

declare type TMealOrder = [
  EachDayOrder, // 月曜日
  EachDayOrder, // 火曜日
  EachDayOrder, // 水曜日
  EachDayOrder, // 木曜日
  EachDayOrder, // 金曜日
  EachDayOrder // 土曜日
]

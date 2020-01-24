type EachDayOrder = { breakfast: boolean; dinner: boolean }

declare interface IMealOrder {
  monday: EachDayOrder
  tuesday: EachDayOrder
  wednesday: EachDayOrder
  thursday: EachDayOrder
  friday: EachDayOrder
  saturday: EachDayOrder
}

type EachDayOrder = { breakfast: boolean; dinner: boolean }

export interface IMealOrder {
  roomNumber: number
  name: string
  order: {
    monday: EachDayOrder
    tuesday: EachDayOrder
    wednesday: EachDayOrder
    thursday: EachDayOrder
    friday: EachDayOrder
    saturday: EachDayOrder
  }
}

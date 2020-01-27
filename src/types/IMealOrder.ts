declare interface IMealOrder {
  roomNumber: number
  name: string
  order: { breakfast: boolean; dinner: boolean }
}

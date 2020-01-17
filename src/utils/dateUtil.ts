export const parseToMonthWithDay = (date: Date) => {
  const month = date.getMonth() + 1
  const day = date.getDay()

  return `${month}/${day}`
}

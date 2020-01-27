export const weekNames = [
  'monday',
  'tuesday',
  'wednesday',
  'thursday',
  'friday',
  'saturday'
]

export const parseToMonthWithDay = (date: Date) => {
  const month = date.getMonth() + 1
  const day = date.getDate()

  return `${month}/${day}`
}

export const getWeekName = (date: Date) => {
  const weekIndex = date.getDay()
  return weekNames[weekIndex - 1]
}

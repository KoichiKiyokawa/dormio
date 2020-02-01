type Week = 'monday' | 'tuesday' | 'wednesday' | 'thursday' | 'friday' | 'saturday' | 'sunday'

export const mealWeekNames: Week[] = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday']
const weekNames: Week[] = ['sunday', ...mealWeekNames]

export const parseToMonthWithDay = (date: Date) => {
  const month = date.getMonth() + 1
  const day = date.getDate()

  return `${month}/${day}`
}

export const getWeekName = (date: Date): Week => {
  const weekIndex = date.getDay()

  return weekNames[weekIndex]
}

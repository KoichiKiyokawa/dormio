type Week = 'monday' | 'tuesday' | 'wednesday' | 'thursday' | 'friday' | 'saturday' | 'sunday'

export const mealWeekNames: Week[] = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday']
const weekNames: Week[] = ['sunday', ...mealWeekNames]

/**
 * 与えられたdateをMM月DD日の形式に変換する
 * @param {Date} date 変換したい日付
 * @return {string} YY月DD日
 */
export const parseToMonthWithDay = (date: Date): string => {
  const month = date.getMonth() + 1
  const day = date.getDate()

  return `${month}/${day}`
}

/**
 * 与えられたdateの曜日を返す
 * @param {Date} date 曜日を知りたい日付
 * @return {Week} 曜日
 */
export const getWeekName = (date: Date): Week => {
  const weekIndex = date.getDay()

  return weekNames[weekIndex]
}

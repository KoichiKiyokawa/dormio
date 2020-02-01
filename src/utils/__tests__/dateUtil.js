import { parseToMonthWithDay, getWeekName } from '../dateUtil'

describe('test of date util', () => {
  test('parse 2000/1/1 to 1/1', () => {
    expect(parseToMonthWithDay(new Date(2000, 1 - 1 ,1))).toEqual('1/1')
  })

  test('parse 2000/10/10 to 10/10', () => {
    expect(parseToMonthWithDay(new Date(2000, 10 - 1, 10))).toEqual('10/10')
  })

  test('2000/1/1 is saturday', () => {
    expect(getWeekName(new Date(2000, 1 - 1, 1))).toEqual('saturday')
  })

  test('2000/1/2 is sunday', () => {
    expect(getWeekName(new Date(2000, 1 - 1, 2))).toEqual('sunday')
  })

  test('2000/1/3 is monday', () => {
    expect(getWeekName(new Date(2000, 1 - 1, 3))).toEqual('monday')
  })

  test('2000/1/4 is tuesday', () => {
    expect(getWeekName(new Date(2000, 1 - 1, 4))).toEqual('tuesday')
  })

  test('2000/1/5 is wednesday', () => {
    expect(getWeekName(new Date(2000, 1 - 1, 5))).toEqual('wednesday')
  })

  test('2000/1/6 is thursday', () => {
    expect(getWeekName(new Date(2000, 1 - 1, 6))).toEqual('thursday')
  })

  test('2000/1/7 is friday', () => {
    expect(getWeekName(new Date(2000, 1 - 1, 7))).toEqual('friday')
  })
})

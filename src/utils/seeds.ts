import { db } from '../plugins/firebase'

const notices = [
  { title: '自転車が盗まれました', body: '鍵の閉め忘れにはくれぐれも気をつけてください。', date: new Date() },
  {
    title: '近隣住民から苦情がきました',
    body: '夜中に寮生が騒いいるせいで眠れないと苦情が来ました。夜中に騒ぐのはやめてください。',
    date: new Date()
  }
]
notices.forEach(notice => {
  db.collection('notices').add({ ...notice })
})

const defaultEachDayOrder = () => ({ breakfast: true, dinner: true })

const defaultWeeklyOrder = () => ({
  monday: defaultEachDayOrder(),
  tuesday: defaultEachDayOrder(),
  wednesday: defaultEachDayOrder(),
  thursday: defaultEachDayOrder(),
  friday: defaultEachDayOrder(),
  saturday: defaultEachDayOrder()
})

const order = [
  { roomNumber: 0, name: '管理人', order: defaultWeeklyOrder() },
  { roomNumber: 101, name: '佐藤', order: defaultWeeklyOrder() },
  { roomNumber: 102, name: '佐藤', order: defaultWeeklyOrder() },
  { roomNumber: 103, name: '佐藤', order: defaultWeeklyOrder() },
  { roomNumber: 104, name: '佐藤', order: defaultWeeklyOrder() },
  { roomNumber: 105, name: '佐藤', order: defaultWeeklyOrder() },
  { roomNumber: 201, name: '鈴木', order: defaultWeeklyOrder() },
  { roomNumber: 202, name: '鈴木', order: defaultWeeklyOrder() },
  { roomNumber: 203, name: '鈴木', order: defaultWeeklyOrder() },
  { roomNumber: 204, name: '鈴木', order: defaultWeeklyOrder() },
  { roomNumber: 205, name: '鈴木', order: defaultWeeklyOrder() },
  { roomNumber: 301, name: '清川', order: defaultWeeklyOrder() },
  { roomNumber: 302, name: '田中', order: defaultWeeklyOrder() },
  { roomNumber: 303, name: '田中', order: defaultWeeklyOrder() },
  { roomNumber: 304, name: '田中', order: defaultWeeklyOrder() },
  { roomNumber: 305, name: '田中', order: defaultWeeklyOrder() }
]

db.collection('mealOrders')
  .doc('trusty')
  .set({ weeklyOrder: order })

db.collection('managerLocation')
  .doc('trusty')
  .set({ inManagerRoom: true })

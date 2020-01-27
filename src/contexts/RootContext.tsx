import React from 'react'
import { IMessage } from 'react-native-gifted-chat'

import { db } from '../plugins/firebase'

interface IContext {
  user: IUser
  setUser: (arg: IUser) => void

  messages: IMessage[]
  setMessages: (arg: IMessage[]) => void

  notices: INotice[]
  setNotices: (arg: INotice[]) => void

  mealOrders: IMealOrder[]
  setMealOrders: (arg: IMealOrder[]) => void
}

export const RootContext = React.createContext<Partial<IContext>>(null)

export const RootProvider: React.FC = ({ children }) => {
  const [user, setUser] = React.useState<IUser>({
    roomNumber: 0,
    name: '管理人',
    id: 0,
    isManager: true
  })

  // チャットのメッセージ
  const [messages, setMessages] = React.useState<IMessage[]>([])

  // お知らせ
  const [notices, setNotices] = React.useState<INotice[]>([])

  // 食事の申込み一覧
  const [mealOrders, setMealOrders] = React.useState<IMealOrder[]>([
    { roomNumber: 101, name: '佐藤', order: { breakfast: true, dinner: true } },
    { roomNumber: 102, name: '佐藤', order: { breakfast: true, dinner: true } },
    { roomNumber: 103, name: '佐藤', order: { breakfast: true, dinner: true } },
    { roomNumber: 104, name: '佐藤', order: { breakfast: true, dinner: true } },
    { roomNumber: 105, name: '佐藤', order: { breakfast: true, dinner: true } },
    { roomNumber: 201, name: '鈴木', order: { breakfast: true, dinner: true } },
    { roomNumber: 202, name: '鈴木', order: { breakfast: true, dinner: true } },
    { roomNumber: 203, name: '鈴木', order: { breakfast: true, dinner: true } },
    { roomNumber: 204, name: '鈴木', order: { breakfast: true, dinner: true } },
    { roomNumber: 205, name: '鈴木', order: { breakfast: true, dinner: true } },
    { roomNumber: 301, name: '清川', order: { breakfast: true, dinner: true } },
    { roomNumber: 302, name: '田中', order: { breakfast: true, dinner: true } },
    { roomNumber: 303, name: '田中', order: { breakfast: true, dinner: true } },
    { roomNumber: 304, name: '田中', order: { breakfast: true, dinner: true } },
    { roomNumber: 305, name: '田中', order: { breakfast: true, dinner: true } }
  ])

  // メッセージの取得
  React.useEffect(() => {
    const unsubscribe = db
      .collection('messages')
      .orderBy('createdAt', 'desc')
      .onSnapshot(querySnapshot => {
        setMessages(
          querySnapshot.docs.map(doc => {
            const messageData = doc.data()
            return {
              ...messageData,
              _id: doc.id,
              createdAt: messageData.createdAt.toDate()
            } as IMessage
          })
        )
      })

    return () => unsubscribe()
  }, [])

  // 食事の申込み
  React.useEffect(() => {
    const unsubscribe = db
      .collection('mealOrders')
      .onSnapshot(querySnapshot => {
        // setMealOrder
      })
  })

  return (
    <RootContext.Provider
      value={{
        user,
        setUser,
        messages,
        setMessages,
        notices,
        setNotices,
        mealOrders,
        setMealOrders
      }}
    >
      {children}
    </RootContext.Provider>
  )
}

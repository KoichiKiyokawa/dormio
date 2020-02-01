import React from 'react'
import { IMessage } from 'react-native-gifted-chat'

import { db } from '../plugins/firebase'

interface IContext {
  user: IUser
  setUser: (arg: IUser) => void

  inManagerRoom: boolean
  setInManagerRoom: (arg: boolean) => void

  notices: INotice[]
  setNotices: (arg: INotice[]) => void

  mealOrders: IMealOrder[]
  setMealOrders: (arg: IMealOrder[]) => void
}

export const RootContext = React.createContext<Partial<IContext>>({} as IContext)

export const RootProvider: React.FC = ({ children }) => {
  const [user, setUser] = React.useState<IUser>({
    roomNumber: 0,
    name: '管理人',
    id: 0,
    isManager: true
  })

  const [inManagerRoom, setInManagerRoom] = React.useState(true)

  // チャットのメッセージ
  const [messages, setMessages] = React.useState<IMessage[]>([])

  // お知らせ
  const [notices, setNotices] = React.useState<INotice[]>([])

  // 食事の申込み一覧
  const [mealOrders, setMealOrders] = React.useState<IMealOrder[]>([])

  // 管理人の居場所
  React.useEffect(() => {
    const unsubscribe = db
      .collection('managerLocation')
      .doc('trusty')
      .onSnapshot(documentSnapshot => {
        setInManagerRoom(documentSnapshot.data().inManagerRoom)
      })

    return () => unsubscribe()
  }, [])

  // 食事の申込み
  React.useEffect(() => {
    const unsubscribe = db
      .collection('mealOrders')
      .doc('trusty')
      .onSnapshot(documentSnapshot => {
        setMealOrders(documentSnapshot.data().weeklyOrder as IMealOrder[])
      })

    return () => unsubscribe()
  }, [])

  return (
    <RootContext.Provider
      value={{
        user,
        setUser,
        inManagerRoom,
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

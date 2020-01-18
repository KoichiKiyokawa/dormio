import React from 'react'
import { IMessage } from 'react-native-gifted-chat'

import { db } from '../plugins/firebase'

interface INotice {
  text: string
  date: Date
}

interface InitialState {
  messages: IMessage[]
  setMessages: (arg: IMessage[]) => void

  notices: INotice[]
  setNotices: (arg: INotice[]) => void
}

export const RootContext = React.createContext<Partial<InitialState>>(null)

export const RootProvider: React.FC = ({ children }) => {
  // チャットのメッセージ
  const [messages, setMessages] = React.useState<IMessage[]>([])

  // お知らせ
  const [notices, setNotices] = React.useState<INotice[]>([])

  React.useEffect(() => {
    const unsubscribe = db.collection('messages').onSnapshot(querySnapshot => {
      setMessages(
        querySnapshot.docs.map(doc => {
          const messageData = doc.data()
          return { ...messageData, createdAt: messageData.createdAt.toDate() } as IMessage
        })
      )
    })

    return () => unsubscribe()
  })

  return (
    <RootContext.Provider
      value={{ messages, setMessages, notices, setNotices }}
    >
      {children}
    </RootContext.Provider>
  )
}

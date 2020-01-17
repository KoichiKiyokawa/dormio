import React from 'react'
import { IMessage } from 'react-native-gifted-chat'

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

  return (
    <RootContext.Provider
      value={{ messages, setMessages, notices, setNotices }}
    >
      {children}
    </RootContext.Provider>
  )
}

import React from 'react'
import { IMessage } from 'react-native-gifted-chat'

interface InitialState {
  messages: IMessage[]
  setMessages: (arg: IMessage[]) => void
}

const initialState = {
  messages: []
}

export const RootContext = React.createContext<Partial<InitialState>>(null)

export const RootProvider: React.FC = ({ children }) => {
  // チャットのメッセージ
  const [messages, setMessages] = React.useState<IMessage[]>([])

  return (
    <RootContext.Provider value={{ messages, setMessages }}>
      {children}
    </RootContext.Provider>
  )
}

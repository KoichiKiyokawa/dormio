import React, { useState } from 'react'
import { GiftedChat, IMessage } from 'react-native-gifted-chat'

export default () => {
  const [messages, setMessages] = useState<IMessage[]>([])
  const currentUser = {
    _id: 1,
    name: '管理人'
  }

  const onSend = msgs => {
    setMessages(prev => GiftedChat.append(prev, msgs))
  }

  return <GiftedChat messages={messages} onSend={onSend} user={currentUser} />
}

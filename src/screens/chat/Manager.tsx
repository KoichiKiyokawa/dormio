import React from 'react'
import { GiftedChat, IMessage } from 'react-native-gifted-chat'

import { RootContext } from '../../contexts/RootContext'

export default () => {
  const { messages, setMessages } = React.useContext(RootContext)
  const currentUser = {
    _id: 1,
    name: '管理人'
  }

  const onSend = msgs => {
    setMessages(GiftedChat.append(messages, msgs))
  }

  return <GiftedChat messages={messages} onSend={onSend} user={currentUser} />
}

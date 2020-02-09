import React from 'react'
import { GiftedChat, IMessage } from 'react-native-gifted-chat'

// TODO: impl later
export default () => {
  const messages: IMessage[] = []
  const currentUser = {
    _id: 1,
    name: '管理人'
  }

  const onSend = (messages: IMessage[]) => {
    console.log(messages)
  }

  return <GiftedChat messages={messages} onSend={onSend} user={currentUser} />
}

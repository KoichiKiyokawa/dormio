import React from 'react'
import { GiftedChat, IMessage } from 'react-native-gifted-chat'
import Nav from '../../components/Nav'

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

  return (
    <>
      <Nav title="住人みんな" showBackButton />
      <GiftedChat messages={messages} onSend={onSend} user={currentUser} />
    </>
  )
}

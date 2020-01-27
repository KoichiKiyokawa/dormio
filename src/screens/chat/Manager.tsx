import React from 'react'
import { GiftedChat, IMessage } from 'react-native-gifted-chat'

import { RootContext } from '../../contexts/RootContext'
import { db } from '../../plugins/firebase'

export default () => {
  const { user, messages } = React.useContext(RootContext)

  const currentUser = {
    _id: user.id,
    name: user.name
  }

  const onSend = msgs => {
    msgs.forEach(msg => {
      db.collection('messages').add({
        text: msg.text,
        createdAt: new Date(),
        user: {
          ...currentUser
        }
      })
    })
  }

  return <GiftedChat messages={messages} onSend={onSend} user={currentUser} />
}

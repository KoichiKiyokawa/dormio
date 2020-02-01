import React from 'react'
import { GiftedChat, IMessage } from 'react-native-gifted-chat'
import { useSelector } from 'react-redux'
import { useFirestore, useFirestoreConnect } from 'react-redux-firebase'

export default () => {
  const firestore = useFirestore()
  useFirestoreConnect(() => [
    {
      collection: 'messages',
      orderBy: ['createdAt', 'desc']
    }
  ])

  const rowMessages = useSelector(state => state.firestore.ordered.messages)
  // id => _id, timestamps => Dateに変換
  const messages = (rowMessages || []).map(({ id, createdAt, ...other }) => ({
    ...other,
    _id: id,
    createdAt: createdAt.toDate()
  }))

  const user = useSelector(state => state.user)

  const currentUser = {
    _id: user.id,
    name: user.name
  }

  const onSend = msgs => {
    msgs.forEach(msg => {
      firestore.collection('messages').add({
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

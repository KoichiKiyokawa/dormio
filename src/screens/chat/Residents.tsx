import React from 'react'
import { GiftedChat, IMessage } from 'react-native-gifted-chat'
import Nav from '../../components/Nav'
import { useFirestore } from 'react-redux-firebase'
import { useSelector } from 'react-redux'

import { getNameFromUser } from '../../utils/user'

export default () => {
  const firestore = useFirestore()

  const currentUser = useSelector(state => state.user)
  const rawMessages: RawMessage[] = useSelector(state => state.firestore.ordered.messages)
  const filteredMessages = rawMessages.filter(({ isSentToGroupChat }) => !!isSentToGroupChat)
  // id => _id, timestamps => Dateに変換
  const messages = (filteredMessages || []).map(({ id, createdAt, user, ...other }) => ({
    ...other,
    _id: id,
    createdAt: createdAt.toDate(),
    user: {
      _id: user.uid,
      name: user.name
    }
  }))

  const onSend = (msgs: IMessage[]) => {
    msgs.forEach(msg => {
      firestore.collection('messages').add({
        text: msg.text,
        createdAt: new Date(),
        isSentToGroupChat: true,
        user: {
          ...currentUser
        }
      })
    })
  }

  return (
    <>
      <Nav title="住民みんな" showBackButton />
      <GiftedChat
        messages={messages}
        onSend={onSend}
        user={{ _id: currentUser.uid, name: getNameFromUser(currentUser) }}
      />
    </>
  )
}

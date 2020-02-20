import React from 'react'
import { GiftedChat, IMessage } from 'react-native-gifted-chat'
import { useSelector } from 'react-redux'
import { useFirestore } from 'react-redux-firebase'

import Nav from '../../components/Nav'
import { useRoute, RouteProp } from '@react-navigation/core'
import { StackParams } from '../../navigations/StackNavigator'
import { getNameFromUser } from '../../utils/user'

export default () => {
  const route = useRoute<RouteProp<StackParams, 'ManagerChat'>>()
  const { partnerUser } = route.params
  const firestore = useFirestore()

  const currentUser = useSelector(state => state.user)
  const rawMessages: RawMessage[] = useSelector(state => state.firestore.ordered.messages)
  const filteredMessages = rawMessages.filter(
    ({ isSentToGroupChat, user }) =>
      (!isSentToGroupChat && user.uid === partnerUser.uid) || user.uid === currentUser.uid
  )
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
        user: {
          ...currentUser
        }
      })
    })
  }

  return (
    <>
      <Nav title={getNameFromUser(partnerUser)} showBackButton />
      <GiftedChat
        messages={messages}
        onSend={onSend}
        user={{ _id: currentUser.uid, name: getNameFromUser(currentUser) }}
      />
    </>
  )
}

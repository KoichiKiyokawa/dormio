import React from 'react'
import { GiftedChat, IMessage } from 'react-native-gifted-chat'
import { useSelector } from 'react-redux'
import { useFirestore } from 'react-redux-firebase'

import { RawMessage } from '../../../types/RawMessage'
import Nav from '../../components/Nav'
import { useRoute, RouteProp } from '@react-navigation/core'
import { StackParams } from '../../navigations/StackNavigator'

export default () => {
  const route = useRoute<RouteProp<StackParams, 'ManagerChat'>>()
  const firestore = useFirestore()

  const rawMessages: RawMessage[] = useSelector(state => state.firestore.ordered.messages)
  // id => _id, timestamps => Dateに変換
  const messages = (rawMessages || []).map(({ id, createdAt, ...other }) => ({
    ...other,
    _id: id,
    createdAt: createdAt.toDate()
  }))

  const user = useSelector(state => state.user)

  const currentUser = {
    _id: user.uid,
    name: user.name
  }

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
      <Nav title={route.params.partnerName} showBackButton />
      <GiftedChat messages={messages} onSend={onSend} user={currentUser} />
    </>
  )
}

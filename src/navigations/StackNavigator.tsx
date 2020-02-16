import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import TabNavigator from './TabNavigator'
import NoticeDetail from '../screens/NoticeDetail'
import Manager from '../screens/chat/Manager'
import Residents from '../screens/chat/Residents'
import Setting from '../screens/Setting'
import SignIn from '../screens/SignIn'
import SignUp from '../screens/SignUp'
import PasswordReset from '../screens/PasswordReset'

export type StackParams = {
  SignIn: undefined
  SignUp: undefined
  PasswordReset: undefined
  Main: undefined
  NoticeDetail: { notice: { title: string; body: string; date: Date } }
  ManagerChat: { partnerName: string } // 会話相手
  ResidentsChat: undefined
  Setting: undefined
}

const Stack = createStackNavigator<StackParams>()

export default () => (
  <Stack.Navigator headerMode="none">
    <Stack.Screen name="SignIn" component={SignIn} />
    <Stack.Screen name="SignUp" component={SignUp} />
    <Stack.Screen name="PasswordReset" component={PasswordReset} />
    <Stack.Screen name="Main" component={TabNavigator} />
    <Stack.Screen name="NoticeDetail" component={NoticeDetail} />
    <Stack.Screen name="ManagerChat" component={Manager} />
    <Stack.Screen name="ResidentsChat" component={Residents} />
    <Stack.Screen name="Setting" component={Setting} />
  </Stack.Navigator>
)

import React, { useState, useEffect } from 'react'
import { AppLoading } from 'expo'
import * as Font from 'expo-font'
import { Container } from 'native-base'
import { createAppContainer } from 'react-navigation'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { FontAwesome5 } from '@expo/vector-icons'

import Home from '../screens/Home'
import Meal from '../screens/Meal'
import Chat from '../screens/Chat'

const AppNavigator = createBottomTabNavigator({
  Home: {
    screen: Home,
    navigationOptions: () => ({
      tabBarIcon: ({ tintColor }) => (
        <FontAwesome5 name="home" color={tintColor} size={24} />
      )
    })
  },
  Meal: {
    screen: Meal,
    navigationOptions: () => ({
      tabBarIcon: ({ tintColor }) => (
        <FontAwesome5 name="utensils" color={tintColor} size={24} />
      )
    })
  },
  Chat: {
    screen: Chat,
    navigationOptions: () => ({
      tabBarIcon: ({ tintColor }) => (
        <FontAwesome5 name="comments" color={tintColor} size={24} />
      )
    })
  }
})

const AppContainer = createAppContainer(AppNavigator)

export default () => {
  const [isReady, setIsReady] = useState(false)

  useEffect(() => {
    Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf')
    }).then(() => {
      setIsReady(true)
    })
  }, [])

  if (isReady) {
    return (
      <Container>
        <AppContainer />
      </Container>
    )
  } else {
    return <AppLoading />
  }
}

import React, { useState, useEffect } from 'react'
import { AppLoading } from 'expo'
import * as Font from 'expo-font'
import { Container } from 'native-base'
import { createAppContainer } from 'react-navigation'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { Ionicons } from '@expo/vector-icons'

import Home from '../screens/Home'
import Meal from '../screens/Meal'

const AppNavigator = createBottomTabNavigator({
  Home: {
    screen: Home,
    navigationOptions: () => ({
      tabBarIcon: ({ tintColor }) => (
        <Ionicons name="md-home" color={tintColor} size={32} />
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
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      ...Ionicons.font
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

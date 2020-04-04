import React from 'react'
import { Icon } from 'native-base'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Home from '../screens/Home'
import Meal from '../screens/Meal'
import Chat from '../screens/Chat'

const Tab = createBottomTabNavigator()

export default () => (
  <Tab.Navigator>
    <Tab.Screen
      name="Home"
      component={Home}
      options={{ tabBarIcon: ({ color }) => <Icon type="FontAwesome5" name="home" color={color} style={{fontSize: 24}} /> }}
    />
    <Tab.Screen
      name="Meal"
      component={Meal}
      options={{ tabBarIcon: ({ color }) => <Icon type="FontAwesome5" name="utensils" color={color} style={{fontSize: 24}} /> }}
    />
    <Tab.Screen
      name="Chat"
      component={Chat}
      options={{ tabBarIcon: ({ color }) => <Icon type="FontAwesome5" name="comments" color={color} style={{fontSize: 24}} /> }}
    />
  </Tab.Navigator>
)

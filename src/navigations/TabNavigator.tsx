import React from 'react'
import { FontAwesome5 } from '@expo/vector-icons'
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
      options={{ tabBarIcon: ({ color }) => <FontAwesome5 name="home" color={color} size={24} /> }}
    />
    <Tab.Screen
      name="Meal"
      component={Meal}
      options={{ tabBarIcon: ({ color }) => <FontAwesome5 name="utensils" color={color} size={24} /> }}
    />
    <Tab.Screen
      name="Chat"
      component={Chat}
      options={{ tabBarIcon: ({ color }) => <FontAwesome5 name="comments" color={color} size={24} /> }}
    />
  </Tab.Navigator>
)

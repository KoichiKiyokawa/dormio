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
      options={{ tabBarIcon: ({ color }) => <Icon type="FontAwesome" name="home" color={color} size={24} /> }}
    />
    <Tab.Screen
      name="Meal"
      component={Meal}
      options={{ tabBarIcon: ({ color }) => <Icon type="FontAwesome" name="utensils" color={color} size={24} /> }}
    />
    <Tab.Screen
      name="Chat"
      component={Chat}
      options={{ tabBarIcon: ({ color }) => <Icon type="FontAwesome" name="comments" color={color} size={24} /> }}
    />
  </Tab.Navigator>
)

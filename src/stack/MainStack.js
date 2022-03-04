import React from 'react'
import { Button } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
//import { HeaderBackButton } from '@react-navigation/stack'

import Loading from '../screens/Loading'
import Greeting from '../screens/Greeting'
import Home from '../screens/Home'
import Events from '../screens/Events'

const Stack = createNativeStackNavigator()

export default () => (
  <Stack.Navigator initialRouteName='Events'>
    <Stack.Screen
      options={{ headerShown: false }}
      name='Loading'
      component={Loading}
    />
    <Stack.Screen
      options={{ headerShown: false }}
      name='Greeting'
      component={Greeting}
    />
    <Stack.Screen
      options={{ headerShown: false }}
      name='Home'
      component={Home}
    />
    <Stack.Screen
      options={{
        title: '',
        headerBackVisible: false,
        headerTintColor: 'white',
        headerTransparent: true,
      }}
      name='Events'
      component={Events}
    />
  </Stack.Navigator>
)

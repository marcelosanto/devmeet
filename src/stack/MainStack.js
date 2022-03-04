import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Loading from '../screens/Loading'
import Greeting from '../screens/Greeting'
import Home from '../screens/Home'

const Stack = createNativeStackNavigator()

export default () => (
  <Stack.Navigator initialRouteName='Home'>
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
  </Stack.Navigator>
)

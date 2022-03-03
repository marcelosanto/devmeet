import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Loading from '../screens/Loading'
import Greeting from '../screens/Greeting'

const Stack = createNativeStackNavigator()

export default () => (
  <Stack.Navigator initialRouteName='Loading'>
    <Stack.Screen
      options={{ headerShown: false }}
      name='Loading'
      component={Loading}
    />
    <Stack.Screen name='Greeting' component={Greeting} />
  </Stack.Navigator>
)

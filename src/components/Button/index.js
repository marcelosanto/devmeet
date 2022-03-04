import React from 'react'
import { TouchableOpacity, Text, View } from 'react-native'
import { SvgXml } from 'react-native-svg'
import {
  useFonts,
  Epilogue_400Regular,
  Epilogue_600Regular,
  Epilogue_500Regular,
} from '@expo-google-fonts/epilogue'
import AppLoading from 'expo-app-loading'

import { styles } from './styles'

export default ({ icon, color, onPress, backColor }) => {
  return (
    <TouchableOpacity
      onPress={() => {}}
      style={[styles.backButton, { backgroundColor: 'white' }]}
    >
      <SvgXml width='40' height='40' xml={icon} />
      <Text
        style={{
          fontFamily: 'Epilogue_400Regular',
          fontSize: 15,
          color: '#282828',
        }}
      >
        Desenvolvimento Front-end
      </Text>
      <Text
        style={{
          fontFamily: 'Epilogue_400Regular',
          color: 'gray',
          fontSize: 11,
        }}
      >
        <Text
          style={{
            fontFamily: 'Epilogue_600Regular',
            color: '#FF5100',
            fontWeight: 'bold',
          }}
        >
          5 eventos
        </Text>{' '}
        encontrados
      </Text>
    </TouchableOpacity>
  )
}

import React from 'react'
import { TouchableOpacity, Text, View } from 'react-native'
import { SvgXml } from 'react-native-svg'

import { styles } from './styles'

export default ({
  icon,
  bColor,
  fColor,
  onPress,
  backColor,
  title,
  numberEvents,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.backButton, { backgroundColor: bColor }]}
    >
      <SvgXml width='40' height='40' xml={icon} />
      <Text
        style={{
          fontFamily: 'Epilogue_400Regular',
          fontSize: 15,
          color: fColor ? 'white' : '#282828',
        }}
      >
        {title}
      </Text>
      <Text
        style={{
          fontFamily: 'Epilogue_400Regular',
          color: fColor ? 'white' : '#282828',
          fontSize: 11,
        }}
      >
        <Text
          style={{
            fontFamily: 'Epilogue_600SemiBold',
            color: fColor ? 'white' : '#FF5100',
            fontWeight: 'bold',
          }}
        >
          {numberEvents > 1
            ? numberEvents + ' eventos'
            : numberEvents + ' evento'}
        </Text>{' '}
        encontrados
      </Text>
    </TouchableOpacity>
  )
}

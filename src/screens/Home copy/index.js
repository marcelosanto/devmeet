import { useState } from 'react'
import { Text, View, ScrollView, TouchableOpacity } from 'react-native'
import { SvgXml } from 'react-native-svg'
import {
  useFonts,
  Epilogue_400Regular,
  Epilogue_600SemiBold,
} from '@expo-google-fonts/epilogue'
import AppLoading from 'expo-app-loading'

import { styles } from './styles'

import Button from '../../components/Button'
import { dados } from '../../utils/data'

import {
  serveless,
  arrowRight,
  laptop,
  hierarchy,
  bezier,
  terminal,
  blocks,
  iphone,
} from '../../../assets/icons'

export default () => {
  const [test, setTest] = useState(false)
  const [carai, setCarai] = useState(false)

  let [fontsLoaded] = useFonts({
    Epilogue_400Regular,
    Epilogue_600SemiBold,
  })

  if (!fontsLoaded) {
    return <AppLoading />
  }

  const data = [0, 1, 2, 3, 4, 5, 6, 7]

  const findIcon = (iconName) => {
    if (iconName == 'serveless') return serveless

    if (iconName == 'laptop') return laptop

    if (iconName == 'hierarchy') return hierarchy

    if (iconName == 'bezier') return bezier

    if (iconName == 'terminal') return terminal

    if (iconName == 'blocks') return blocks

    if (iconName == 'iphone') return iphone
  }

  const handleChangeState = (item) => {
    setTest((test) => !test)
    setCarai((carai) => !carai)
    console.log(item)
  }

  return (
    <View style={styles.container}>
      <View style={{ marginLeft: 30, marginRight: 30, marginTop: 80 }}>
        <Text
          style={{
            width: 300,
            fontSize: 32,
            fontFamily: 'Epilogue_400Regular',
            fontWeight: 'bold',
            lineHeight: 45,
            color: 'white',
          }}
        >
          Que tipo de evento você procura?
        </Text>

        <Text
          style={{
            width: 300,
            fontSize: 20,
            fontFamily: 'Epilogue_400Regular',
            lineHeight: 32,
            color: 'white',
            marginTop: 13,
          }}
        >
          Selecione a categoria que mais te agrada!
        </Text>
      </View>

      <ScrollView
        contentContainerStyle={{
          flexDirection: 'row',
          flexWrap: 'wrap',
        }}
        style={{
          marginLeft: 30,
          marginRight: 30,
          marginTop: 10,
        }}
        showsVerticalScrollIndicator={false}
      >
        {data.map((item, index) => (
          <View key={index} style={{ width: '50%', flexDirection: 'row' }}>
            <Button
              onPress={() => handleChangeState(item)}
              icon={findIcon(dados[item].icon)}
              title={dados[item].title}
              backColor={true}
              pColor={carai}
            />
          </View>
        ))}
      </ScrollView>
      {test && (
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'flex-end',
            alignItems: 'center',
          }}
        >
          <Text
            style={{
              fontSize: 16,
              fontFamily: 'Epilogue_600SemiBold',
              lineHeight: 32,
              color: 'white',
              marginRight: 10,
              textAlign: 'right',
            }}
          >
            Próximo
          </Text>

          <TouchableOpacity
            style={{
              backgroundColor: '#04D361',
              width: 40,
              height: 40,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 11,
              color: '#ffffff',
              marginRight: 32,
              marginBottom: 40,
              marginTop: 36,
            }}
          >
            <SvgXml width='15' height='15' xml={arrowRight} />
          </TouchableOpacity>
        </View>
      )}
    </View>
  )
}
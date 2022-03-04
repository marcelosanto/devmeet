import { Text, View, ScrollView, TouchableOpacity } from 'react-native'
import { SvgXml } from 'react-native-svg'
import {
  useFonts,
  Epilogue_400Regular,
  Epilogue_600Regular,
} from '@expo-google-fonts/epilogue'
import AppLoading from 'expo-app-loading'

import { styles } from './styles'

import Button from '../../components/Button'
import Data from '../../utils/data'

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
  let [fontsLoaded] = useFonts({
    Epilogue_400Regular,
    Epilogue_600Regular,
  })

  if (!fontsLoaded) {
    return <AppLoading />
  }

  const data = [1, 2, 3, 4, 5, 6, 7, 8]

  return (
    <View style={styles.container}>
      <View style={{ marginLeft: 30, marginRight: 30, marginTop: 110 }}>
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
      console.log(Data[0].title)
      <ScrollView
        contentContainerStyle={{
          flexDirection: 'row',
          flexWrap: 'wrap',
        }}
        style={{
          marginLeft: 30,
          marginRight: 30,
          marginTop: 10,
          backgroundColor: 'green',
        }}
        showsVerticalScrollIndicator={false}
      >
        {data.map((item, index) => (
          <View key={index} style={{ width: '50%', flexDirection: 'row' }}>
            <Button
              icon={terminal}
              backColor={true}
              color={true ? '#FF5100' : 'white'}
            />
          </View>
        ))}
      </ScrollView>
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
            fontFamily: 'Epilogue_600Regular',
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
          }}
        >
          <SvgXml width='20' height='20' xml={arrowRight} />
        </TouchableOpacity>
      </View>
    </View>
  )
}

import React from 'react'
import {
  Text,
  View,
  Image,
  Button,
  TouchableOpacity,
  ScrollView,
} from 'react-native'

import {
  useFonts,
  Rajdhani_500Medium,
  Rajdhani_700Bold,
} from '@expo-google-fonts/rajdhani'

import {
  Epilogue_800ExtraBold,
  Epilogue_400Regular,
  Epilogue_500Medium,
  Epilogue_700Bold,
} from '@expo-google-fonts/epilogue'

import AppLoading from 'expo-app-loading'
import { SvgXml } from 'react-native-svg'

import { arrowLeft } from '../../../assets/icons'

import { styles } from './styles'

import CardItemEvent from '../../components/CardItemEvent'

export default ({ navigation }) => {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{ flexDirection: 'row' }}
        >
          <SvgXml width='20' height='20' xml={arrowLeft} stroke='white' />
          <Text style={{ color: 'white', marginLeft: 10 }}>Voltar</Text>
        </TouchableOpacity>
      ),
    })
  }, [navigation])

  let [fontsLoaded] = useFonts({
    Rajdhani_500Medium,
    Rajdhani_700Bold,
    Epilogue_800ExtraBold,
    Epilogue_400Regular,
    Epilogue_500Medium,
    Epilogue_700Bold,
  })

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <View style={styles.container}>
      <Text
        style={{
          color: 'white',
          fontSize: 32,
          lineHeight: 40,
          marginTop: 50,
          width: 250,
          marginLeft: 30,
          fontWeight: 'bold',
        }}
      >
        Eventos Disponíveis
      </Text>
      <Text
        style={{
          color: 'white',
          fontSize: 16,
          lineHeight: 24,
          marginTop: 8,
          width: 220,
          marginLeft: 30,
        }}
      >
        Selecione o evento desejado. E espere sua data!
      </Text>

      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ marginBottom: 20 }}
      >
        <CardItemEvent
          title='Criando interfaces muito malucas com o Figma!'
          description='  Você pode criar interfaces malucas que dispertam sua criativade.
            Usando de recursos do próprio figma, como seus plugins.'
          org='Comunidade Ballerini'
        />
        <CardItemEvent
          title='Criando interfaces muito malucas com o Figma!'
          description='  Você pode criar interfaces malucas que dispertam sua criativade.
            Usando de recursos do próprio figma, como seus plugins.'
          org='Comunidade Ballerini'
        />
        <CardItemEvent
          title='Criando interfaces muito malucas com o Figma!'
          description='  Você pode criar interfaces malucas que dispertam sua criativade.
            Usando de recursos do próprio figma, como seus plugins.'
          org='Comunidade Ballerini'
        />
        <CardItemEvent
          title='Criando interfaces muito malucas com o Figma!'
          description='  Você pode criar interfaces malucas que dispertam sua criativade.
            Usando de recursos do próprio figma, como seus plugins.'
          org='Comunidade Ballerini'
        />
        <CardItemEvent
          title='Criando interfaces muito malucas com o Figma!'
          description='  Você pode criar interfaces malucas que dispertam sua criativade.
            Usando de recursos do próprio figma, como seus plugins.'
          org='Comunidade Ballerini'
        />
        <CardItemEvent
          title='Criando interfaces muito malucas com o Figma!'
          description='  Você pode criar interfaces malucas que dispertam sua criativade.
            Usando de recursos do próprio figma, como seus plugins.'
          org='Comunidade Ballerini'
        />
      </ScrollView>
    </View>
  )
}

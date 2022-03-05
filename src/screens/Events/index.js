import { useLayoutEffect, useContext } from 'react'
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
import { UserContext } from '../../context/UserContext'

import { filtroResults, hora, data } from '../../utils/utils'

export default ({ navigation }) => {
  const { state, dispatch } = useContext(UserContext)

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{ flexDirection: 'row' }}
        >
          <SvgXml width='20' height='20' xml={arrowLeft} />
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

  const handleGoEvents = (event) => {
    if (!event.length) {
      dispatch({
        type: 'setEvent',
        payload: {
          event: event,
        },
      })
      navigation.navigate('EventInfo')
    }
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
          fontFamily: 'Epilogue_700Bold',
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
          fontFamily: 'Epilogue_400Regular',
        }}
      >
        Selecione o evento desejado. E espere sua data!
      </Text>

      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ marginBottom: 20 }}
      >
        {state.events.map((event) => (
          <CardItemEvent
            key={event.id}
            title={event.titulo}
            description={event.descricao}
            org={event.organizador}
            onPress={() => handleGoEvents(event)}
            data={data(filtroResults(event.dataInicio))}
            hora={hora(filtroResults(event.dataInicio))}
          />
        ))}
      </ScrollView>
    </View>
  )
}

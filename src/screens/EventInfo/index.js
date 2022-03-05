import React, { useState, useEffect } from 'react'
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
  Epilogue_800ExtraBold,
  Epilogue_400Regular,
  Epilogue_500Medium,
  Epilogue_700Bold,
  Epilogue_600SemiBold,
} from '@expo-google-fonts/epilogue'

import {
  Rajdhani_600SemiBold,
  Rajdhani_700Bold,
} from '@expo-google-fonts/rajdhani'

import AppLoading from 'expo-app-loading'
import { SvgXml } from 'react-native-svg'

import { arrowLeft, arrowRight, bell, bell_off } from '../../../assets/icons'

import { styles } from './styles'

import ProgressBar from '../../components/ProgressBar'

import moment from 'moment'

export default ({ navigation }) => {
  const [day, setDay] = useState(0)
  const [hour, setHour] = useState(0)
  const [min, setMin] = useState(0)

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

  useEffect(() => {
    let date = moment().utcOffset('00:00').format('YYYY-MM-DD hh:mm:ss')

    let expirydate = '2022-03-15 04:00:45'

    let diffr = moment.duration(moment(expirydate).diff(moment(date)))

    let days = parseInt(diffr.asDays())
    let hours = parseInt(diffr.asHours())
    let minutes = parseInt(diffr.minutes())

    setDay(days)
    setHour(hours)
    setMin(minutes)
  }, [])

  let [fontsLoaded] = useFonts({
    Epilogue_800ExtraBold,
    Epilogue_400Regular,
    Epilogue_500Medium,
    Epilogue_600SemiBold,
    Epilogue_700Bold,
    Rajdhani_600SemiBold,
    Rajdhani_700Bold,
  })

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <View style={styles.container}>
      <View style={{ marginLeft: 30 }}>
        <Text
          style={{
            color: '#FF5100',
            fontSize: 24,
            lineHeight: 30,
            marginTop: 50,
            width: 250,
            fontWeight: 'bold',
            fontFamily: 'Epilogue_700Bold',
          }}
        >
          02/MAR
        </Text>
        <Text
          style={{
            color: '#FF5100',
            fontSize: 24,
            lineHeight: 30,
            width: 250,
            fontFamily: 'Epilogue_500Medium',
          }}
        >
          19:00
        </Text>
        <Text
          style={{
            color: 'white',
            fontSize: 28,
            lineHeight: 40,
            marginTop: 32,
            width: 290,
            fontFamily: 'Epilogue_800ExtraBold',
          }}
        >
          Criando interfaces muito malucas com o Figma!{' '}
        </Text>

        <Text
          numberOfLines={3}
          style={{
            marginTop: 13,
            marginRight: 27,
            fontFamily: 'Epilogue_400Regular',
            fontSize: 12,
            lineHeight: 24,
            color: '#959595',
          }}
        >
          Você pode criar interfaces malucas que dispertam sua criativade.
          Usando de recursos do próprio figma, como seus plugins.
        </Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: 13,
          }}
        >
          <Text
            style={{
              fontFamily: 'Epilogue_500Medium',
              fontSize: 10,
              lineHeight: 14,
              color: 'white',
            }}
          >
            Organizado por:{' '}
            <Text
              style={{ fontFamily: 'Epilogue_700Bold', fontWeight: 'bold' }}
            >
              Comunidade Ballerini
            </Text>
          </Text>
        </View>
        <View
          style={{
            marginTop: 32,
            marginRight: 32,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Text
            style={{
              fontFamily: 'Epilogue_800ExtraBold',
              fontWeight: 'bold',
              fontSize: 20,
              lineHeight: 28,
              color: 'white',
              marginBottom: 20,
            }}
          >
            Link do evento
          </Text>
          <View
            style={{
              width: 350,
              flexDirection: 'row',
              justifyContent: 'space-between',
              backgroundColor: '#323232',
              borderRadius: 5,
              padding: 10,
            }}
          >
            <Text style={{ color: 'white' }}>meet.google/12345</Text>
            <View style={{ flexDirection: 'row' }}>
              <TouchableOpacity
                style={{
                  backgroundColor: 'gray',
                  width: 24,
                  height: 24,
                  borderRadius: 6,
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginRight: 10,
                }}
              >
                <SvgXml width='14' height='14' xml={bell} stroke='white' />
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  backgroundColor: '#04D36120',
                  width: 24,
                  height: 24,
                  borderRadius: 6,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <SvgXml
                  width='14'
                  height='14'
                  xml={arrowRight}
                  stroke='white'
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={{ marginTop: 30 }}>
          <Text
            style={{
              color: 'white',
              fontFamily: 'Epilogue_600SemiBold',
              fontSize: 16,
              lineHeight: 22,
            }}
          >
            Tempo até o evento
          </Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              marginRight: 32,
              marginLeft: -10,
              marginTop: 10,
            }}
          >
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Text
                style={{
                  color: 'white',
                  fontSize: 40,
                  fontFamily: 'Rajdhani_700Bold',
                  lineHeight: 51,
                }}
              >
                {day}
              </Text>
              <Text
                style={{
                  color: 'white',
                  fontSize: 10,
                  lineHeight: 10,
                  fontFamily: 'Epilogue_600SemiBold',
                }}
              >
                DAYS(s)
              </Text>
            </View>

            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Text
                style={{
                  color: 'white',
                  fontSize: 40,
                  fontFamily: 'Rajdhani_700Bold',
                  lineHeight: 51,
                }}
              >
                {hour}
              </Text>
              <Text
                style={{
                  color: 'white',
                  fontSize: 10,
                  lineHeight: 10,
                  fontFamily: 'Epilogue_600SemiBold',
                }}
              >
                HOUR(s)
              </Text>
            </View>

            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Text
                style={{
                  color: 'white',
                  fontSize: 40,
                  fontFamily: 'Rajdhani_700Bold',
                  lineHeight: 51,
                }}
              >
                {min}
              </Text>
              <Text
                style={{
                  color: 'white',
                  fontSize: 10,
                  lineHeight: 10,
                  fontFamily: 'Epilogue_600SemiBold',
                }}
              >
                MIN(s)
              </Text>
            </View>
          </View>

          <View style={{ marginRight: 32 }}>
            <ProgressBar
              step={2 * day}
              steps={100}
              height={10}
              color='#FF5100'
            />
          </View>
        </View>
      </View>
    </View>
  )
}

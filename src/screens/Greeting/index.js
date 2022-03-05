import { Text, View, Image, TouchableOpacity } from 'react-native'
import {
  useFonts,
  Epilogue_700Bold,
  Epilogue_400Regular,
} from '@expo-google-fonts/epilogue'
import AppLoading from 'expo-app-loading'
import { SvgXml } from 'react-native-svg'

import { styles } from './styles'

import { arrowRightWhite } from '../../../assets/icons'

export default ({ navigation }) => {
  let [fontsLoaded] = useFonts({
    Epilogue_700Bold,
    Epilogue_400Regular,
  })

  if (!fontsLoaded) {
    return <AppLoading />
  }

  const handleClick = () => {
    navigation.navigate('Home')
  }

  return (
    <View style={styles.container}>
      <View style={{ marginLeft: 53 }}>
        <Text
          style={{
            fontSize: 40,
            color: '#ffffff',
            fontFamily: 'Epilogue_700Bold',
            marginBottom: 29,
          }}
        >
          Olá, Dev{' '}
          <Text style={{ fontFamily: 'Epilogue_700Bold', color: '#FF5100' }}>
            !
          </Text>
        </Text>
      </View>
      <View
        style={{
          marginLeft: 53,
          width: 230,
        }}
      >
        <Text
          style={{
            fontSize: 24,
            color: '#ffffff',
            fontFamily: 'Epilogue_400Regular',
          }}
        >
          Encontre o seu{' '}
          <Text
            style={{
              backgroundColor: '#FF5100',
              fontFamily: 'Epilogue_400Regular',
            }}
          >
            próximo
          </Text>{' '}
          evento de programação!
        </Text>
      </View>
      <View style={{ alignItems: 'center' }}>
        <Image
          style={styles.image}
          source={require('../../../assets/person.png')}
        />
        <TouchableOpacity
          style={{
            backgroundColor: '#FF5100',
            width: 56,
            height: 56,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 16,
            color: '#ffffff',
          }}
          onPress={handleClick}
        >
          <SvgXml width='40' height='40' xml={arrowRightWhite} />
        </TouchableOpacity>
      </View>
    </View>
  )
}

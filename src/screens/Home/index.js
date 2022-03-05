import { useState } from 'react'
import {
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  FlatList,
  Dimensions,
} from 'react-native'
import { SvgXml } from 'react-native-svg'
import {
  useFonts,
  Epilogue_400Regular,
  Epilogue_600SemiBold,
} from '@expo-google-fonts/epilogue'
import AppLoading from 'expo-app-loading'

import { styles } from './styles'

import CardList from '../../components/CardList'
import { dados } from '../../utils/data'
import { api } from '../../Api/events'

import {
  serveless,
  servelessWhite,
  arrowRightWhite,
  laptop,
  laptopWhite,
  hierarchy,
  hierarchyWhite,
  bezier,
  bezierWhite,
  terminal,
  terminalWhite,
  blocks,
  blocksWhite,
  iphone,
  iphoneWhite,
} from '../../../assets/icons'

export default ({ navigation }) => {
  const [test, setTest] = useState(false)
  const [click, setClick] = useState(null)

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

    if (iconName == 'servelessWhite') return servelessWhite

    if (iconName == 'laptop') return laptop

    if (iconName == 'laptopWhite') return laptopWhite

    if (iconName == 'hierarchy') return hierarchy

    if (iconName == 'hierarchyWhite') return hierarchyWhite

    if (iconName == 'bezier') return bezier

    if (iconName == 'bezierWhite') return bezierWhite

    if (iconName == 'terminal') return terminal

    if (iconName == 'terminalWhite') return terminalWhite

    if (iconName == 'blocks') return blocks

    if (iconName == 'blocksWhite') return blocksWhite

    if (iconName == 'iphone') return iphone

    if (iconName == 'iphoneWhite') return iphoneWhite
  }

  const handleChangeState = (item, index) => {
    if (test && index == click) {
      setTest(false)
      setClick(null)
    } else if (!test) {
      setTest((test) => !test)
      setClick(index)
    } else {
      setClick(index)
    }
  }

  const handleGoEvents = () => {
    navigation.navigate('Events')
  }

  const returnNumberForEvents = (id) => {
    const NumberForEvents = api.events.filter((item) => item.tipoId == id)
    return NumberForEvents.length
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

      <FlatList
        data={api.tipo}
        keyExtractor={(item) => item.text}
        showsVerticalScrollIndicator={false}
        numColumns={2}
        renderItem={({ item, index }) => (
          <View
            style={{
              width: Dimensions.get('window').width / 2,
            }}
          >
            <CardList
              onPress={() => handleChangeState(item, index)}
              icon={findIcon(index === click ? item.icon + 'White' : item.icon)}
              title={item.text}
              backColor={true}
              bColor={
                index === click ? '#FF5100' : click === null ? 'white' : 'gray'
              }
              fColor={index === click ? true : false}
              numberEvents={returnNumberForEvents(item.id)}
            />
          </View>
        )}
      />

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
            onPress={handleGoEvents}
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
            <SvgXml width='22' height='22' xml={arrowRightWhite} />
          </TouchableOpacity>
        </View>
      )}
    </View>
  )
}

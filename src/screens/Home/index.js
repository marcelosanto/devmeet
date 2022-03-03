import { useEffect } from 'react'
import { Text, View, Image } from 'react-native'
import { styles } from './styles'

export default () => {
  return (
    <View style={styles.container}>
      <View>
        <Text>Que tipo de evento você procura?</Text>

        <Text>Selecione a categoria que mais te agrada!</Text>
      </View>
    </View>
  )
}

import { useEffect } from 'react'
import { Text, View, Image } from 'react-native'
import { styles } from './styles'

export default ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.reset({
        index: 1,
        routes: [{ name: 'Greeting' }],
      })
    }, 1000)
  })

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require('../../../assets/LOGO.png')}
      />
    </View>
  )
}

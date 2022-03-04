import React from 'react'
import { Text, View, Image, Button } from 'react-native'
import { styles } from './styles'

export default ({ navigation }) => {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button onPress={() => navigation.goBack()} title='Voltar' />
      ),
    })
  }, [navigation])

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
    </View>
  )
}

import { TouchableOpacity, View, Text } from 'react-native'
import { SvgXml } from 'react-native-svg'

import { arrowRight } from '../../../assets/icons'

export default ({ title, description, org }) => {
  return (
    <TouchableOpacity
      style={{
        marginLeft: 30,
        marginRight: 30,
        marginTop: 18,
        backgroundColor: 'white',
        borderRadius: 9,
      }}
    >
      <View style={{ margin: 16 }}>
        <Text
          style={{
            fontfamily: 'Rajdhani_500Medium',
            fontSize: 16,
            lineHeight: 20,
            color: '#FF5100',
          }}
        >
          <Text
            style={{
              fontWeight: 'bold',
              fontfamily: 'Rajdhani_700Bold',
              fontSize: 16,
              lineHeight: 20,
            }}
          >
            02/MAR
          </Text>{' '}
          - 19:00
        </Text>
        <Text
          numberOfLines={2}
          style={{
            fontFamily: 'Epilogue_800ExtraBold',
            marginTop: 3,
            fontSize: 20,
            lineHeight: 24,
            color: '#282828',
          }}
        >
          {title}
        </Text>
        <Text
          numberOfLines={3}
          style={{
            marginTop: 13,
            marginRight: 27,
            fontFamily: 'Epilogue_400Regular',
            fontSize: 10,
            lineHeight: 14,
            color: '#959595',
          }}
        >
          {description}
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
            }}
          >
            Organizado por:{' '}
            <Text
              style={{ fontFamily: 'Epilogue_700Bold', fontWeight: 'bold' }}
            >
              {org}
            </Text>
          </Text>
          <SvgXml width='40' height='40' xml={arrowRight} stroke='white' />
        </View>
      </View>
    </TouchableOpacity>
  )
}

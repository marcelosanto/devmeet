import React from 'react'
import { View, Text, Animated } from 'react-native'

export default ({ step, steps, height, color }) => {
  const [width, setWidth] = React.useState(0)
  const animatedValue = React.useRef(new Animated.Value(-1000)).current
  const reactive = React.useRef(new Animated.Value(-1000)).current

  React.useEffect(() => {
    Animated.timing(animatedValue, {
      toValue: reactive,
      duration: 300,
      useNativeDriver: true,
    }).start()
  }, [])

  React.useEffect(() => {
    reactive.setValue(-width + (width * step) / steps)
  }, [step, width])

  return (
    <>
      <View
        onLayout={(e) => {
          const newWidth = e.nativeEvent.layout.width

          setWidth(newWidth)
        }}
        style={{
          height,
          backgroundColor: 'rgba(0,0,0,0.3)',
          borderRadius: height,
          overflow: 'hidden',
        }}
      >
        <Animated.View
          style={{
            height,
            width: '100%',
            borderRadius: height,
            backgroundColor: color ? color : 'rgba(0,0,0,0.5)',
            position: 'absolute',
            left: 0,
            top: 0,
            transform: [
              {
                translateX: animatedValue,
              },
            ],
          }}
        ></Animated.View>
      </View>
    </>
  )
}

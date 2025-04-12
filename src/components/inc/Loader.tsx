import React from 'react'
import { ActivityIndicator } from 'react-native'
import { View } from 'tamagui'

interface Props {
  lg?: boolean,
  color?: string
}
function Loader({
  lg,
  color="#298749"
}:Props) {
  return (
    <View flex={1} jc="center" ai="center">
      <ActivityIndicator size={lg ? "large" : "small"} color={color} />
    </View>
  )
}

export default Loader
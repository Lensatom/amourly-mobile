import React from 'react'
import { View } from 'tamagui'

function HorizontalLine({...rest}) {
  return (
    <View h={2} w="$full" bg="#E4E7EF" {...rest} />
  )
}

export default HorizontalLine
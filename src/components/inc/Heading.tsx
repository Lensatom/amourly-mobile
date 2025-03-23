import React from 'react'
import { Text, View, XStack } from 'tamagui'

interface Props {
  text: string
}

const Heading = ({
  text
}:Props) => {
  return (
    <XStack ai="center" h="$5">
      <View h={1} w="$full" bg="#E4E7EF" />
      <Text bg="$bg.1" pr="$3" pos="absolute" fos="$6" fow="500" ff="$heading">{text}</Text>
    </XStack>
  )
}

export default Heading
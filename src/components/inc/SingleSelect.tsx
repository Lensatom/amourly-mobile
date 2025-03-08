import React, { useState } from 'react'
import { Pressable } from 'react-native'
import { Text, View } from 'tamagui'
import { XStack } from 'tamagui'
import { Icon } from '../base'

interface Props {
  opts: string[]
}

function MultiSelect({
  opts,
}:Props) {
  const [choice, setChoice] = useState<string>()

  const handleSelect = (opt:string) => {
    setChoice(opt)
  }

  return (
    <XStack flex={1} flexWrap='wrap' gap="$2">
      {opts.map((opt) => {
        const chosen = choice === opt
        return (
          <Pressable onPress={() => handleSelect(opt)}>
            <XStack ai="center" gap="$2" px="$3" py="$2" bg={chosen ? "$primary.2" : "$bg.1"} borderWidth={1} br="$4" borderColor={chosen ? "$primary.5" : "#B2B3BD"} color={chosen ? "$black" : "#B2B3BD"}>
              <View br={99} w={12} h={12} borderColor={chosen ? "$primary.5" : "#B2B3BD"} borderWidth={1} jc="center" ai="center">
                <View br={99} w={6} h={6} bg={chosen ? "$primary" : "$bg.1"} />
              </View>
              <Text textTransform='capitalize'>{opt}</Text>
            </XStack>
          </Pressable>
        )
      })}
    </XStack>
  )
}

export default MultiSelect
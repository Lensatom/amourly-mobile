import React, { useEffect, useState } from 'react'
import { Pressable } from 'react-native'
import { Text } from 'tamagui'
import { XStack } from 'tamagui'
import { Icon } from '../base'

interface Props {
  opts: string[]
  onChange?: (choices:string[]) => void
}

function MultiSelect({
  opts,
  onChange
}:Props) {
  const [choices, setChoices] = useState<string[]>([])

  const handleSelect = (opt:string) => {
    const choiceIndex = choices.indexOf(opt)
    if (choiceIndex === -1) {
      setChoices(prev => [...prev, opt])
    } else {
      const choiceWithOptRemoved = choices
      choiceWithOptRemoved.splice(choiceIndex, 1)
      setChoices([...choiceWithOptRemoved])
    }
  }

  useEffect(() => {
    if (!onChange) return
    onChange(choices)
  }, [choices])

  return (
    <XStack flex={1} flexWrap='wrap' gap="$2">
      {opts.map((opt) => {
        const chosen = choices.indexOf(opt) !== -1
        return (
          <Pressable onPress={() => handleSelect(opt)}>
            <XStack ai="center" gap="$2" px="$4" py="$2" bg={chosen ? "$primary.2" : "$bg.1"} borderWidth={1} br={99} borderColor={chosen ? "$primary.5" : "#B2B3BD"} color={chosen ? "$black" : "#B2B3BD"}>
              <Text textTransform='capitalize'>{opt}</Text>
              {chosen && <Icon name="close_fill" padding={0} size={18} />}
            </XStack>
          </Pressable>
        )
      })}
    </XStack>
  )
}

export default MultiSelect
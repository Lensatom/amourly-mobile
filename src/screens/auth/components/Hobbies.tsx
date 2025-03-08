import { MultiSelect, Title } from '@/components/inc'
import { PADDING_X } from '@/constants'
import React from 'react'
import { Text } from 'tamagui'
import { YStack } from 'tamagui'

function Hobbies() {
  const options = [
    "reading",
    "painting",
    "cycling",
    "gardening",
    "photography",
    "hiking",
    "cooking",
    "traveling",
    "playing guitar",
    "writing",
    "knitting",
    "swimming",
    "baking",
    "dancing",
    "yoga",
    "fishing",
    "playing chess",
    "pottery",
    "camping",
    "birdwatching"
]

  return (
    <YStack gap="$4" flex={1}>
      <YStack>
        <Title text="Hobbies" />
        <Text>
          Add 5 - 10 hobbies to complete your profile.
        </Text>
      </YStack>
      <YStack flex={1} borderColor="$grey.3" borderTopWidth={2} borderBottomWidth={2} py="$4" mx={-PADDING_X} px={PADDING_X}>
        <MultiSelect opts={options} />
      </YStack>
    </YStack>
  )
}

export default Hobbies
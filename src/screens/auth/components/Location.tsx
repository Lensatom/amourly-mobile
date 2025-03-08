import { Input } from '@/components/base'
import { Title } from '@/components/inc'
import React from 'react'
import { Text, YStack } from 'tamagui'

function Location() {
  return (
    <YStack gap="$6">
      <YStack>
        <Title text="Location" />
        <Text>
          Adding your location helps us match you better while your address is kept private.
        </Text>
      </YStack>
      <YStack gap="$4">
        <Input label="What country do you live in?" />
        <Input label="Your address" />
      </YStack>
    </YStack>
  )
}

export default Location
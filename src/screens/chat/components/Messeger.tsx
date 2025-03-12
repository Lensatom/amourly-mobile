import { Avatar } from '@/components/base'
import React from 'react'
import { Text, XStack, YStack } from 'tamagui'

function Messeger(props:any) {
  return (
    <XStack gap="$2" ai="center">
      <Avatar url={props.imageURL} size={60} />
      <YStack flex={1} gap="$1.5">
        <Text fow="500" fos="$5">{props.name}</Text>
        <Text fos="$2" color="$grey.8">Tell me about you</Text>
      </YStack>
      <YStack ai="flex-end" gap="$1.5">
        <Text color="$grey.8" fos="$2">04:31 PM</Text>
        <XStack bg="$grey.8" h="$1" w="$1" jc="center" ai="center" br={99}>
          <Text bg="$grey.8" color="white" fos="$1" fow="500">2</Text>
        </XStack>
      </YStack>
    </XStack>
  )
}

export default Messeger
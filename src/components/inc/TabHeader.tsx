import React from 'react'
import { Text, XStack } from 'tamagui'
import { Icon } from '../base'

function TabHeader({
  title
}:{title: string}) {
  return (
    <XStack jc="space-between">
      <Text fos="$8" fow="600" ff="$heading" color="$primary">{title}</Text>
      <XStack ai="center">
        <Text fos="$8">6</Text>
        <Icon name="boost_bolt" size={28} padding={10} />
      </XStack>
    </XStack>
  )
}

export default TabHeader
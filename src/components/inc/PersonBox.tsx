import { Icon } from '@/components/base'
import React from 'react'
import { Image } from 'react-native'
import { Text, View, XStack, YStack } from 'tamagui'
import { LinearGradient } from 'tamagui/linear-gradient'

interface Props {
  name: string
  intention: string
  age: number
  imageURL: string,
  liked: boolean
}

function PersonBox({
  name,
  intention,
  age,
  imageURL,
  liked
}:Props) {
  return (
    <View br="$4" overflow='hidden'>
      <Image source={{ uri: imageURL }} style={{height: 300}} />
      <View pos="absolute" bottom={0} width="$full" height="$full" bg="black" opacity={0.2} />
      <View pos="absolute" top={0} right={0} padding="$3">
        <Icon name="plane_line" bg="#00000033" size={16} padding={20} />
      </View>
      <LinearGradient
        width="$full"
        height="$6"
        colors={['#000000B2', 'transparent']}
        start={[0, 0.7]}
        end={[0, 0]}
        pos="absolute"
        bottom={0}
      >
        <XStack p="$3" jc="space-between" ai="center" pos="absolute" bottom={0} width="$full">
          <YStack>
            <Text fos="$5" fow="800" color="white">{name}</Text>
            <Text color="white" textTransform='capitalize' fos="$1" fow="300">{intention} &bull; {age}</Text>
          </YStack>
          <Icon bg={liked ? "#FFB9AC33" : "#FFFFFF33"} name={liked ? "heart_red_line_white" : "heart_line_white"} size={16} padding={20} />
        </XStack>
      </LinearGradient>
    </View>
  )
}

export default PersonBox
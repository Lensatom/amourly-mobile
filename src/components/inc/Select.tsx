import { router } from 'expo-router'
import React, { useState } from 'react'
import { FlatList, TouchableOpacity } from 'react-native'
import { Text, YStack } from 'tamagui'
import { View, XStack } from 'tamagui'

interface Props {
  options: string[],
  choose: any,
  selected: string
}

function Select({
  options,
  choose,
  selected
}:Props) {

  return (
    <FlatList
      data={options}
      nestedScrollEnabled
      renderItem={({item}) => (
        <TouchableOpacity onPress={() => choose(item)}>
          <XStack p="$4" bg="$white.100" w="$full" br="$4" ai="center" gap="$2.5" jc="space-between">
            <Text fos="$5" color="$grey.1" textTransform='capitalize'>{item}</Text>
            <View p="$1.5" borderWidth={2} borderColor={selected === item ? "$orange" : "$grey.3"} br={99}>
              <View w={10} h={10} bg={selected === item ? "$orange" : "$white.100"} br={99} />
            </View>
          </XStack>
        </TouchableOpacity>
      )}
      ItemSeparatorComponent={() => <View h={0.8} bg="$bg.1" mx="$2" />}
    />
  )
}

{/* <TouchableOpacity onPress={() => choose(item)}>
  <XStack p="$4" bg="$white.100" w="$full" br="$4" ai="center" gap="$2.5">
    <View p="$1.5" borderWidth={2} borderColor={selected === item ? "$orange" : "$grey.3"} br={99}>
      <View w={12} h={12} bg={selected === item ? "$orange" : "$white.100"} br={99} />
    </View>
    <Text fos="$5" color="$grey.1">{item}</Text>
  </XStack>
</TouchableOpacity> */}

export default Select
import { Title } from '@/components/inc'
import React from 'react'
import { Text, View } from 'tamagui'
import { YStack } from 'tamagui'

import LoveImage from "../../../../assets/images/setup-love-image.svg"
import TalkImage from "../../../../assets/images/setup-talk-image.svg"
import MakeFriendsImage from "../../../../assets/images/setup-make-friends-image.svg"
import DateImage from "../../../../assets/images/setup-date-image.svg"
import { FlatList, Pressable } from 'react-native'

function Intentions({data, changeData}:any) {

  const intentionOptions = [
    {
      name: "love",
      Image: <LoveImage />
    },
    {
      name: "talk",
      Image: <TalkImage />
    },
    {
      name: "make friends",
      Image: <MakeFriendsImage />
    },
    {
      name: "date",
      Image: <DateImage />
    }
  ]

  return (
    <YStack>
      <Title text="Intentions" />
      <Text>
        Adding your intentions helps match you with
        the kind of people you're looking for.
      </Text>
      <FlatList
        data={intentionOptions}
        renderItem={({item}) => {
          const Image = item.Image
          const isSelected = data.intentions === item.name
          return (
            <Pressable style={{width: "48%", marginTop: 20}} onPress={() => changeData("intentions", item.name)}>
              <View borderWidth={2} borderColor={isSelected ? "$primary.6" : "$primary.3"} h={120} ai="center" jc="flex-end" br="$4" bg={isSelected ? "$primary.1" : "white"}>
                <Text fos="$4" tt="capitalize" fow="400" pos="absolute" top="$2">{item.name}</Text>
                {Image}
              </View>
            </Pressable>
          )
        }}
        numColumns={2}
        columnWrapperStyle={{
          justifyContent: "space-between"
        }}
        style={{
          marginTop: 20
        }}
      />
    </YStack>
  )
}

export default Intentions
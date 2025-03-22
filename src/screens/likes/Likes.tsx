import { Carousel, Container, PersonBox } from '@/components/inc'
import { PADDING_X, SCREEN_WIDTH } from '@/constants'
import { router } from 'expo-router'
import React, { useState } from 'react'
import { FlatList, Pressable } from 'react-native'
import { Text, View, XStack, YStack } from 'tamagui'
import { persons } from '../explore/Explore'

function Likes() {
  const likes = persons.slice(0, 4)
  const visitors = persons.slice(4, persons.length)

  const [activeTab, setActiveTab] = useState<"likes" | "visitors">("likes")

  return (
    <>
    <YStack bg="$bg.1" px={PADDING_X} gap="$2">
      <XStack>
        <Text fos="$8" fow="600">Likes</Text>
      </XStack>
      <Carousel />
      <XStack borderBottomWidth={0.5}>
        <Text onPress={() => setActiveTab("likes")} flex={1} ta="center" py="$2.5" fow="800" color={activeTab === "likes" ? "$primary" : "$black"} borderBottomColor="$primary" borderBottomWidth={activeTab === "likes" ? 1 : 0}>Likes ({likes.length})</Text>
        <Text onPress={() => setActiveTab("visitors")} flex={1} ta="center" py="$2.5" fow="800" color={activeTab === "visitors" ? "$primary" : "$black"} borderBottomColor="$primary" borderBottomWidth={activeTab === "visitors" ? 1 : 0}>Visitors ({visitors.length})</Text>
      </XStack>
    </YStack>
    <Container withBoost pt="$4">
      <FlatList
        data={activeTab === "likes" ? likes : visitors}
        renderItem={({item}) => (
          <Pressable style={{flex: 1}} onPress={() => router.push({pathname: '/explore/preview', params: {id: item.id}})}>
            <PersonBox {...item} />
          </Pressable>
        )}
        showsVerticalScrollIndicator={false}
        ListFooterComponent={() => <View h={PADDING_X} />}
        numColumns={2}
        ItemSeparatorComponent={() => <View h={8} />}
        columnWrapperStyle={{gap: 8}}
      />
    </Container>
    </>
  )
}

export default  Likes
import { Carousel, Container, PersonBox, TabHeader } from '@/components/inc'
import { PADDING_X } from '@/constants'
import { router } from 'expo-router'
import React from 'react'
import { FlatList, Pressable } from 'react-native'
import { Text, View, XStack, YStack } from 'tamagui'
import { Person } from './components'

export const persons = [
  {
    id: 1,
    name: "Alexandria",
    intention: "love",
    age: 25,
    imageURL: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    liked: Math.random() > 0.5
  },
  {
    id: 2,
    name: "Sophia",
    intention: "date",
    age: 28,
    imageURL: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=800",
    liked: Math.random() > 0.5
  },
  {
    id: 3,
    name: "Olivia",
    intention: "love",
    age: 22,
    imageURL: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    liked: Math.random() > 0.5
  },
  {
    id: 4,
    name: "Isabella",
    intention: "love",
    age: 30,
    imageURL: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=800",
    liked: Math.random() > 0.5
  },
  {
    id: 5,
    name: "Ava",
    intention: "date",
    age: 27,
    imageURL: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    liked: Math.random() > 0.5
  },
  {
    id: 6,
    name: "Mia",
    intention: "date",
    age: 26,
    imageURL: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=800",
    liked: Math.random() > 0.5
  },
  {
    id: 7,
    name: "Amelia",
    intention: "love",
    age: 23,
    imageURL: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    liked: Math.random() > 0.5
  },
  {
    id: 8,
    name: "Harper",
    intention: "date",
    age: 29,
    imageURL: "https://images.pexels.com/photos/712521/pexels-photo-712521.jpeg?auto=compress&cs=tinysrgb&w=800",
    liked: Math.random() > 0.5
  },
  {
    id: 9,
    name: "Evelyn",
    intention: "love",
    age: 32,
    imageURL: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    liked: Math.random() > 0.5
  },
  {
    id: 10,
    name: "Ella",
    intention: "date",
    age: 24,
    imageURL: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=800",
    liked: Math.random() > 0.5
  }
];

function Chat() {
  return (
    <>
    <YStack px={PADDING_X} bg="$bg.1" pb="$2">
      <TabHeader title="Chats" />
      <Carousel />
    </YStack>
    <Container withBoost pt="$2">
      <FlatList
        data={persons}
        renderItem={({item}) => (
          <Pressable style={{flex: 1}} onPress={() => router.push({pathname: '/chat/chat-messenger', params: {id: item.id}})}>
            <Person {...item} />
          </Pressable>
        )}
        showsVerticalScrollIndicator={false}
        ListFooterComponent={() => <View h={PADDING_X} />}
        ItemSeparatorComponent={() => <View h={20} />}
      />
    </Container>
    </>
  )
}

export default Chat
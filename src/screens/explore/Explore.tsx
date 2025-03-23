import { Icon } from '@/components/base'
import { Carousel, Container, PersonBox, TabHeader } from '@/components/inc'
import { PADDING_X, SCREEN_WIDTH } from '@/constants'
import { router } from 'expo-router'
import React, { useState } from 'react'
import { FlatList, Pressable } from 'react-native'
import { Text, View, XStack, YStack } from 'tamagui'
import { FilterType } from './types'

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

function Explore() {
  const filters:FilterType[] = [
    {
      id: 1,
      name: "all",
      param: ""
    },
    {
      id: 2,
      name: "nearby",
      icon: "location",
      param: ""
    },
    {
      id: 3,
      name: "Hobbies Match",
      icon: "fire",
      param: ""
    },
    {
      id: 4,
      name: "Most Likes",
      icon: "heart",
      param: ""
    },
    {
      id: 5,
      name: "Same Intentions",
      icon: "star",
      param: ""
    }
  ]

  const [selectedFilter, setSelectedFilter] = useState<number | string>(1)

  console.log(selectedFilter)

  return (
    <>
      <YStack bg="$bg.1" px={PADDING_X} pb="$3">
        <View h={45}>
          <TabHeader title="Explore" />
        </View>
        <Text color="$grey.8" fos="$3">Connect wth people who meet your preferences</Text>
      </YStack>
      <Container withBoost gap="$2">
        <View ml={-PADDING_X} pl={PADDING_X} w={SCREEN_WIDTH}>
          <FlatList
            data={filters}
            renderItem={({item, index}) => (
              <Pressable onPress={() => setSelectedFilter(item.id)}>
                <XStack py="$1.5" px="$4" bg={selectedFilter === item.id ? "$primary.2" : "$bg.1"} br={99} mb="$2" borderColor={selectedFilter === item.id ? "$primary.5" : "#B2B3BD"} borderWidth={1} ai="center" gap="$2">
                  <Text textTransform='capitalize' color="#636363" fos="$3">{item.name}</Text>
                  {item.icon && <Icon name={item.icon} size={16} padding={0} />}
                </XStack>
              </Pressable>
            )}
            horizontal={true}
            ItemSeparatorComponent={() => <View w={8} />}
            showsHorizontalScrollIndicator={false}
            ListFooterComponent={() => <View w="$4" />}
          />
        </View>
        <FlatList
          data={persons}
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

export default Explore
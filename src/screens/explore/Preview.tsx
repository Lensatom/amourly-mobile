import { Icon } from '@/components/base'
import { Container, Header } from '@/components/inc'
import { router, useLocalSearchParams } from 'expo-router'
import React from 'react'
import { FlatList, Image, Pressable } from 'react-native'
import { Text, View, XStack, YStack } from 'tamagui'
import { persons } from './Explore'

function Preview() {
  const { id } = useLocalSearchParams()
  const data = persons.find(person => person.id === Number(id))

  const hobbies = [
    "Reading",
    "Traveling",
    "Cooking",
    "Photography",
    "Painting",
    "Gardening"
  ];

  if (!data) return <></>
  return (
    <>
    <Header title="Preview" />
    <Container gap="$6" pb="$8" pt="$4">
      <View br="$8" overflow='hidden' flex={1}>
        <Image source={{ uri: data.imageURL }} style={{height: 500, flex: 1}} />
        <View pos="absolute" bottom={0} width="$full" height="$full" bg="black" opacity={0.4} />
        <YStack p="$3" jc="space-between" pos="absolute" bottom={0} width="$full" gap="$1.5">
          <Text fos="$9" fow="800" color="white">{data.name}</Text>
          <Text color="white" textTransform='capitalize' fos="$3" fow="300">{data.intention} &bull; {data.age} &bull; 23m from you</Text>
          <FlatList
            data={hobbies}
            renderItem={({item}) => (
              <XStack py="$1" px="$2" borderColor="$grey.5" my="$1.5" mr="$2" borderWidth={1} br={99} mb="$1" ai="center" gap="$1">
                <Text color="$grey.5" fos="$2">{item}</Text>
              </XStack>
            )}
            showsHorizontalScrollIndicator={false}
            numColumns={3}
            scrollEnabled={false}
          />
        </YStack>
      </View>
      <XStack p="$3" jc="center" gap="$6" ai="center">
        <Pressable
          style={{
            elevation: 10,
            shadowColor: "#B4090940",
            borderRadius: 99,
            backgroundColor: "white"
          }}
          onPress={() => router.push({pathname:'/explore/profile', params: {id: data.id}})}
        >
          <Icon name="eye_line_blue" size={40} padding={20} />
        </Pressable>
        <Pressable style={{
          elevation: 10,
          shadowColor: "#B4090940",
          borderRadius: 99,
          backgroundColor: "white"
        }}>
          <Icon name="heart_fill_line_red" size={60} padding={20} />
        </Pressable>
        <Pressable style={{
          elevation: 10,
          shadowColor: "#B4090940",
          borderRadius: 99,
          backgroundColor: "white"
        }} onPress={() => router.push("/chat/chat-messenger")}>
          <Icon name="plane_line_blue" size={40} padding={20} />
        </Pressable>
      </XStack>
    </Container>
    </>
  )
}

export default Preview
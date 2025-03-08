import { Icon } from '@/components/base'
import { Container, Header } from '@/components/inc'
import { router, useLocalSearchParams } from 'expo-router'
import React from 'react'
import { FlatList, Image, Pressable } from 'react-native'
import { Text, View, XStack, YStack } from 'tamagui'
import { persons } from './Explore'

function Profile() {
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
    <Header title="Profile" />
    <Container gap="$6" pb="$8" pt="$4">
      <View br="$8" overflow='hidden'>
        <Image source={{ uri: data.imageURL }} style={{height: 500}} />
        <View pos="absolute" bottom={0} width="$full" height="$full" bg="black" opacity={0.4} />
        <YStack p="$3" jc="space-between" pos="absolute" bottom={0} width="$full" gap="$1.5">
          <Text fos="$9" fow="800" color="white">{data.name}</Text>
          <Text color="white" textTransform='capitalize' fos="$3" fow="300">{data.intention} &bull; {data.age} &bull; 23m from you</Text>
        </YStack>
      </View>
      <YStack gap="$1.5">
        <Text fos="$6" fow="600">😍 About</Text>
        <Text fos="$2" color="$grey.8" fow="300" lineHeight="$1">I’m a designer by day, poet by night. Weekends? Galleries, crafting playlists, or latte art. I love music, movies, and small moments. Text me in song lyrics, share your favorite art, and let’s create something beautiful—starting with great coffee!</Text>
        <FlatList
          data={hobbies}
          renderItem={({item}) => (
            <XStack py="$1.5" px="$2.5" borderColor="#B2B3BD" my="$1.5" mr="$2" borderWidth={1} br={99} mb="$1" ai="center" gap="$1">
              <Text color="$grey.9" fos="$1">{item}</Text>
            </XStack>
          )}
          showsHorizontalScrollIndicator={false}
          numColumns={4}
          scrollEnabled={false}
        />
      </YStack>
      {/* <XStack p="$3" jc="center" gap="$6" ai="center">
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
        }}>
          <Icon name="plane_line_blue" size={40} padding={20} />
        </Pressable>
      </XStack> */}
    </Container>
    </>
  )
}

export default Profile
import { BackButton, Container } from '@/components/inc'
import { PADDING_X } from '@/constants'
import React from 'react'
import { FlatList } from 'react-native'
import { View } from 'tamagui'
import { Text, XStack } from 'tamagui'
import { Message } from './components'
import { Avatar, Button, Icon, Input } from '@/components/base'
import { YStack } from 'tamagui'

const messages = [
  { id: '1', name: 'Alice', message: 'Hi there!', timestamp: new Date('2025-03-17T10:00:00') },
  { id: '2', name: 'Bob', message: 'Hello! How are you?', timestamp: new Date('2025-03-17T10:01:00') },
  { id: '1', name: 'Alice', message: 'I am good, thanks! How about you?', timestamp: new Date('2025-03-17T10:02:00') },
  { id: '2', name: 'Bob', message: 'I am doing well, thank you!', timestamp: new Date('2025-03-17T10:03:00') }
]

function ChatMessenger() {
  return (
    <>
    <XStack px={PADDING_X} bg="white" pb="$3" ai="center" jc="space-between">
      <XStack ai="center" gap="$2.5">
        <BackButton />
        <View borderColor="$primary" borderWidth={1.5} br={99} p={3}>
          <Avatar
            size={35}
            url="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
          />
        </View>
        <Text fos="$6" fow="700">Lillian</Text>
      </XStack>
      <XStack ai="center" gap="$2">
        <View w={7} h={7} br={99} bg="$primary" />
        <Text fos="$5">Online</Text>
      </XStack>
    </XStack>
    <YStack bg="$primary.0.5" flex={1} px={PADDING_X} py="$4">
      <FlatList
        data={messages}
        renderItem={({item, index}) => <Message key={index} {...item} />}
        showsVerticalScrollIndicator={false}
        ListFooterComponent={() => <View h={PADDING_X} />}
        ItemSeparatorComponent={() => <View h={10} />}
      />
    </YStack>
    <XStack bg="$primary.0.5" px={PADDING_X} pb="$6" gap="$4" ai="center">
      <XStack
        flex={1}
        bg="white"
        br={99}
        ai="center"
        px="$2"
        style={{
          elevation: 2,
          shadowColor: "#333333EE",
          borderRadius: 99,
          backgroundColor: "white"
        }}>
        <Input borderWidth={0} flex={1} />
        <Icon name="camera_grey" />
      </XStack>
      <View>
        <Icon name="send_white" bg="$primary" size={30} padding={30} />
      </View>
    </XStack>
    </>
  )
}

export default ChatMessenger
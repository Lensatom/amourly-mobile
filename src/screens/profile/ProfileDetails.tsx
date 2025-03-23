import { Button, Icon, Input } from '@/components/base'
import { Container } from '@/components/inc'
import { PADDING_X, SCREEN_WIDTH } from '@/constants'
import { router } from 'expo-router'
import React from 'react'
import { Pressable } from 'react-native'
import { Text, View, XStack, YStack } from 'tamagui'

function ProfileDetails() {
  return (
    <>
      <XStack ai="center" jc="center" w="$full" bg="$teal.4" py="$4">
        <Pressable style={{position: "absolute", left: PADDING_X}} onPress={() => router.back()}>
          <Icon name="arrow_lesser_white" bg="$teal.5" size={15} padding={28} />
        </Pressable>
        <Text fos="$7" color="white" ff="$heading">Profile Details</Text>
      </XStack>
      <Container gap="$4">
        <View ai="center" bg="$teal.4" py="$5" w={SCREEN_WIDTH} ml={-PADDING_X}>
          <XStack ai="center" gap="$2.5" borderWidth={1} px="$5" py="$2.5" br={99} borderColor="$grey.5">
            <Text fos="$2" color="white">Your Profile is 24% Complete</Text>
          </XStack>
        </View>

        <YStack gap="$2.5">
          <XStack>
            <Text ff="$heading" fos="$5" color="$primary.9">Personal Details</Text>
          </XStack>
          <YStack gap="$3">
            <Input label="First Name" />
            <Input label="Date of Birth" />
            <Input label="City of Residence" />
            <Input label="Intention" />
          </YStack>
        </YStack>

        <YStack gap="$2.5" py="$6" borderBottomWidth={1} borderTopWidth={1} borderColor="$grey.3" w={SCREEN_WIDTH} ml={-PADDING_X} px={PADDING_X}>
          <XStack>
            <Text ff="$heading" fos="$5" color="$primary.9">About me</Text>
          </XStack>
          <YStack gap="$3">
            <Input multiline numberOfLines={4} h="$10" verticalAlign="top" placeholder='Describe yourself in a few sentences—your passions, interests, and what makes you unique.' fos="$2" p="$2.5" />
          </YStack>
        </YStack>

        <YStack gap="$2.5">
          <XStack>
            <Text ff="$heading" fos="$5" color="$primary.9">Extras</Text>
          </XStack>
          <YStack gap="$3">
            <Input label="Height" />
            <Input label="Love Language" />
            <Input label="Astrological Sign" />
            <Input label="Personality Type" />
            <Input label="Dream City" />
          </YStack>
        </YStack>

        <Button text="Update Profile" mt="$4" mb="$8" pill />
      </Container>
    </>
  )
}

export default ProfileDetails
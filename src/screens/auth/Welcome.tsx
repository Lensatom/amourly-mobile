import { Button } from '@/components/base'
import { PADDING_X } from '@/constants'
import { router } from 'expo-router'
import React from 'react'
import { Image } from 'react-native'
import { Text, View, YStack } from 'tamagui'
const WelcomeImage = require("../../../assets/images/lovers.jpg")

function Welcome() {
  return (
    <View flex={1}>
      <Image source={WelcomeImage} style={{resizeMode: "cover", width: "100%", height: "100%"}} />
      <View pos="absolute" left={0} top={0} bg="#00000044" w="$full" h="$full" jc="flex-end">
        <YStack ai="center" jc="space-between" h={300} px={PADDING_X} bg="white" btrr={40} btlr={40} py="$6">
          <YStack gap="$1">
            <Text fos={25} fow="800" ta="center" opacity={0.8}>Welcome to Amourly</Text>
            <Text opacity={0.6} ta="center" fos="$3" px="$6">
              Let’s help you find your soulmate, Join a community of like-minded people looking for real love, just like you.
            </Text>
          </YStack>
          <YStack w="$full">
            <Button text="Continue" w="$full" mt="$4" pill onPress={() => router.push("/login-register")} />
            <Text opacity={0.5} fos="$1" ta="center" mt="$4">By continuing, you agree to our terms and conditions</Text>
          </YStack>
        </YStack>
      </View>
    </View>
  )
}

export default Welcome
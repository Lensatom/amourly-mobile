import { Button, Input } from '@/components/base'
import { Container } from '@/components/inc'
import { PADDING_X } from '@/constants'
import { router } from 'expo-router'
import React from 'react'
import { Pressable } from 'react-native'
import { Text, XStack, YStack } from 'tamagui'

function Login() {
  const handleSubmit = () => {
    router.push("/explore")
  }

  return (
    <>
      <Container ai="center" gap="$6" py="$8">
        <YStack ai="center">
          <Text fos="$8" fow="600">Welcome Back</Text>
          <Text>Enter your details to sign in to Amourly</Text>
        </YStack>
        <YStack w="$full" gap="$4" ai="flex-end">
          <Input label="Email" />
          <Input label="Password" />
          <Pressable onPress={() => router.push("/forgot-password")}>
            <Text color="$primary" textDecorationLine='underline' p="$2">Forgot Password?</Text>
          </Pressable>
        </YStack>
      </Container>
      <YStack px={PADDING_X} ai="center" py="$8" gap="$4" bg="$bg.1">
        <Button text="Sign in" w="$full" pill onPress={handleSubmit} />
        <XStack gap="$1.5" ai="center">
          <Text>Do not have an account?</Text>
          <Pressable onPress={() => router.push("/register")}>
            <Text color="$primary">Sign up</Text>
          </Pressable>
        </XStack>
      </YStack>
    </>
  )
}

export default Login
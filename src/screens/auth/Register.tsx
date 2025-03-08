import { Button, Input } from '@/components/base'
import { Container } from '@/components/inc'
import { PADDING_X } from '@/constants'
import { router } from 'expo-router'
import React from 'react'
import { Pressable } from 'react-native'
import { Text, XStack, YStack } from 'tamagui'

function Register() {
  const handleSubmit = () => {
    router.push("/verify-account")
  }

  return (
    <>
      <Container ai="center" gap="$6" py="$8">
        <YStack ai="center">
          <Text fos="$8" fow="600">Create an account</Text>
          <Text>Get started by completing our signup process</Text>
        </YStack>
        <YStack w="$full" gap="$4">
          <Input label='First Name' />
          <Input label="Email" />
          <Input label="Password" />
        </YStack>
      </Container>
      <YStack px={PADDING_X} ai="center" py="$8" gap="$4" bg="$bg.1">
        <Button text="Sign up" w="$full" pill onPress={handleSubmit} />
        <XStack gap="$1.5" ai="center">
          <Text>Already have an account?</Text>
          <Pressable onPress={() => router.push("/login")}>
            <Text color="$primary">Sign in</Text>
          </Pressable>
        </XStack>
      </YStack>
    </>
  )
}

export default Register
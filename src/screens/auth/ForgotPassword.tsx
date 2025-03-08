import { Button, Input } from '@/components/base'
import { Container } from '@/components/inc'
import { router } from 'expo-router'
import React from 'react'
import { Text, YStack } from 'tamagui'

function ForgotPassword() {
  const handleSubmit = () => {
    router.push({pathname: "/verify-account", params: {type: "forgot-password"}})
  }

  return (
    <>
      <Container ai="center" gap="$8" py="$8">
        <YStack ai="center">
          <Text fos="$8" fow="600">Forgot Password</Text>
          <Text>
            Enter your email to receive OTP for password reset
          </Text>
        </YStack>
        <YStack w="$full" gap="$2">
          <Input label="Email" placeholder="Enter your Email" />
        </YStack>
        <YStack ai="center" w="$full" gap="$4" bg="$bg.1" mt="$10">
          <Button text="Receive OTP" w="$full" pill onPress={handleSubmit} />
        </YStack>
      </Container>
    </>
  )
}

export default ForgotPassword
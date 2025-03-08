import { Button, Input } from '@/components/base'
import { Container } from '@/components/inc'
import { PADDING_X } from '@/constants'
import { router } from 'expo-router'
import React from 'react'
import { Text, YStack } from 'tamagui'

function ResetPassword() {
  const handleSubmit = () => {
    router.push("/login")
  }

  return (
    <>
      <Container ai="center" gap="$6" py="$8">
        <YStack ai="center">
          <Text fos="$8" fow="600">Reset Password</Text>
          <Text>Create a new password to Sign in</Text>
        </YStack>
        <YStack w="$full" gap="$4" ai="flex-end">
          <Input label="New Password" />
          <Input label="Confirm Password" />
        </YStack>
      </Container>
      <YStack px={PADDING_X} ai="center" py="$8" gap="$4" bg="$bg.1">
        <Button text="Reset Password" w="$full" pill onPress={handleSubmit} />
      </YStack>
    </>
  )
}

export default ResetPassword
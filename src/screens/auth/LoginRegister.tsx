import { userRouter } from './api/mutations'
import { Button, Input } from '@/components/base'
import { Container } from '@/components/inc'
import { PADDING_X } from '@/constants'
import { router } from 'expo-router'
import { useState } from 'react'
import { Text, YStack } from 'tamagui'

function LoginRegister() {
  const [email, setEmail] = useState("")
  const emailRegex = /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/;
  const isValid = emailRegex.test(email)

  const { mutateAsync, isPending } = userRouter.getOTP.useMutation()

  const handleSubmit = () => {
    mutateAsync({data:{email}}).then(() => {
      router.push({pathname: "/verify-account", params: {email}})
    })
  }

  return (
    <>
      <Container gap="$6" py="$8">
        <YStack>
          <Text fos="$8" fow="800">Enter your email</Text>
          <Text>Enter your email address to log into or create an account on Amourly</Text>
        </YStack>
        <YStack w="$full" gap="$4" ai="flex-end">
          <Input value={email} onChangeText={value =>setEmail(value)} placeholder='example@gmail.com' />
        </YStack>
      </Container>
      <YStack px={PADDING_X} ai="center" py="$8" gap="$4" bg="$bg.1">
        <Button text="Continue" w="$full" pill onPress={handleSubmit} disabled={!isValid} isLoading={isPending} />
      </YStack>
    </>
  )
}

export default LoginRegister
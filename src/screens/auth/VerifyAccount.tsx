import { userRouter } from './api/mutations'
import { Button } from '@/components/base'
import { Container } from '@/components/inc'
import { UserContext } from '@/contexts'
import { setAccessToken, showToast } from '@/helpers'
import { router, useLocalSearchParams } from 'expo-router'
import React, { useContext, useEffect, useState } from 'react'
import { Pressable } from 'react-native'
import { OtpInput } from "react-native-otp-entry"
import { Text, XStack, YStack } from 'tamagui'
import { tokens } from 'tokens'

function VerifyAccount() {
  const { setUser } = useContext(UserContext)
  const { email }: { email:string } = useLocalSearchParams()

  const [timer, setTimer] = useState(60)
  const [otp, setOtp] = useState("")

  const { mutateAsync, isPending } = userRouter.verifyOTP.useMutation()

  useEffect(() => {
    const updateCountdown = () => setTimer(prev => prev < 1 ? 0 : prev - 1)
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, [])

  const handleResendOTP = () => {
    showToast("OTP resent successfully")
    setTimer(60)
  }

  const handleSubmit = () => {
    const data = {email, otp}
    mutateAsync({data}).then((res) => {
      setAccessToken(res.token)
      const data = res.userData
      setUser(data)
      router.push("/profile-setup")
    })
  }

  return (
    <>
      <Container ai="center" gap="$8" py="$8">
        <YStack ai="center">
          <Text fos="$8" fow="600">Verify your account</Text>
          <Text>
            Enter the OTP sent to{" "}
            <Text fow="500">{email}</Text>
          </Text>
        </YStack>
        <YStack w="$full" gap="$2">
          <OtpInput
            numberOfDigits={6}
            onTextChange={(text) => setOtp(text)}
            focusColor={tokens.color.primary}
            theme={{
              containerStyle: {
                justifyContent: 'center',
                gap: 10
              },
              pinCodeContainerStyle: {
                flex: 1
              }
            }}
          />
        </YStack>
        <YStack ai="center" w="$full" gap="$4" bg="$bg.1">
          <Button text="Continue" w="$full" pill onPress={handleSubmit} isLoading={isPending} />
          <XStack gap="$2" ai="center">
            <Text fos="$5" fow="300">Didn't receive any OTP?</Text>
            {timer > 0 ? (
              <XStack gap="$2">
                <Text color="$grey.2" fow="300">Resend in</Text>
                <Text>
                  {timer === 60 ? "01:" : "00:"}
                  {timer === 60 ? "00" : timer < 10 ? `0${timer}` : timer}
                </Text>
              </XStack>
            ) : (
              <Pressable onPress={handleResendOTP}>
                <Text fos="$5" color="$primary" textDecorationLine='underline' fow="300">Resend OTP</Text>
              </Pressable>
            )}
          </XStack>
        </YStack>
      </Container>
    </>
  )
}

export default VerifyAccount
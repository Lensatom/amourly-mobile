import { Button } from '@/components/base'
import { Container } from '@/components/inc'
import { router, useLocalSearchParams } from 'expo-router'
import React, { useEffect, useState } from 'react'
import { Pressable, ToastAndroid } from 'react-native'
import { OtpInput } from "react-native-otp-entry"
import { Text, XStack, YStack } from 'tamagui'
import { tokens } from 'tokens'

function VerifyAccount() {
  const { type } = useLocalSearchParams()

  const [timer, setTimer] = useState(60)

  useEffect(() => {
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, [])

  const updateCountdown = () => {
    if (timer < 1) return
    setTimer(prev => prev - 1)
  }

  const handleResentOTP = () => {
    ToastAndroid.showWithGravityAndOffset(
      "OTP resent successfully",
      ToastAndroid.LONG,
      ToastAndroid.BOTTOM,
      25,
      50,
    )
    setTimer(60)
  }

  const handleSubmit = () => {
    if (type === "forgot-password") {
      router.push("/reset-password")
    } else {
      router.push("/profile-setup")
    }
  }

  return (
    <>
      <Container ai="center" gap="$8" py="$8">
        <YStack ai="center">
          <Text fos="$8" fow="600">Verify your account</Text>
          <Text>
            Enter the OTP sent to 
            <Text fow="500">desiredestiny@gmail.com</Text>
          </Text>
        </YStack>
        <YStack w="$full" gap="$2">
          <OtpInput
            numberOfDigits={6}
            onTextChange={(text) => console.log(text)}
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
          <Button text="Continue" w="$full" pill onPress={handleSubmit} />
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
              <Pressable onPress={handleResentOTP}>
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
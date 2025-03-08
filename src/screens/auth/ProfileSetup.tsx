import { Container } from '@/components/inc'
import React, { useState } from 'react'
import { Birthday, Hobbies, Intentions, Location, Preferences, UploadPhotos } from './components'
import { Button } from '@/components/base'
import { View, XStack } from 'tamagui'
import { PADDING_X } from '@/constants'

function ProfileSetup() {
  const [step, setStep] = useState(1)

  const components = [
    <Birthday />,
    <Preferences />,
    <Intentions />,
    <Location />,
    <UploadPhotos />,
    <Hobbies />
  ]

  const handleNext = () => {
    if (step === components.length) {
      // next page
    } else {
      setStep(prev => prev + 1)
    }
  }
  
  return (
    <>
      <Container gap="$6">
        <XStack gap="$2">
          {Array.from(Array(components.length).keys()).map((item) => <View key={item} flex={1} bg={step > item ? "$primary" : "$grey.5"} h={8} br={99} />)}
        </XStack>
        <></>
        {components[step - 1]}
      </Container>
      <View px={PADDING_X} py="$6" bg="$bg.1">
        <Button text="Next" w="$full" pill onPress={handleNext} />
      </View>
    </>
  )
}

export default ProfileSetup
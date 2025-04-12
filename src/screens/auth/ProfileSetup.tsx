import { Container } from '@/components/inc'
import React, { useContext, useMemo, useState } from 'react'
import { Birthday, Hobbies, Intentions, Location, Preferences, UploadPhotos } from './components'
import { Button } from '@/components/base'
import { View, XStack } from 'tamagui'
import { PADDING_X } from '@/constants'
import { router } from 'expo-router'
import { UserContext } from '@/contexts'

function ProfileSetup() {
  const { user } = useContext(UserContext)

  const getStep = () => {
    if (user?.birthday) return 2
    if (user?.preferences) return 3
    if (user?.intentions) return 4
    if (user?.location) return 5
    if (user?.photos?.length > 0) return 6
    return 1
  }
  const [step, setStep] = useState(getStep())

  const components = useMemo(() => [
    { key: 'birthday', component: <Birthday /> },
    { key: 'preferences', component: <Preferences /> },
    { key: 'intentions', component: <Intentions /> },
    { key: 'location', component: <Location /> },
    { key: 'uploadPhotos', component: <UploadPhotos /> },
    { key: 'hobbies', component: <Hobbies /> }
  ], [])


  const handleNext = () => {
    setStep(prev => {
      if (prev === components.length) {
        router.push("/explore")
        return prev
      }
      return prev + 1
    })
  }
  
  return (
    <>
      <Container gap="$6">
        <XStack gap="$2" mt="$4">
          {Array.from(Array(components.length).keys()).map((item) => (
            <View key={item} flex={1} bg={step > item ? "$primary" : "$grey.5"} h={8} br={99} />
          ))}
        </XStack>
        {components[step - 1].component}
      </Container>
      <View px={PADDING_X} py="$6" bg="$bg.1">
        <Button text="Next" w="$full" pill onPress={handleNext} />
      </View>
    </>
  )
}

export default ProfileSetup
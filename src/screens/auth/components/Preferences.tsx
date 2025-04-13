import { MultiSelect, SingleSelect, Title } from '@/components/inc'
import React from 'react'
import { Text } from 'tamagui'
import { YStack } from 'tamagui'

function Preferences({data, changeData}:any) {
  return (
    <YStack gap="$4">
      <Title text="Preferences" />
      <YStack gap="$3">
        <Text fow="500">What is your gender?</Text>
        <SingleSelect opts={["male", "female"]} onChange={(value:string) => changeData("gender", value)} />
      </YStack>
      <YStack gap="$3">
        <Text fow="500">Who are you looking for?</Text>
        <MultiSelect opts={["Male", "Female"]} onChange={(value:string[]) => changeData("gender_pref", value)} />
      </YStack>
      <YStack>
        <Text fow="500">What age range are you interested in?</Text>
      </YStack>
    </YStack>
  )
}

export default Preferences
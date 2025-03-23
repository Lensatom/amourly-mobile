import { Title } from '@/components/inc'
import React from 'react'
import { YStack } from 'tamagui'
import DatePicker from 'react-date-picker'

function Birthday() {
  return (
    <YStack gap="$4">
      <Title text="When is your birthday?" />
      {/* <DatePicker /> */}
    </YStack>
  )
}

export default Birthday
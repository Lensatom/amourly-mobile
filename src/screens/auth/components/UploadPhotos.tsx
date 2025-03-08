import { Title } from '@/components/inc'
import React from 'react'
import { Text, YStack } from 'tamagui'

function UploadPhotos() {
  return (
    <YStack>
      <YStack>
        <Title text="Upload your Photos" />
        <Text>
          Upload at least 2 photos, but you can add 4 more to make your profile stand out.
        </Text>
      </YStack>
    </YStack>
  )
}

export default UploadPhotos
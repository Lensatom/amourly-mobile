import { Button } from '@/components/base'
import { Container, Header } from '@/components/inc'
import React from 'react'
import { Text } from 'tamagui'

function UpdatePhotos() {
  return (
    <>
      <Header title="Update Photos" />
      <Container gap="$4">
        <Text lh={20} mt="$4">
          The first image will be your main display image, but adding more photos makes your profile stand out.
        </Text>
        <Button text="Update Photos" pill mt="$6" />
      </Container>
    </>
  )
}

export default UpdatePhotos
import { Switch } from '@/components/base'
import { Container, Header } from '@/components/inc'
import React, { useState } from 'react'
import { Text } from 'tamagui'
import { XStack } from 'tamagui'

function AccountSettings() {
  // State for the toggles
  const [activityStatus, setActivityStatus] = useState(true)
  const [notifications, setNotifications] = useState(true)
  const [useLocation, setUseLocation] = useState(true)

  return (
    <>
      <Header title="Account Settings" />
      <Container pt="$4">
        <XStack jc="space-between" borderBottomWidth={1} borderColor="$grey.3" py="$3.5">
          <Text fos="$5">Activity Status</Text>
          <Switch isChecked={activityStatus} onCheckedChange={() => setActivityStatus(prev => !prev)} />
        </XStack>
        <XStack jc="space-between" borderBottomWidth={1} borderColor="$grey.3" py="$3.5">
          <Text fos="$5">Notifications</Text>
          <Switch isChecked={notifications} onCheckedChange={() => setNotifications(prev => !prev)} />
        </XStack>
        <XStack jc="space-between" borderBottomWidth={1} borderColor="$grey.3" py="$3.5">
          <Text fos="$5">Use Location</Text>
          <Switch isChecked={useLocation} onCheckedChange={() => setUseLocation(prev => !prev)} />
        </XStack>
      </Container>
    </>
  )
}

export default AccountSettings
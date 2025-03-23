import { Avatar, Icon } from '@/components/base'
import { IconType } from '@/components/base/Icon'
import { BoostContent, Carousel, Container } from '@/components/inc'
import { PADDING_X, SCREEN_WIDTH } from '@/constants'
import { useBottomSheet } from '@/hooks'
import { TrueSheet } from '@lodev09/react-native-true-sheet'
import { router } from 'expo-router'
import React from 'react'
import { Pressable } from 'react-native'
import { Text, View, XStack, YStack } from 'tamagui'

function Profile() {
  const { present:presentBoost, sheetRef:boostSheetRef } = useBottomSheet()

  return (
    <>
      <XStack px={PADDING_X} py="$3" bg="$primary.9">
        {/* <StatusBar barStyle="light-content" backgroundColor={getTokens().color['$primary.9'].val} /> */}
        <Text fos="$8" fow="600" color="white" fontFamily="$heading">Profile</Text>
      </XStack>
      <Container ai="center" bg="$primary.9">
        <View bg="$primary.9" h={200} w={SCREEN_WIDTH}></View>
        <YStack bg="$bg.1" w={SCREEN_WIDTH} px={PADDING_X} ai="center" gap="$2">
          <View mt={-175}>
            <Avatar size={250} url="https://img.freepik.com/free-photo/left-sideways-american-black-person_23-2148749585.jpg" />
            <View pos="absolute" bottom="$2" right="$4" br={99} style={{
              elevation: 10,
              shadowColor: "#B4090940",
              borderRadius: 99,
              backgroundColor: "white"
            }}>
              <Pressable onPress={() => router.push("/profile/update-photos")}>
                <Icon name="red_pen" bg="$bg.1" size={28} />
              </Pressable>
            </View>
          </View>
          <YStack ai="center">
            <Text color="$grey.9" fos="$9" fow="800">Jason</Text>
            <Text color="$grey.6" fos="$3">Date  &bull;  21yrs  &bull;  London</Text>
          </YStack>
          <XStack ai="center" gap="$2.5" borderWidth={1} px="$3" py="$2" br={99} borderColor="$grey.5">
            <Text fos="$1" color={"$primary.7"}>Your Profile is 24% Complete</Text>
            <Icon name="arrow_greater" padding={0} size={10} />
          </XStack>

          <View w="$full" py="$4">
            <Carousel />
          </View>
          
          <YStack w="$full">
            <Pressable onPress={presentBoost}>
              <ProfileItem iconName="boost_bolt" title="Boosts" qty={2} />
            </Pressable>
            <Pressable onPress={() => router.push("/profile/profile-details")}>
              <ProfileItem iconName='heart_eyes' title="Profile Details" />
            </Pressable>
            <Pressable onPress={() => router.push("/profile/customer-support")}>
              <ProfileItem iconName='mailbox' title="Customer Support" />
            </Pressable>
            <Pressable onPress={() => router.push("/profile/account-settings")}>
              <ProfileItem iconName='gear' title="Account Settings" />
            </Pressable>
            <ProfileItem iconName='logout_box_line' title="Log out" />
          </YStack>

          <Text py="$6" textDecorationLine='underline' color="$primary.9">Delete Account</Text>
        </YStack>
      </Container>

      <TrueSheet
        ref={boostSheetRef}
        sizes={['90%']}
        cornerRadius={40}
      >
        <BoostContent />
      </TrueSheet>
    </>
  )
}

const ProfileItem = ({
  iconName,
  title,
  qty,
}:{
  iconName: IconType;
  title: string;
  qty?: number
}) => {
  return (
    <XStack ai="center" jc="space-between" borderBottomWidth={1} borderColor="$grey.3" py="$3">
      <XStack ai="center">
        <Icon name={iconName} size={25} />
        <Text fos="$6">{title}</Text>
      </XStack>
      <XStack ai="center" gap="$2">
        {qty && <Text fos="$6" color="$primary.9">{qty}</Text>}
        <Icon name="arrow_greater" padding={5} size={14} />
      </XStack>
    </XStack>
  )
}

export default Profile
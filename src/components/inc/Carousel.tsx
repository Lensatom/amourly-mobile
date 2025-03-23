import { useBottomSheet } from '@/hooks'
import { TrueSheet } from '@lodev09/react-native-true-sheet'
import React, { useState } from 'react'
import { Pressable } from 'react-native'
import { Image, Text, YStack } from 'tamagui'
import { View } from 'tamagui'
import { Button, Icon } from '../base'
import { XStack } from 'tamagui'
import { PADDING_X } from '@/constants'

const PremiumCard = require("../../../assets/images/premium-card.png")

function Carousel() {
  const { present:presentSheet, sheetRef } = useBottomSheet()

  const [planSelected, setPlanSelected] = useState<number>()

  const premiumPlans = [
    {
      id: 1,
      duration: "1 Month",
      price: 18,
      description: "Buy 5 boosts to use at any time."
    },
    {
      id: 2,
      duration: "3 Months",
      price: 30,
      slashed_price: 60,
      description: "Buy 8 boosts to use at any time."
    },
    {
      id: 3,
      duration: "1 Year",
      price: 65,
      slashed_price: 216,
      description: "Buy 12 boosts to use at any time."
    }
  ]

  return (
    <>
      <View w="$full">
        <Pressable onPress={presentSheet}>
          <Image source={PremiumCard} width={"100%"} resizeMode='contain' py={0} my={0} h={100} />
        </Pressable>
      </View>

      <TrueSheet
        ref={sheetRef}
        sizes={["80%"]}
        cornerRadius={24}
      >
        <View h="$full" px={PADDING_X}>
          <View h="45%"></View>
          <YStack gap="$3">
            {premiumPlans.map((plan) => {
              const isSelected = plan.id === planSelected
              return (
                <Pressable onPress={() => setPlanSelected(plan.id)}>
                  <View w="$full" borderWidth={1} borderColor={isSelected ? "$primary" : "$grey.5"} p="$3" br="$4" bg={isSelected ? "$primary.1" : "white"}>
                    <XStack jc="space-between">
                      <XStack gap="$2" ai="center">
                        <View borderColor={isSelected ? "$primary.5" : "$grey.6"} borderWidth={2} w="$2" h="$2" p="$1.5" br={99}>
                          <View br={99} w="$full" h="$full" bg={isSelected ? "$primary" : "white"}></View>
                        </View>
                        <Text fos="$7" ml="$1">{plan.duration}</Text>
                        {plan.slashed_price && (
                          <Text bg={isSelected ? "$primary" : "$teal.3"} px="$2.5" py="$1.5" br={99} color="white" fos={11}>Save {Math.round((plan.price / plan.slashed_price) * 100)}%</Text>
                        )}
                      </XStack>
                      <Text fos="$8" ml="$1" fow="800" color="$grey.8">${plan.price}</Text>
                    </XStack>
                    <XStack jc="space-between" ai="center">
                      <Text fos="$2" color="$grey.8">{plan.description}</Text>
                      {plan.slashed_price && <Text textDecorationLine='line-through' color="$grey.6">${plan.slashed_price}</Text>}
                    </XStack>
                  </View>
                </Pressable>
              )
            })}
          </YStack>
          {planSelected && (
            <Button sm pill w="$full" h={55} mt="$6" disabled={!!!planSelected}>
              <Text color="white" fos="$6">Get {premiumPlans[planSelected - 1]?.duration}</Text>
              <Icon name="boost_bolt" padding={0} />
            </Button>
          )}
        </View>
      </TrueSheet>
    </>


  )
}

export default Carousel
import { PADDING_X, SCREEN_HEIGHT } from '@/constants';
import React, { useState } from 'react';
import { Pressable } from 'react-native';
import { Text, View, XStack } from 'tamagui';
import { Button, Icon } from '../base';
import { useBottomSheet } from '@/hooks';

function BoostContent() {
  const [planSelected, setPlanSelected] = useState<number>()
  
  const boostPlans = [
    {
      id: 1,
      boosts: 5,
      price: 10,
      slashed_price: 15,
      description: "Buy 5 boosts to use at any time."
    },
    {
      id: 2,
      boosts: 8,
      price: 16,
      slashed_price: 24,
      description: "Buy 8 boosts to use at any time."
    },
    {
      id: 3,
      boosts: 12,
      price: 24,
      slashed_price: 36,
      description: "Buy 12 boosts to use at any time."
    }
  ]

  return (
    <View h={SCREEN_HEIGHT} w="$full" ai="center" pt="$6" px={PADDING_X} gap="$2">
      <View borderStyle='dashed' borderColor="#6EF7EE" borderWidth={2} br={99}>
        <Icon name="boost_bolt" size={50} padding={30} />
      </View>
      <Text fos="$8">Boost your profile</Text>
      <Text ta="center" fos="$3" px="$4" color="$grey.8">
        Boost your profile to get 5X more visibility, profile visitors, and likes.
      </Text>
      <View w="$full" gap="$4" mt="$10">
        {boostPlans.map((plan) => {
          const isSelected = plan.id === planSelected
          return (
            <Pressable onPress={() => setPlanSelected(plan.id)}>
              <View w="$full" borderWidth={1} borderColor={isSelected ? "$primary" : "$grey.5"} p="$3" br="$4" bg={isSelected ? "$primary.1" : "white"}>
                <XStack jc="space-between">
                  <XStack gap="$2" ai="center">
                    <View borderColor={isSelected ? "$primary.5" : "$grey.6"} borderWidth={2} w="$2" h="$2" p="$1.5" br={99}>
                      <View br={99} w="$full" h="$full" bg={isSelected ? "$primary" : "white"}></View>
                    </View>
                    <Text fos="$8" ml="$1">{plan.boosts}</Text>
                    <Icon name="boost_bolt" padding={0} />
                  </XStack>
                  <Text fos="$8" ml="$1" fow="800" color="$grey.8">${plan.price}</Text>
                </XStack>
                <XStack jc="space-between" ai="center">
                  <Text fos="$3" color="$grey.8">{plan.description}</Text>
                  <Text textDecorationLine='line-through' color="$grey.6">${plan.slashed_price}</Text>
                </XStack>
              </View>
            </Pressable>
          )
        })}
      </View>
      <Button sm pill w="$full" h={55} mt="$6" disabled={!!!planSelected}>
        <Text color="white" fos="$6">Buy 5</Text>
        <Icon name="boost_bolt" padding={0} />
      </Button>
    </View>
  )
}

export default BoostContent
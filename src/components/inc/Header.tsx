import { PADDING_X } from '@/constants';
import { router } from 'expo-router';
import React from 'react';
import { Pressable } from 'react-native';
import { Text, View, XStack } from 'tamagui';
import { Icon } from '../base';

interface Props {
  title?: string
}

export function Header({
  title
}:Props) {
  return (
    <XStack gap="$6" ai="center" jc="center" h="$6" bg="$bg.1">
      <View pos="absolute" left={PADDING_X}>
        <BackButton />
      </View>
      <Text color="$primary" fos="$6" fow="800">{title}</Text>
    </XStack>
  );
}

export const BackButton = () => {
  return (
    <Pressable onPress={() => router.back()}>
      <Icon name="arrow_lesser" size={16} padding={25} bg="$primary.2" />
    </Pressable>
  )
}
import { PADDING_X } from '@/constants';
import { router } from 'expo-router';
import React from 'react';
import { Pressable } from 'react-native';
import { Text, XStack } from 'tamagui';
import { Icon } from '../base';

interface Props {
  title?: string
}

function Header({
  title
}:Props) {
  return (
    <XStack gap="$6" ai="center" jc="center" h="$6" bg="$bg.1">
      <Pressable onPress={() => router.back()} style={{position: 'absolute', left: PADDING_X}}>
        <Icon name="arrow_lesser" size={16} padding={25} bg="$primary.2" />
      </Pressable>
      <Text color="$primary" fos="$6" fow="800">{title}</Text>
    </XStack>
  );
}

export default Header;
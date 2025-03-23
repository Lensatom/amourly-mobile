import { PADDING_X } from '@/constants';
import { useBottomSheet } from '@/hooks';
import { TrueSheet } from '@lodev09/react-native-true-sheet';
import React, { ComponentProps, useState } from 'react';
import { Pressable, SafeAreaView, StatusBar } from 'react-native';
import { getTokens, ScrollView, View, XStack, YStack } from 'tamagui';
import { Icon } from '../base';
import BoostContent from './BoostContent';

interface Props extends ComponentProps<typeof View> {
  children: React.ReactNode;
  main?: boolean;
  axis?: 'x' | 'y';
  canScroll?: boolean;
  withBoost?: boolean
}

function Container({
  children,
  main,
  axis = 'y',
  canScroll = true,
  bg="$bg.1",
  withBoost,
  ...rest
}: Props) {
  const TagName = axis === 'y' ? YStack : XStack;

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: getTokens().color[bg].val }}>
      <StatusBar barStyle="dark-content" backgroundColor={getTokens().color[bg].val} />
      {canScroll ? (
        <>
          <ScrollView
            contentContainerStyle={{ flexGrow: 1 }}
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}>
              <>
                <TagName style={{ flex: 1 }} paddingHorizontal={PADDING_X} {...rest}>
                  {children}
                </TagName>
              </>
          </ScrollView>
          {withBoost && <Boost />}
        </>
      ) : (
        <>
        <TagName style={{ flex: 1, paddingHorizontal: PADDING_X }} {...rest}>
          {children}
        </TagName>
        {withBoost && <Boost />}
        </>
      )}
    </SafeAreaView>
  );
}

const Boost = () => {
  const { present:presentBoost, sheetRef:boostSheetRef } = useBottomSheet()

  return (
    <>
      <Pressable onPress={presentBoost}>
        <View pos="absolute" right={PADDING_X} bottom="$10" borderStyle='dashed' borderColor="#6EF7EE" borderWidth={2} br={99} style={{
          elevation: 10,
          shadowColor: "#333333EE",
          borderRadius: 99,
          backgroundColor: "white"
        }}>
          <Icon name="boost_bolt" bg="$primary" size={40} />
        </View>
      </Pressable>
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

export default Container;
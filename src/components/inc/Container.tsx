import { PADDING_X } from '@/constants';
import React, { ComponentProps } from 'react';
import { SafeAreaView } from 'react-native';
import { getTokens, ScrollView, View, XStack, YStack } from 'tamagui';

interface Props extends ComponentProps<typeof View> {
  children: React.ReactNode;
  main?: boolean;
  axis?: 'x' | 'y';
  canScroll?: boolean;
}

function Container({
  children,
  main,
  axis = 'y',
  canScroll = true,
  bg="$bg.1",
  ...rest
}: Props) {
  const TagName = axis === 'y' ? YStack : XStack;

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: getTokens().color[bg].val }}>
      {canScroll ? (
        <ScrollView
          contentContainerStyle={{ flexGrow: 1 }}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}>
          <TagName style={{ flex: 1 }} paddingHorizontal={PADDING_X} {...rest}>
            {children}
          </TagName>
        </ScrollView>
      ) : (
        <TagName style={{ flex: 1, paddingHorizontal: PADDING_X }} {...rest}>
          {children}
        </TagName>
      )}
    </SafeAreaView>
  );
}

export default Container;
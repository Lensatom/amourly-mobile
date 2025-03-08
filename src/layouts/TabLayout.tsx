import { Icon } from '@/components/base';
import { Tabs } from 'expo-router';
import { Platform } from 'react-native';
import { getTokens } from 'tamagui';

export const TAB_BAR_HEIGHT = Platform.OS === 'ios' ? 78 : 64

export default function TabLayout() {

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: getTokens().color['$primary'].val,
        tabBarInactiveTintColor: getTokens().color['$grey.1'].val,
        tabBarStyle: {
          height: TAB_BAR_HEIGHT,
          paddingBottom: 4,
        },
        tabBarLabelStyle: {
          fontFamily: 'Inter',
          fontSize: 12,
        },
      }}
      initialRouteName='explore'
      >
      <Tabs.Screen
        name="explore"
        options={{
          href: '/explore',
          title: 'Explore',
          tabBarIcon: ({ focused }) => <Icon name={focused ? "explore_active" : "explore"} />,
        }}
      />
      <Tabs.Screen
        name="chats"
        options={{
          href: '/chats',
          title: 'Chats',
          tabBarIcon: ({ focused }) => <Icon name={focused ? "chats_active" : "chats"} />,
        }}
      />
      <Tabs.Screen
        name="likes"
        options={{
          href: '/likes',
          title: 'Likes',
          tabBarIcon: ({ focused }) => <Icon name={focused ? "likes_active" : "likes"} />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          href: '/profile',
          title: 'Profile',
          tabBarIcon: ({ focused }) => <Icon name={focused ? "profile_active" : "profile"} />,
        }}
      />
    </Tabs>
  );
}

import React from 'react';
import { withLayoutContext } from 'expo-router';
import { createNativeBottomTabNavigator } from '@bottom-tabs/react-navigation';
import TabLayoutJS from './TabLayout.web';

import { Platform } from 'react-native';
import { colors } from '@/constants/Theme';
import { useColorScheme } from 'nativewind';

export const Tabs = withLayoutContext(
  createNativeBottomTabNavigator().Navigator,
);

export default function TabLayout() {
  const { colorScheme } = useColorScheme();
  const themedColors = colors[colorScheme ?? 'light'];

  if (Platform.OS === 'android') {
    return <TabLayoutJS />;
  }
  return (
    <Tabs
      tabBarActiveTintColor={themedColors.tabIconSelected}
      tabBarInactiveTintColor={themedColors.text}
      tabBarStyle={{
        backgroundColor: themedColors.background,
      }}
      rippleColor={themedColors.tint}
      labeled={true}
      translucent
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: () =>
            Platform.OS === 'android'
              ? require('@/assets/bar_icons/home.png')
              : null,
        }}
      />
      <Tabs.Screen
        name="tvdemo"
        options={{
          title: 'TV styling demo',
          tabBarIcon: () =>
            Platform.OS === 'android'
              ? require('@/assets/bar_icons/tv.png')
              : null,
        }}
      />
    </Tabs>
  );
}

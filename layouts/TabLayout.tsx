import React from 'react';
import { withLayoutContext } from 'expo-router';
import { createNativeBottomTabNavigator } from '@bottom-tabs/react-navigation';
import TabLayoutJS from './TabLayout.web';

import { Platform } from 'react-native';
import { lightColors, darkColors } from '@/constants/Theme';
import { useColorScheme } from 'nativewind';

export const Tabs = withLayoutContext(
  createNativeBottomTabNavigator().Navigator,
);

export default function TabLayout() {
  const { colorScheme } = useColorScheme();
  const themedColors = colorScheme === 'dark' ? darkColors : lightColors;

  if (Platform.OS === 'android') {
    return <TabLayoutJS />;
  }
  return (
    <Tabs
      tabBarActiveTintColor={themedColors['--color-tab-icon-selected']}
      tabBarInactiveTintColor={themedColors['--color-tab-icon-default']}
      tabBarStyle={{
        backgroundColor: themedColors['--color-background'],
      }}
      rippleColor={themedColors['--color-special']}
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
          title: 'Focus/hover/active styles',
          tabBarIcon: () =>
            Platform.OS === 'android'
              ? require('@/assets/bar_icons/tv.png')
              : null,
        }}
      />
    </Tabs>
  );
}

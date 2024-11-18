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

/**
 * The tab bar for the app.
 * For Android TV, we return the web version.
 * For other native platforms, we use the native tab bar provided by react-native-bottom-tabs.
 */
export default function TabLayout() {
  const { colorScheme } = useColorScheme();
  const themedColors = colorScheme === 'light' ? lightColors : darkColors;

  if (Platform.OS === 'android' && Platform.isTV) {
    return <TabLayoutJS />;
  }
  return (
    <Tabs
      tabBarActiveTintColor={themedColors['--color-tint']}
      tabBarInactiveTintColor={themedColors['--color-text']}
      tabBarStyle={{
        backgroundColor: themedColors['--color-background'],
      }}
      translucent
      rippleColor={themedColors['--color-background']}
      labeled={true}
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
      <Tabs.Screen
        name="video"
        options={{
          title: 'Video',
          tabBarIcon: () =>
            Platform.OS === 'android'
              ? require('@/assets/bar_icons/tv.png')
              : null,
        }}
      />
    </Tabs>
  );
}

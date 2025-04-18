import {
  Tabs,
  TabSlot,
  TabList,
  TabTrigger,
  TabTriggerSlotProps,
} from 'expo-router/ui';
import React from 'react';

import '@/global.css';
import { ThemedButton } from '@/components/ThemedButton';
import { View } from 'react-native';

function CustomTabButton(props: TabTriggerSlotProps & { children: string }) {
  return (
    <View className="flex-1 justify-center items-center">
      <ThemedButton
        textClassName={
          props.isFocused
            ? 'text-[3vh] text-[--color-tint]'
            : 'text-[3vh] text-[--color-text]'
        }
        {...props}
      >
        {props.children}
      </ThemedButton>
    </View>
  );
}
CustomTabButton.displayName = 'CustomTabButton';

export default function TabLayout() {
  return (
    <Tabs>
      <TabList className="flex flex-row absolute top-0 width-full h-[10vh] bg-[--color-background]">
        <TabTrigger name="index" href="/" asChild>
          <CustomTabButton>Home</CustomTabButton>
        </TabTrigger>
        <TabTrigger name="tvdemo" href="/(tabs)/tvdemo" asChild>
          <CustomTabButton>Focus/hover/active styles</CustomTabButton>
        </TabTrigger>
      </TabList>
      <TabSlot />
    </Tabs>
  );
}

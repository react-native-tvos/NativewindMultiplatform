import { NativeTabs } from 'expo-router/unstable-native-tabs';
import { Platform } from 'react-native';

import WebTabLayout from './TabLayout.web';

export default function TabLayout() {
  if (Platform.OS === 'android' && Platform.isTV) {
    return <WebTabLayout />;
  }
  return (
    <NativeTabs>
      <NativeTabs.Trigger name="index">
        <NativeTabs.Trigger.Label>Home</NativeTabs.Trigger.Label>
        <NativeTabs.Trigger.Icon sf="house" />
      </NativeTabs.Trigger>
      <NativeTabs.Trigger name="tvdemo">
        <NativeTabs.Trigger.Label>
          Focus/hover/active styles
        </NativeTabs.Trigger.Label>
        <NativeTabs.Trigger.Icon sf="tv.fill" />
      </NativeTabs.Trigger>
      <NativeTabs.Trigger name="video">
        <NativeTabs.Trigger.Label>Video</NativeTabs.Trigger.Label>
        <NativeTabs.Trigger.Icon sf="video" />
      </NativeTabs.Trigger>
      <NativeTabs.Trigger name="legendlistdemo">
        <NativeTabs.Trigger.Label>LegendList</NativeTabs.Trigger.Label>
        <NativeTabs.Trigger.Icon sf="list.bullet" />
      </NativeTabs.Trigger>
    </NativeTabs>
  );
}

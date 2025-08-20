import { NativeTabs, Label, Icon } from 'expo-router/unstable-native-tabs';
import { Platform } from 'react-native';

import WebTabLayout from './TabLayout.web';

export default function TabLayout() {
  if (Platform.OS === 'android' && Platform.isTV) {
    return <WebTabLayout />;
  }
  return (
    <NativeTabs>
      <NativeTabs.Trigger name="index">
        <Label>Home</Label>
        <Icon sf="house" />
      </NativeTabs.Trigger>
      <NativeTabs.Trigger name="tvdemo">
        <Label>Focus/hover/active styles</Label>
        <Icon sf="tv.fill" />
      </NativeTabs.Trigger>
      <NativeTabs.Trigger name="video">
        <Label>Video</Label>
        <Icon sf="video" />
      </NativeTabs.Trigger>
    </NativeTabs>
  );
}

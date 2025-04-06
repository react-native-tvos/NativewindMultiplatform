import { View } from 'react-native';

import { reactNativeInfo } from '@/constants/ReactNativeInfo';
import { ExternalLink } from '@/components/ExternalLink';
import { ThemedText } from '@/components/ThemedText';

export default function Modal() {
  const { rnVersion, routerVersion, nativewindVersion } = reactNativeInfo;
  // If the page was reloaded or navigated to directly, then the modal should be presented as
  // a full screen page. You may need to change the UI to account for this.
  return (
    <View className="flex-1 items-start justify-center ml-[4vh]">
      <View className="mb-[4vh]">
        <ThemedText type="title">About this demo</ThemedText>
      </View>
      <ThemedText>{`expo-router: ${routerVersion}`}</ThemedText>
      <ThemedText>{`react-native-tvos: ${rnVersion}`}</ThemedText>
      <ThemedText>{`nativewind: ${nativewindVersion}`}</ThemedText>
      <ExternalLink href="https://github.com/react-native-tvos/NativewindMultiplatform">
        <View className="flex-row mb-[2vh]">
          <ThemedText>Repository:</ThemedText>
          <View className="ml-[2vw]">
            <ThemedText type="link">
              https://github.com/react-native-tvos/NativewindMultiplatform
            </ThemedText>
          </View>
        </View>
      </ExternalLink>
      {/* Use `../` as a simple way to navigate to the root. This is not analogous to "goBack". */}
      <ExternalLink href="/">
        <ThemedText type="link">Dismiss</ThemedText>
      </ExternalLink>
    </View>
  );
}

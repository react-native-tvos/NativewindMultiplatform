import { View } from 'react-native';

import { reactNativeInfo } from '@/constants/ReactNativeInfo';
import { Link } from '@/components/Link';
import { ThemedText } from '@/components/ThemedText';

import '../global.css';
import { useTheme } from '@/hooks/useTheme';

export default function Modal() {
  const theme = useTheme();
  const { rnVersion, routerVersion, nativewindVersion } = reactNativeInfo;
  // If the page was reloaded or navigated to directly, then the modal should be presented as
  // a full screen page. You may need to change the UI to account for this.
  return (
    <View
      style={theme}
      className="flex-1 items-start justify-center pl-[4vh] bg-[--color-background]"
    >
      <View className="mb-[4vh]">
        <ThemedText type="title">About this demo</ThemedText>
      </View>
      <ThemedText>{`expo-router: ${routerVersion}`}</ThemedText>
      <ThemedText>{`react-native-tvos: ${rnVersion}`}</ThemedText>
      <ThemedText>{`nativewind: ${nativewindVersion}`}</ThemedText>
      <Link href="https://github.com/react-native-tvos/NativewindMultiplatform">
        https://github.com/react-native-tvos/NativewindMultiplatform
      </Link>
      <Link href="../">Dismiss</Link>
    </View>
  );
}

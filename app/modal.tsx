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
      className="flex-1 m-0 items-start justify-center bg-[--color-background]"
    >
      <View className="w-[90%] ml-[5%] mr-[5%] mb-[4vh] p-[1vh] border-b-hairline border-[--color-link] items-center">
        <ThemedText type="link">About this demo</ThemedText>
      </View>
      <View className="w-[90%] ml-[5%] mr-[5%] mb-[4vh]">
        <ThemedText className="!text-[3vh]">{`expo-router: ${routerVersion}`}</ThemedText>
        <ThemedText className="!text-[3vh]">{`react-native-tvos: ${rnVersion}`}</ThemedText>
        <ThemedText className="!text-[3vh]">{`nativewind: ${nativewindVersion}`}</ThemedText>
        <Link href="https://github.com/react-native-tvos/NativewindMultiplatform">
          https://github.com/react-native-tvos/NativewindMultiplatform
        </Link>
        <Link href="../">Dismiss</Link>
      </View>
    </View>
  );
}

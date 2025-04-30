import { Platform, View } from 'react-native';

import { reactNativeInfo } from '@/constants/ReactNativeInfo';
import { ThemedLink } from '@/components/ThemedLink';
import { ThemedText, ThemedTextType } from '@/components/ThemedText';

import '../global.css';
import { useTheme } from '@/hooks/useTheme';
import { useRouter } from 'expo-router';

export default function About() {
  const { expoVersion, rnVersion, routerVersion, nativewindVersion } =
    reactNativeInfo;
  const theme = useTheme();
  const router = useRouter();
  const homePageLink =
    Platform.OS === 'web' && !router.canGoBack() ? '/' : '../';

  return (
    <View
      style={theme}
      className="flex-1 m-0 items-start justify-center bg-[--color-background]"
    >
      <View className="w-[90%] ml-[5%] mr-[5%] mb-[4vh] p-[1vh] border-b-hairline border-[--color-tint] items-center">
        <ThemedText type={ThemedTextType.link}>About this demo</ThemedText>
      </View>
      <View className="w-[90%] ml-[5%] mr-[5%] mb-[4vh]">
        <ThemedText
          type={ThemedTextType.tiny}
        >{`expo: ${expoVersion}`}</ThemedText>
        <ThemedText
          type={ThemedTextType.tiny}
        >{`expo-router: ${routerVersion}`}</ThemedText>
        <ThemedText
          type={ThemedTextType.tiny}
        >{`react-native-tvos: ${rnVersion}`}</ThemedText>
        <ThemedText
          type={ThemedTextType.tiny}
        >{`nativewind: ${nativewindVersion}`}</ThemedText>
        <ThemedLink
          textType={ThemedTextType.tiny}
          href="https://github.com/react-native-tvos/NativewindMultiplatform"
        >
          https://github.com/react-native-tvos/NativewindMultiplatform
        </ThemedLink>
        <ThemedLink href={homePageLink}>Dismiss</ThemedLink>
      </View>
    </View>
  );
}

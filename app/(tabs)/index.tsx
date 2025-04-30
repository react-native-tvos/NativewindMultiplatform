import { cssInterop, useColorScheme, vars } from 'nativewind';
import { Platform, View } from 'react-native';
import { Image as ExpoImage } from 'expo-image';

import '@/global.css';
import { ThemedText, ThemedTextType } from '@/components/ThemedText';
import { ThemedButton, ThemedButtonBehavior } from '@/components/ThemedButton';
import { ThemedLink } from '@/components/ThemedLink';
import { useScreenDimensions } from '@/hooks/useScreenDimensions';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView as RNSafeAreaContextView } from 'react-native-safe-area-context';

// Apply cssInterop to enable NativeWind for expo-image
// https://github.com/nativewind/nativewind/issues/680
const Image = cssInterop(ExpoImage, {
  className: 'style',
});

const SafeAreaView = cssInterop(RNSafeAreaContextView, {
  className: 'style',
});

const customTheme = vars({
  '--light-theme-fg': '#ff0000',
  '--dark-theme-fg': '#00ff00',
});

const imageClassNames: { [key: string]: string } = {
  portrait: 'w-[5vh] h-[5vh]',
  landscape: 'w-[5vw] h-[5vw]',
};

const App = () => {
  const { colorScheme, setColorScheme } = useColorScheme();
  const { orientation } = useScreenDimensions();
  const safeAreaClassName = `w-screen h-screen ${
    Platform.OS === 'ios' && Platform.isTV ? 'mt-[10vh]' : ''
  }`;
  return (
    <View className="flex-1 justify-center items-center bg-[--color-background]">
      <SafeAreaView className={safeAreaClassName}>
        <ScrollView
          showsVerticalScrollIndicator
          contentContainerClassName="gap-[1vh] h-fulljustify-center items-center"
        >
          <ThemedText type={ThemedTextType.title}>Themed Text</ThemedText>
          <ThemedButton onPress={() => {}}>
            Themed Button that adds border on focus/hover (default behavior)
          </ThemedButton>
          <ThemedButton
            onPress={() => {}}
            focusHoverBehavior={ThemedButtonBehavior.scaleOnFocusHover}
          >
            Themed Button that scales on focus/hover
          </ThemedButton>
          <ThemedText>Images with expo-image</ThemedText>
          <View className="w-[90vw] flex-row gap-[5vw]">
            <View className="w-[20vw] justify-center items-center">
              <Image
                source={require('@/assets/images/react-logo.png')}
                className={imageClassNames[orientation]}
              />
              <ThemedText type={ThemedTextType.tiny}>Original</ThemedText>
            </View>
            <View className="flex-1 justify-center items-center">
              <Image
                source={require('@/assets/images/react-logo.png')}
                className={`${imageClassNames[orientation]} translate-x-[3vw]`}
              />
              <ThemedText type={ThemedTextType.tiny}>
                translate-x-[3vw]
              </ThemedText>
            </View>
            <View className="w-[20vw] justify-center items-center">
              <Image
                source={require('@/assets/images/react-logo.png')}
                className={`${imageClassNames[orientation]} scale-x-125`}
              />
              <ThemedText type={ThemedTextType.tiny}>scale-x-125</ThemedText>
            </View>
          </View>
          <ThemedText
            style={customTheme}
            className="text-[--light-theme-fg] dark:text-[--dark-theme-fg]"
          >
            Text with custom CSS variables
          </ThemedText>
          <ThemedText className="font-bold">Bold font</ThemedText>
          <ThemedText className="spacemono">Custom font</ThemedText>
          <ThemedButton
            textClassName="text-blue-800 dark:text-blue-300"
            onPress={() =>
              setColorScheme(colorScheme === 'dark' ? 'light' : 'dark')
            }
          >
            {`Press to change color scheme (currently ${colorScheme} )`}
          </ThemedButton>
          <ThemedText className="animate-bounce">Animations!!!</ThemedText>
          <ThemedLink href="/about">About</ThemedLink>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default App;

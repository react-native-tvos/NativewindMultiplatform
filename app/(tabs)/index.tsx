import { useColorScheme, vars } from 'nativewind';
import { Pressable, Text, View } from 'react-native';
import { useRouter } from 'expo-router';

import '../../global.css';
import { ThemedText } from '@/components/ThemedText';

const customTheme = vars({
  '--light-theme-fg': '#ff0000',
  '--dark-theme-fg': '#00ff00',
});

const App = () => {
  const router = useRouter();
  const { colorScheme, setColorScheme } = useColorScheme();
  return (
    <View className="flex-1 justify-center items-center gap-10 bg-[--color-background]">
      <Text
        style={customTheme}
        className="text-[5vh] text-[--light-theme-fg] dark:text-[--dark-theme-fg]"
      >
        Variables!!!
      </Text>
      <ThemedText type="title">Themed Text</ThemedText>
      <Text className="text-[5vh] text-[--color-green]">
        {`Color scheme: ${colorScheme}`}
      </Text>
      <Pressable
        onPress={() =>
          setColorScheme(colorScheme === 'dark' ? 'light' : 'dark')
        }
        tvParallaxProperties={{ enabled: false }}
        className="transition-all duration-500 focus:scale-[--scale-focus] hover:scale-[--scale-focus]"
      >
        <Text className="text-[5vh] text-[--color-link]">
          Press to change color scheme
        </Text>
      </Pressable>
      <Text className="text-[5vh] text-black dark:text-white animate-bounce">
        Animations!!!
      </Text>
      <Pressable
        onPress={() => router.navigate('/modal')}
        tvParallaxProperties={{ enabled: false }}
        className="transition-all duration-500 focus:scale-[--scale-focus] hover:scale-[--scale-focus]"
      >
        <Text className="text-[3vh] text-red-800 dark:text-red-300">About</Text>
      </Pressable>
    </View>
  );
};

export default App;

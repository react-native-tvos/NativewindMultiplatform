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
        className="transition duration-500 focus:scale-125 active:scale-150"
      >
        {({ focused, pressed, hovered }) => {
          return (
            <Text className="text-[5vh] text-[--color-link] transition duration-500 active:text-green-500 active:scale-110  focus:text-blue-600 hover:text-blue-600">{`Press to change color scheme${
              pressed
                ? ' pressed'
                : hovered
                ? ' hovered'
                : focused
                ? ' focused'
                : ''
            }`}</Text>
          );
        }}
      </Pressable>
      <Text className="text-[5vh] text-black dark:text-white animate-bounce">
        Animations!!!
      </Text>
      <Pressable
        onPress={() => router.navigate('/modal')}
        className="transition duration-500 focus:scale-125 active:scale-150"
      >
        {() => (
          <Text className="text-[3vh] text-red-800 dark:text-red-300 hover:font-bold focus:font-bold active:text-blue-500">
            About
          </Text>
        )}
      </Pressable>
    </View>
  );
};

export default App;

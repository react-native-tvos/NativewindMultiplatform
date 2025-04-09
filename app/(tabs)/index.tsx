import { useColorScheme, vars } from 'nativewind';
import { Pressable, Text, View } from 'react-native';
import { useRouter } from 'expo-router';

import '../../global.css';
import { ThemedText } from '@/components/ThemedText';
import { ThemedButton } from '@/components/ThemedButton';
import { ExternalLink } from '@/components/ExternalLink';

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
      <ThemedButton
        onPress={() =>
          setColorScheme(colorScheme === 'dark' ? 'light' : 'dark')
        }
      >
        Press to change color scheme
      </ThemedButton>
      <Text className="text-[5vh] text-black dark:text-white animate-bounce">
        Animations!!!
      </Text>
      <ExternalLink href="/modal">About</ExternalLink>
    </View>
  );
};

export default App;

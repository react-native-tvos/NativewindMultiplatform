import { useColorScheme, vars } from 'nativewind';
import { Text, View } from 'react-native';

import '../../global.css';
import { ThemedText } from '@/components/ThemedText';
import { ThemedButton } from '@/components/ThemedButton';
import { Link } from '@/components/Link';

const customTheme = vars({
  '--light-theme-fg': '#ff0000',
  '--dark-theme-fg': '#00ff00',
});

const App = () => {
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
      <ThemedButton onPress={() => {}}>Themed Button</ThemedButton>
      <Text className="text-[5vh] text-[--color-green]">
        {`Color scheme: ${colorScheme}`}
      </Text>
      <ThemedButton
        textClassName="text-blue-800 dark:text-blue-300"
        onPress={() =>
          setColorScheme(colorScheme === 'dark' ? 'light' : 'dark')
        }
      >
        Press to change color scheme
      </ThemedButton>
      <Text className="text-[5vh] text-black dark:text-white animate-bounce">
        Animations!!!
      </Text>
      <Link href="/modal">About</Link>
    </View>
  );
};

export default App;

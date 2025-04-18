import { useColorScheme, vars } from 'nativewind';
import { View } from 'react-native';

import '@/global.css';
import { ThemedText } from '@/components/ThemedText';
import { ThemedButton } from '@/components/ThemedButton';
import { ThemedLink } from '@/components/ThemedLink';

const customTheme = vars({
  '--light-theme-fg': '#ff0000',
  '--dark-theme-fg': '#00ff00',
});

const App = () => {
  const { colorScheme, setColorScheme } = useColorScheme();
  return (
    <View className="flex-1 justify-center items-center gap-10 bg-[--color-background]">
      <ThemedText type="title">Themed Text</ThemedText>
      <ThemedButton onPress={() => {}}>Themed Button</ThemedButton>
      <ThemedText
        style={customTheme}
        className="text-[5vh] text-[--light-theme-fg] dark:text-[--dark-theme-fg]"
      >
        Text with custom CSS variables
      </ThemedText>
      <ThemedButton
        textClassName="text-blue-800 dark:text-blue-300"
        onPress={() =>
          setColorScheme(colorScheme === 'dark' ? 'light' : 'dark')
        }
      >
        {`Press to change color scheme (currently ${colorScheme} )`}
      </ThemedButton>
      <ThemedText className="text-[5vh] animate-bounce">
        Animations!!!
      </ThemedText>
      <ThemedLink href="/modal">About</ThemedLink>
    </View>
  );
};

export default App;

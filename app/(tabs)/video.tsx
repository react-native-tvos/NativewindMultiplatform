import { Platform, View } from 'react-native';

import '@/global.css';
import { ThemedText, ThemedTextType } from '@/components/ThemedText';
import VideoTest from '@/components/VideoTest';

const App = () => {
  return (
    <View className="flex-1 justify-center items-center p-[5vh] bg-[--color-background]">
      <ThemedText type={ThemedTextType.title}>expo-video demo</ThemedText>
      {Platform.OS === 'web' ? (
        <ThemedText type={ThemedTextType.tiny}>
          This demo only works on mobile and tv devices.
        </ThemedText>
      ) : (
        <VideoTest />
      )}
    </View>
  );
};

export default App;

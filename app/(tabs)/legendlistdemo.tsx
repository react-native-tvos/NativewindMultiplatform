import { useWindowDimensions, View } from 'react-native';

import '@/global.css';
import { ThemedText, ThemedTextType } from '@/components/ThemedText';
import { LegendList, SafeAreaView } from '@/components/CSSWrappedComponents';
import { ThemedButton } from '@/components/ThemedButton';

const backgroundClassName = 'bg-[--color-background] w-full h-full';

const data: number[] = [...Array(100).keys()];

const LegendListDemo: () => React.JSX.Element = () => {
  const { height } = useWindowDimensions();
  return (
    <SafeAreaView className={backgroundClassName}>
      <View className="justify-center items-center">
        <ThemedText type={ThemedTextType.title}>LegendList</ThemedText>
      </View>
      <View className="h-[70vh] w-full">
        <LegendList
          keyExtractor={(item: any) => `${item}`}
          data={data}
          estimatedItemSize={height * 0.08}
          renderItem={({ item }: { item: number }) => {
            return (
              <View className="justify-center items-center">
                <ThemedButton>{`Block ${item}`}</ThemedButton>
              </View>
            );
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default LegendListDemo;

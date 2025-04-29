import { SafeAreaView, Text, Pressable, View, FlatList } from 'react-native';

import '@/global.css';
import { useScreenDimensions } from '@/hooks/useScreenDimensions';
import { ThemedText, ThemedTextType } from '@/components/ThemedText';

const backgroundClassName = 'bg-[--color-background] flex-1 mt-[10vh]';

const pressableClass =
  'rounded-[2vh] p-[0.5vh] border-[0.25vh] border-[--color-background] ' +
  'transition-all ' +
  'focus:border-[--color-text] ' +
  'hover:border-[--color-text] ' +
  'active:scale-[--scale-active]';

const textClassName = 'text-[--color-tint] text-[2.5vw] p-[1.5vw]';

const data: number[] = [...Array(100).keys()];

const LegendListDemo: () => React.JSX.Element = () => {
  const { width, height } = useScreenDimensions();

  const renderRow = ({ item }: { item: unknown }) => {
    const index = item as number;
    const label = `Block ${index}`;

    return (
      <View className="flex-1 items-center">
        <Pressable
          className={pressableClass}
          onPress={() => console.log('onPress')}
        >
          <Text className={textClassName}>{label}</Text>
        </Pressable>
      </View>
    );
  };
  return (
    <View className={backgroundClassName}>
      <SafeAreaView style={{ width, height, flexDirection: 'row' }}>
        <View className="flex-1">
          <View className="items-center">
            <ThemedText type={ThemedTextType.title}>FlatList</ThemedText>
          </View>
          <View style={{ width: width * 0.9, height: height * 0.8 }}>
            <FlatList
              contentContainerStyle={{
                width: '100%',
              }}
              keyExtractor={(item) => `${item}`}
              data={data}
              renderItem={renderRow}
            ></FlatList>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default LegendListDemo;

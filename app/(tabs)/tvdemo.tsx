import {
  SafeAreaView,
  Text,
  Pressable,
  View,
  FlatList,
  TouchableHighlight,
} from 'react-native';
import { LegendList as OriginalLegendList } from '@legendapp/list';
import { cssInterop } from 'nativewind';

import '@/global.css';
import { useScreenDimensions } from '@/hooks/useScreenDimensions';
import { ThemedText, ThemedTextType } from '@/components/ThemedText';

const LegendList = cssInterop(OriginalLegendList, {
  className: 'style',
  contentContainerClassName: 'contentContainerStyle',
  indicatorClassName: 'indicatorStyle',
  columnWrapperClassName: 'columnWrapperStyle',
});

const backgroundStyle = 'bg-[--color-background] flex-1 mt-[10vh]';

const buttonStyle = `m-[0.5vw] bg-blue-500 w-[80vw] h-[10vh] text-white p-[1vw] font-bold overflow-hidden transition hover:bg-blue-300 focus:bg-blue-300 active:bg-green-500`;

const buttonTextStyle = 'text-white text-[2.5vw]';

const ribbonStyle = 'ribbonstyle';

const ribbonTextStyle = 'text-white text-[1vw]';

const data: number[] = [...Array(100).keys()];

const TVDemo: () => React.JSX.Element = () => {
  const { width, height } = useScreenDimensions();

  const renderRow = ({ item }: { item: unknown }) => {
    const index = `${item}`;
    return (
      <View className="flex-1 items-center w-500 h-400">
        <Pressable
          onPress={() => console.log('onPress')}
          onLongPress={() => console.log('onLongPress')}
          onPressIn={() => console.log('onPressIn')}
          onPressOut={() => console.log('onPressOut')}
          className={buttonStyle}
        >
          <Text className={buttonTextStyle}>Button {index}.1</Text>
          <View className={ribbonStyle}>
            <Text className={ribbonTextStyle}>Press me</Text>
          </View>
        </Pressable>
        <Pressable
          onPress={() => console.log('onPress')}
          onLongPress={() => console.log('onLongPress')}
          onPressIn={() => console.log('onPressIn')}
          onPressOut={() => console.log('onPressOut')}
          tvParallaxProperties={{ enabled: false }}
          className={buttonStyle}
        >
          <Text className={buttonTextStyle}>Button {index}.2</Text>
          <View className={ribbonStyle}>
            <Text className={ribbonTextStyle}>Cool ribbon style</Text>
          </View>
        </Pressable>
        <Pressable
          onPress={() => console.log('onPress')}
          onLongPress={() => console.log('onLongPress')}
          onPressIn={() => console.log('onPressIn')}
          onPressOut={() => console.log('onPressOut')}
          tvParallaxProperties={{
            enabled: false,
          }}
          className={buttonStyle}
        >
          <Text className={buttonTextStyle}>Button {index}.3</Text>
          <View className={ribbonStyle}>
            <Text className={ribbonTextStyle}>ABCDEFG</Text>
          </View>
        </Pressable>
        <TouchableHighlight
          onPress={() => console.log('onPress')}
          onLongPress={() => console.log('onLongPress')}
          onPressIn={() => console.log('onPressIn')}
          onPressOut={() => console.log('onPressOut')}
          className={buttonStyle}
        >
          <View>
            <Text className={buttonTextStyle}>TouchableHighlight</Text>
            <View className={ribbonStyle}>
              <Text className={ribbonTextStyle}>LMNOP</Text>
            </View>
          </View>
        </TouchableHighlight>
      </View>
    );
  };
  return (
    <View className={backgroundStyle}>
      <SafeAreaView style={{ width, height }}>
        <ThemedText type={ThemedTextType.title}>
          Focus/hover/active styles with LegendList
        </ThemedText>
        <LegendList
          contentContainerStyle={{
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
          }}
          data={data}
          renderItem={renderRow}
        ></LegendList>
      </SafeAreaView>
    </View>
  );
};

export default TVDemo;

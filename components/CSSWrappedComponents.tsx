import { Image as ExpoImage } from 'expo-image';
import { VideoView as ExpoVideoView } from 'expo-video';
import { cssInterop } from 'nativewind';
import { SafeAreaView as RNSafeAreaContextView } from 'react-native-safe-area-context';
import { LegendList as OriginalLegendList } from '@legendapp/list';
import { ScrollView } from 'react-native';

// Apply cssInterop to enable NativeWind for expo-image
// https://github.com/nativewind/nativewind/issues/680
export const Image = cssInterop(ExpoImage, {
  className: 'style',
});
export const SafeAreaView = cssInterop(RNSafeAreaContextView, {
  className: 'style',
});
export const VideoView: any = cssInterop(ExpoVideoView, {
  className: 'style',
});

const WrappedLegendList = cssInterop(OriginalLegendList, {
  className: 'style',
  contentContainerClassName: 'contentContainerStyle',
  indicatorClassName: 'indicatorStyle',
  columnWrapperClassName: 'columnWrapperStyle',
});

// LegendList's default for this property uses an Animated.ScrollView from the built in Animated of react-native itself.
// This doesn't work with react-native-reanimated, so we need to provide our own.
export function LegendList(props: any) {
  return (
    <WrappedLegendList
      renderScrollComponent={(props: any) => {
        return <ScrollView {...props} />;
      }}
      {...props}
    />
  );
}

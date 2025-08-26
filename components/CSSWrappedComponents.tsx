import { Image as ExpoImage } from 'expo-image';
import { VideoView as ExpoVideoView } from 'expo-video';
import { cssInterop } from 'nativewind';
import { SafeAreaView as RNSafeAreaContextView } from 'react-native-safe-area-context';

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

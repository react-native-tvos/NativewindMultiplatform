import { useWindowDimensions } from 'react-native';

export enum ScreenOrientationType {
  portrait = 'portrait',
  landscape = 'landscape',
}

export type ScreenDimensionsResult = {
  width: number;
  height: number;
  scale: number;
  orientation: string;
};

export function useScreenDimensions(): ScreenDimensionsResult {
  const { width, height } = useWindowDimensions();
  const scale = width > height ? width / 1000 : height / 1000;
  return {
    width,
    height,
    scale,
    orientation: width > height ? 'landscape' : 'portrait',
  };
}

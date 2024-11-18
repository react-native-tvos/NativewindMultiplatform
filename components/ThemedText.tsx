import { Text, TextProps } from 'react-native';

import '@/global.css';
import { useTheme } from '@/hooks/useTheme';
import {
  useScreenDimensions,
  ScreenOrientationType,
} from '@/hooks/useScreenDimensions';

export enum ThemedTextType {
  title = 'title',
  link = 'link',
  text = 'text',
  small = 'small',
  tiny = 'tiny',
}

const themedTextClassNames: {
  [key in ScreenOrientationType]: { [key in ThemedTextType]: string };
} = {
  portrait: {
    title: 'text-[5vw] leading-[6vw] text-[--color-text]',
    link: 'text-[5vw] leading-[6vw] text-[--color-tint]',
    text: 'text-[5vw] leading-[6vw] text-[--color-text]',
    small: 'text-[4vw] leading-[5vw] text-[--color-text]',
    tiny: 'text-[3vw] leading-[4vw] text-[--color-text]',
  },
  landscape: {
    title: 'text-[4vh] leading-[6vh] text-[--color-text]',
    link: 'text-[4vh] leading-[6vh] text-[--color-tint]',
    text: 'text-[4vh] leading-[6vh] text-[--color-text]',
    small: 'text-[3vh] leading-[5vh] text-[--color-text]',
    tiny: 'text-[2vh] leading-[4vh] text-[--color-text]',
  },
};

export function ThemedText(
  props: TextProps & {
    type?: ThemedTextType | undefined;
    children: string;
    className?: string;
    style?: any;
  },
) {
  const theme = useTheme();
  const { orientation } = useScreenDimensions();
  const type = props?.type ?? 'text';
  const style = props?.style ?? theme;
  const baseClassName =
    themedTextClassNames[orientation as ScreenOrientationType][type];
  const className = `${baseClassName} ${props?.className ?? ''}`;
  return (
    <Text
      style={style}
      className={className}
      accessible
      accessibilityLabel={props?.children}
      accessibilityRole="text"
    >
      {props?.children}
    </Text>
  );
}

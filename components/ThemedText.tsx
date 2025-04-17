import { StyleSheet, Text, TextProps } from 'react-native';

import '../global.css';
import { useTheme } from '@/hooks/useTheme';

type ThemedTextType = 'title' | 'link' | 'text';

const themedTextClassNames: { [key in ThemedTextType]: string } = {
  title: 'text-[5vh] leading-[6vh] text-[--color-text]',
  link: 'text-[5vh] leading-[6vh] text-[--color-link]',
  text: 'text-[5vh] leading-[6vh] text-[--color-text]',
};

export function ThemedText(
  props: TextProps & {
    type?: ThemedTextType;
    children: string;
    className?: string;
    style?: any;
  },
) {
  const theme = useTheme();
  const type = props?.type ?? 'text';
  const style = props?.style ?? theme;
  const className = `${themedTextClassNames[type]} ${props?.className ?? ''}`;
  return (
    <Text style={style} className={className}>
      {props?.children}
    </Text>
  );
}

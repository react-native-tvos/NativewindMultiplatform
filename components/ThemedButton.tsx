import { GestureResponderEvent, Pressable } from 'react-native';

import '../global.css';
import { ThemedText } from './ThemedText';

const defaultPressableClassName =
  'transition-all duration-500 focus:scale-[--scale-focus] hover:scale-[--scale-focus]';

export function ThemedButton({
  onPress,
  children,
  className,
  textClassName,
}: {
  onPress: (event: GestureResponderEvent) => void;
  children: string;
  className?: string;
  textClassName?: string;
}) {
  return (
    <Pressable
      onPress={onPress}
      tvParallaxProperties={{ enabled: false }}
      className={`${defaultPressableClassName} ${className ?? ''}`}
    >
      <ThemedText type="link" className={textClassName}>
        {children}
      </ThemedText>
    </Pressable>
  );
}

import { GestureResponderEvent, Pressable } from 'react-native';

import '@/global.css';
import { ThemedText } from './ThemedText';

const defaultPressableClassName =
  /*
     This style scales the button when it is focused, hovered, or active, with a smooth 0.5 second animation.
    */
  // 'transition-all duration-500 focus:scale-[--scale-focus] hover:scale-[--scale-hover] active:scale-[--scale-active]';
  /*
   */
  'rounded-[2vh] p-[0.5vh] border-[0.25vh] border-[--color-background] transition-all duration-500 ' +
  'focus:border-[--color-tab-icon-default] ' +
  'hover:border-[--color-tab-icon-default] ' +
  'active:scale-[--scale-active]';

/**
 * Themed button component.
 */
export function ThemedButton({
  onPress,
  children,
  className,
  textClassName,
}: {
  onPress?: ((event: GestureResponderEvent) => void) | null | undefined;
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

import { Link, useRouter } from 'expo-router';
import * as Linking from 'expo-linking';
import type { Href } from 'expo-router';
import { GestureResponderEvent, Platform, PressableProps } from 'react-native';
import { ThemedButton } from './ThemedButton';
import { ThemedTextType } from './ThemedText';

const openBrowserAsync =
  Platform.isTV && Platform.OS === 'ios'
    ? null
    : require('expo-web-browser').openBrowserAsync;

/**
 * Themed button component to open a URL that can be either a web URL or a route in the app.
 */
export function ThemedLink({
  href,
  children,
  className,
  textType,
  ...props
}: PressableProps & {
  href: string;
  children: string;
  className?: string;
  textType?: ThemedTextType | undefined;
}) {
  const router = useRouter();
  if (
    Platform.OS === 'web' &&
    typeof href === 'string' &&
    href.startsWith('http')
  ) {
    return (
      <Link target="_blank" href={href as Href} asChild>
        <ThemedButton
          className={className}
          textType={textType ?? ThemedTextType.small}
          textClassName="!text-[--color-red]"
          {...props}
        >
          {children}
        </ThemedButton>
      </Link>
    );
  }
  return (
    <ThemedButton
      className={className}
      textType={textType ?? ThemedTextType.small}
      textClassName="!text-[--color-red]"
      onPress={async (event: GestureResponderEvent) => {
        if (typeof href === 'string' && !href.startsWith('http')) {
          router.navigate(href as Href);
          return;
        }
        if (openBrowserAsync) {
          event.preventDefault();
          await openBrowserAsync(href);
          return;
        }
        try {
          await Linking.openURL(href).catch((reason) => alert(`${reason}`));
        } catch (reason) {
          alert(`${reason}`);
        }
      }}
      {...props}
    >
      {children}
    </ThemedButton>
  );
}

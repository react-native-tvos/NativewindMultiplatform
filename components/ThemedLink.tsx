import { useRouter } from 'expo-router';
import * as Linking from 'expo-linking';
import type { Href } from 'expo-router';
import { GestureResponderEvent, Platform } from 'react-native';
import { ThemedButton } from './ThemedButton';

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
}: {
  href: string;
  children: string;
  className?: string;
}) {
  const router = useRouter();
  return (
    <ThemedButton
      className={className}
      textClassName="!text-[3vh] text-[--color-red]"
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
    >
      {children}
    </ThemedButton>
  );
}

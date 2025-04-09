import { useRouter } from 'expo-router';
import * as Linking from 'expo-linking';
import type { Href } from 'expo-router';
import { GestureResponderEvent, Platform } from 'react-native';
import { ThemedButton } from './ThemedButton';

const openBrowserAsync =
  Platform.isTV && Platform.OS === 'ios'
    ? async () => {}
    : require('expo-web-browser').openBrowserAsync;

export function ExternalLink({
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
      textClassName="!text-[3vh] text-red-800 dark:text-red-300"
      onPress={async (event: GestureResponderEvent) => {
        if (Platform.OS !== 'web') {
          // Prevent the default behavior of linking to the default browser on native.
          event.preventDefault();
          // Open the link in an in-app browser.
          await openBrowserAsync(href);
        }
        if (typeof href === 'string' && !href.startsWith('http')) {
          router.navigate(href as Href);
          return;
        }
        Linking.canOpenURL(href).then((supported) => {
          if (!supported) {
            alert(`Don't know how to open this URL: ${href}`);
            return;
          }
          Linking.openURL(href).catch((reason) => alert(`${reason}`));
        });
      }}
    >
      {children}
    </ThemedButton>
  );
}

import { Text } from 'react-native';

import { useTheme } from '@/hooks/useTheme';

import '../global.css';

export function ThemedText({
  type,
  children,
}: {
  type?: string;
  children: any;
}) {
  const theme = useTheme();
  if (type === 'title') {
    return (
      <Text
        style={theme}
        className="text-[5vh] leading-[6vh] text-bold text-[--color-text]"
      >
        {children}
      </Text>
    );
  }
  if (type === 'link') {
    return (
      <Text
        style={theme}
        className="text-[3vh] leading-[4vh] text-bold text-[--color-link]"
      >
        {children}
      </Text>
    );
  }
  return (
    <Text
      style={theme}
      className="text-[3vh] leading-[4vh] text-[--color-text]"
    >
      {children}
    </Text>
  );
}

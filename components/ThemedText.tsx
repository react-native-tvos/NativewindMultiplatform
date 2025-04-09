import { Text } from 'react-native';

import '../global.css';

export function ThemedText({
  type,
  children,
}: {
  type?: string;
  children: string;
}) {
  if (type === 'title') {
    return (
      <Text className="text-[5vh] leading-[6vh] text-[--color-text]">
        {children}
      </Text>
    );
  }
  if (type === 'link') {
    return (
      <Text className="text-[3vh] leading-[4vh] text-[--color-link]">
        {children}
      </Text>
    );
  }
  return (
    <Text className="text-[3vh] leading-[4vh] text-[--color-text]">
      {children}
    </Text>
  );
}

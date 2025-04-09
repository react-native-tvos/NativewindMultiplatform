import { Text } from 'react-native';

import '../global.css';

const titleStyle = 'text-[5vh] leading-[6vh] text-[--color-text]';
const linkStyle = 'text-[5vh] leading-[6vh] text-[--color-link]';
const textStyle = 'text-[3vh] leading-[4vh] text-[--color-text]';

export function ThemedText({
  type,
  children,
  className,
}: {
  type?: string;
  children: string;
  className?: string;
}) {
  if (type === 'title') {
    return <Text className={`${titleStyle} ${className}`}>{children}</Text>;
  }
  if (type === 'link') {
    return <Text className={`${linkStyle} ${className}`}>{children}</Text>;
  }
  return <Text className={`${textStyle} ${className}`}>{children}</Text>;
}

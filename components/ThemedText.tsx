import { Text } from 'react-native';

export function ThemedText({
  type,
  children,
}: {
  type?: string;
  children: any;
}) {
  if (type === 'title') {
    return (
      <Text className="text-[5vh] leading-[6vh] text-bold">{children}</Text>
    );
  }
  if (type === 'link') {
    return (
      <Text className="text-[3vh] leading-[4vh] text-bold text-[--color-link]">
        {children}
      </Text>
    );
  }
  return <Text className="text-[3vh] leading-[4vh]">{children}</Text>;
}

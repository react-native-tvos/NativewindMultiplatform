import { useColorScheme } from 'nativewind';
import { theme } from '@/constants/Theme';

export const useTheme = () => {
  const { colorScheme } = useColorScheme();
  return theme[colorScheme ?? 'light'];
};

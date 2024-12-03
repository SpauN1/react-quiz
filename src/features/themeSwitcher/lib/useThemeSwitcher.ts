import { useMantineColorScheme, useComputedColorScheme } from '@mantine/core';

export const useThemSwitcher = () => {
  const { setColorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme('light', {
    getInitialValueInEffect: true,
  });

  const toggleColorScheme = () => {
    setColorScheme(computedColorScheme === 'dark' ? 'light' : 'dark');
  };

  return { toggleColorScheme };
};

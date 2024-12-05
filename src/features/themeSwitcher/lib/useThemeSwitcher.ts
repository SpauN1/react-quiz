import { useEffect } from 'react';
import { useLocalStorage } from '@mantine/hooks';
import { useMantineColorScheme } from '@mantine/core';

export const useThemeSwitcher = () => {
  const { setColorScheme } = useMantineColorScheme();
  const [colorSchemeLS, setColorSchemeLS] = useLocalStorage<'light' | 'dark'>({
    key: 'color-scheme',
    defaultValue: 'light',
  });

  useEffect(() => {
    setColorScheme(colorSchemeLS);
  }, [colorSchemeLS, setColorScheme]);

  const toggleColorScheme = () => {
    setColorSchemeLS((current) => (current === 'dark' ? 'light' : 'dark'));
  };

  return { colorSchemeLS, toggleColorScheme };
};

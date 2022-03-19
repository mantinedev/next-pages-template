import { setCookies } from 'cookies-next';
import { SegmentedControl, Center, Box, Group, useMantineColorScheme } from '@mantine/core';
import { Sun, Moon } from 'tabler-icons-react';

export function ColorSchemeToggle() {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const setColorScheme = () => {
    const nextColorScheme = colorScheme === 'dark' ? 'light' : 'dark';
    setCookies('mantine-color-scheme', nextColorScheme, { maxAge: 60 * 60 * 24 * 30 });
    toggleColorScheme(nextColorScheme);
  };

  return (
    <Group position="center" mt="xl">
      <SegmentedControl
        value={colorScheme}
        onChange={setColorScheme}
        data={[
          {
            value: 'light',
            label: (
              <Center>
                <Sun size={16} />
                <Box ml={10}>Light</Box>
              </Center>
            ),
          },
          {
            value: 'dark',
            label: (
              <Center>
                <Moon size={16} />
                <Box ml={10}>Dark</Box>
              </Center>
            ),
          },
        ]}
      />
    </Group>
  );
}

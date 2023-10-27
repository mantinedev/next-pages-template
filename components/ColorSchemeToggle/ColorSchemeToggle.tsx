import { useMantineColorScheme, Text, SimpleGrid } from '@mantine/core';
import { useState } from 'react';
import DarkModeToggle from 'react-dark-mode-toggle';
import useStyles from './ColorSheme.styles';
import classNames from 'classnames';

export function ColorSchemeToggle() {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const [clicks, setClicks] = useState(0);
  const { classes } = useStyles();

  return (
    <div
      onClick={() => setClicks(clicks + 1)}
      style={{
        display: 'flex',
        alignItems: 'flex-end',
        flexDirection: 'column',
        justifyContent: 'flex-end',
      }}
    >
      <DarkModeToggle
        onChange={() => toggleColorScheme()}
        checked={colorScheme === 'dark'}
        size={80}
      />
      {clicks >= 5 && (
        <div
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <Text fz={'.7rem'}>Easy now, you're gonna break it.</Text>
          <Text fz={'.7rem'}>{clicks} times so far</Text>
        </div>
      )}
    </div>
  );
}

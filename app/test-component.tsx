'use client';

import { createStyles, Select, TextInput } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  root: {
    position: 'relative',
  },

  input: {
    height: 'auto',
    paddingTop: 18,
  },

  label: {
    position: 'absolute',
    pointerEvents: 'none',
    fontSize: theme.fontSizes.xs,
    paddingLeft: theme.spacing.sm,
    paddingTop: `${parseFloat(theme.spacing.sm) / 2}rem`,
    zIndex: 1,
  },
}));

export function Test() {
  // You can add these classes as classNames to any Mantine input, it will work the same
  const { classes } = useStyles();

  return (
    <div>
      <TextInput label="Shipping address" placeholder="15329 Huston 21st" classNames={classes} />

      <Select
        style={{ marginTop: 20, zIndex: 2 }}
        data={['React', 'Angular', 'Svelte', 'Vue']}
        placeholder="Pick one"
        label="Your favorite library/framework"
        classNames={classes}
      />
    </div>
  );
}

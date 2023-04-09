import { createStyles } from '@mantine/core';

export const useStyles = createStyles((theme) => ({
    title: {
      marginBottom: theme.spacing.md,
      textAlign: 'center',

      [theme.fn.smallerThan('sm')]: {
        fontSize: '1.2rem',
        textAlign: 'left',
      },
    },

    description: {
      textAlign: 'center',

      [theme.fn.smallerThan('sm')]: {
        textAlign: 'left',
      },
    },
  }));

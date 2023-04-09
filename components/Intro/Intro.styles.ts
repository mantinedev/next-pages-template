import { createStyles } from '@mantine/core';

export default createStyles((theme) => ({
  logoHeading: {
    display: 'flex',
    alignItems: 'center',
  },

  infoContainer: {
    display: 'flex',
    alignItems: 'center',
  },

  title: {
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    fontSize: 50,
    fontWeight: 900,
    letterSpacing: -2,

    [theme.fn.smallerThan('sm')]: {
      fontSize: 30,
    },
  },

  image: {
    height: '340px',
    marginRight: '1rem',
    marginBottom: '1rem',
  },

  imageContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
}));

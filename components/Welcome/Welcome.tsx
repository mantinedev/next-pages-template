import { FC } from 'react';
import { Text, Box, Container } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';

import useStyles from './Welcome.styles';
import TabsList from '../Tabs/Tabs';
import Logo from '../Logo/Logo';

const Welcome: FC = () => {
  const { classes } = useStyles();
  const mediumScreen = useMediaQuery('(min-width: 48em)');

  return (
    <>
      {!mediumScreen && (
        <Box className={classes.logoHeading}>
          <Text mr="1rem" component="span" className={classes.title}>
            Matthew
          </Text>
          <Logo />
          <Text ml="1rem" component="span" className={classes.title}>
            Magnotta
          </Text>
        </Box>
      )}

      <Container size="xl">
        <Box>
          <TabsList />
        </Box>
      </Container>
    </>
  );
};

export default Welcome;

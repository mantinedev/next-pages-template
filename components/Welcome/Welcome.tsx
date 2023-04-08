import { Title, Text, Anchor, Box, Container } from '@mantine/core';
import useStyles from './Welcome.styles';
import TabsList from '../Tabs/Tabs';
import Logo from '../Logo/Logo';
import { useMediaQuery } from '@mantine/hooks';
export function Welcome() {
  const { classes } = useStyles();
  const mediumScreen = useMediaQuery('(min-width: 48em)');

  return (
    <>
      {!mediumScreen && (
        <Box className={classes.logoHeading}>
          <Text mr={'1rem'} component="span" className={classes.title}>
            Matthew
          </Text>
          <Logo />
          <Text ml={'1rem'} component="span" className={classes.title}>
            Magnotta
          </Text>
        </Box>
      )}

      <Container size={'xl'} /* sx={{ display: 'flex', height: '100%', marginTop: '0rem' }} */>
        <Box>
          <TabsList />
        </Box>
      </Container>
    </>
  );
}

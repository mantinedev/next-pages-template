import { Title, Text, Anchor, Box, Container } from '@mantine/core';
import useStyles from './Welcome.styles';
import TabsList from '../Tabs/Tabs';

export function Welcome() {
  const { classes } = useStyles();

  return (
    <Container size={'md'} sx={{display:'flex', height:'100%', alignItems: 'center'}}>
     <Box ><TabsList/></Box> 
    
      {/* <Title className={classes.title} align="center" mt={100}>
        Welcome to{' '}
        <Text inherit variant="gradient" component="span">
          Mantine
        </Text>
      </Title>
      <Text color="dimmed" align="center" size="lg" sx={{ maxWidth: 580 }} mx="auto" mt="xl">
        This starter Next.js project includes a minimal setup for server side rendering, if you want
        to learn more on Mantine + Next.js integration follow{' '}
        <Anchor href="https://mantine.dev/guides/next/" size="lg">
          this guide
        </Anchor>
        . To get started edit index.tsx file.
      </Text> */}
    </Container>
  );
}

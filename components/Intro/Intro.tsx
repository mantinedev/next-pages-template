import { FC } from 'react';
import { Text, Box, Container, Title, Anchor } from '@mantine/core';
import { IconDeviceLaptop, IconLocation } from '@tabler/icons-react';
import { useMediaQuery } from '@mantine/hooks';

import Image from 'next/image';
import useStyles from './Intro.styles';
import Logo from '../Logo/Logo';

const Intro: FC = () => {
  const { classes } = useStyles();
  const mediumScreen = useMediaQuery('(min-width: 48em)');

  return (
    <Container>
      {mediumScreen && (
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

      <Title order={1} mt="lg" mb="xs">
        Hey, I&apos;m Matthew. Nice to meet you! 🤝
      </Title>
      <Box className={classes.infoContainer}>
        <IconLocation />
        <Text ml="sm">Bend, Oregon</Text>
      </Box>

      <Box className={classes.infoContainer}>
        <IconDeviceLaptop />
        <Text ml="sm">
          Currently crafting at{' '}
          <span>
            <Anchor href="https://letshighlight.com/" target="_blank">
              Highlight
            </Anchor>
          </span>
        </Text>
      </Box>

      <Title order={1} mt="lg" mb="xs">
        What do I do?
      </Title>
      <Text>
        I specialize in building scalable web apps with expertise in Javascript, React, and a wide
        range of front-end and back-end technologies. I&apos;m committed to writing clean,
        well-documented code that uses the latest technologies and best practices to improve
        performance and functionality.
      </Text>

      <Title order={1} mt="lg" mb="xs">
        What about when I&apos;m not working?
      </Title>
      <Text mb="md">
        In my offtime, I spend most of my time in the backcountry with my pup and a camera. Here are
        some of my favorite captures.
      </Text>

      <Box className={classes.imageContainer}>
        <Image src="/waterfall.png" className={classes.image} alt="" width={10} height={10} />
        <Image src="/rainier.png" className={classes.image} alt="" width={10} height={10} />
        <Image src="/fire.png" className={classes.image} alt="" width={10} height={10} />
      </Box>
    </Container>
  );
};

export default Intro;

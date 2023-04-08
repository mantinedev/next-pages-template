import { Text, Box, Container, Title } from '@mantine/core';

import useStyles from './Intro.styles';
import Logo from '../Logo/Logo';
import { useMediaQuery } from '@mantine/hooks';

const Intro = () => {
  const { classes } = useStyles();
  const mediumScreen = useMediaQuery('(min-width: 48em)');

  return (
    <Container>
      {mediumScreen && (
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

      <Title order={1} mt={'lg'} mb={'xs'}>
        Hey, I'm Matthew. Nice to meet you! 🤝
      </Title>
      <Text>📍 Bend, Oregon</Text>
      <Text>
        👨🏻‍💻 Currently crafting at <span>Highlight</span>
      </Text>

      <Title order={1} mt={'lg'} mb={'xs'}>
        What do I do?
      </Title>
      <Text>
        I specialize in building scalable web apps with expertise in Javascript, React, and a wide
        range of front-end and back-end technologies. I'm committed to writing clean,
        well-documented code that uses the latest technologies and best practices to improve
        performance and functionality.
      </Text>

      <Title order={1} mt={'lg'} mb={'xs'}>
        What about when your not working?
      </Title>
      <Text mb={'md'}>
        In my offtime, I spend most of my time in the backcountry with my pup and a camera. Here are
        some of my favorite captures.
      </Text>
      <Box
        sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap' }}
      >
        <img
          src={'/waterfall.png'}
          style={{ height: '340px', marginRight: '1rem', marginBottom: '1rem' }}
        />
        <img
          src={'/rainier.png'}
          style={{ height: '340px', marginRight: '1rem', marginBottom: '1rem' }}
        />
        <img
          src={'/fire.png'}
          style={{ height: '340px', marginRight: '1rem', marginBottom: '1rem' }}
        />
      </Box>
    </Container>
  );
};

export default Intro;

// import {
//   IconBrandNextjs,
//   IconBrandReact,
//   IconBrandTypescript,
//   IconBrandJavascript,
//   IconBrandPython,
//   IconBrandSvelte,
//   IconHexagon3d,
//   IconBrandDjango,
//   IconBrandGraphql,
//   IconBrandRedux,
//   IconBrandMantine,
//   IconBrandTailwind,
//   IconBrandGit,
//   IconHexagonLetterJ,
//   IconHexagonLetterM,
// } from '@tabler/icons-react';
// const techStack = [
//   { tech: 'Javascript', logo: <IconBrandJavascript size={15} /> },
//   { tech: 'Typescript', logo: <IconBrandTypescript size={15} /> },
//   { tech: 'Python', logo: <IconBrandPython size={15} /> },
//   { tech: 'React', logo: <IconBrandReact size={15} /> },
//   { tech: 'Svelte', logo: <IconBrandSvelte size={15} /> },
//   { tech: 'NextJS', logo: <IconBrandNextjs size={15} /> },
//   { tech: 'NodeJS', logo: <IconHexagon3d size={15} /> },
//   { tech: 'Django', logo: <IconBrandDjango size={15} /> },
//   { tech: 'GraphQL', logo: <IconBrandGraphql size={15} /> },
//   { tech: 'Redux', logo: <IconBrandRedux size={15} /> },
//   { tech: 'Materiaul-UI', logo: <IconHexagonLetterM size={15} /> },
//   { tech: 'Mantine', logo: <IconBrandMantine size={15} /> },
//   { tech: 'Tailwind', logo: <IconBrandTailwind size={15} /> },
//   { tech: 'Git', logo: <IconBrandGit size={15} /> },
//   { tech: 'Jira', logo: <IconHexagonLetterJ size={15} /> },
// ];
{
  /* <Box>
        <Box component="div">
          <Text sx={{
          fontSize: 24,
          fontWeight: 400,
        }} >My tech stack</Text>
          <Box>

            {techStack.map((item) => {
              return (
                <Badge
                  color="indigo"
                  radius="xs"
                  mr={'.5rem'}
                  mb={'.5rem'}
                  size="lg"
                  styles={{ leftSection: { display: 'flex' } }}
                  leftSection={item.logo}
                >
                  {item.tech}
                </Badge>
              );
            })}
          </Box>
        </Box>
      </Box> */
}

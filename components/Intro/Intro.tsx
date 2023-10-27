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
    <Container sx={{ maxWidth: '59rem' }}>
      <Box sx={{ display: 'flex', alignItems: 'end' }}>
        <Box>
          <Title variant="h1" mb={'sm'}>
            Hey, I'm Matthew.
          </Title>
          <Text>
            I'm a{' '}
            <Text fw={900} span>
              Software Engineer
            </Text>{' '}
            based in Bend, Oregon with a love for
            <Text fw={900} span>
              {' '}
              engineering and design.
            </Text>
          </Text>
        </Box>
      </Box>

      <Text mt={'xl'}>
        I currently crafting at Lets Highlight where I{' '}
        <Text span strikethrough>
          delete
        </Text>{' '}
        write lots of TypeScript and{' '}
        <Text span strikethrough>
          sometimes
        </Text>{' '}
        never break production.
      </Text>

      <Text mt={'xl'}>
        I pride myself on being an engineer, as it allows me to approach challenges with a unique
        blend of creativity and technical know-how. Unraveling complex problems and finding
        innovative solutions is pretty cool to me.
      </Text>
      <div>
        <img
          src="https://github-readme-stats.vercel.app/api?username=mattymags&hide_title=false&hide_rank=true&show_icons=true&include_all_commits=true&count_private=true&disable_animations=false&theme=tokyonight&locale=en&hide_border=false"
          height="150"
          alt="stats graph"
        />
        <img
          src="https://github-readme-stats.vercel.app/api/top-langs?username=mattymags&locale=en&hide_title=false&layout=compact&card_width=320&langs_count=5&theme=tokyonight&hide_border=false"
          height="150"
          alt="languages graph"
        />
        <img
          src="https://streak-stats.demolab.com?user=mattymags&locale=en&mode=weekly&theme=tokyonight&hide_border=false&border_radius=5"
          height="150"
          alt="streak graph"
        />
      </div>
    </Container>
  );
};

export default Intro;

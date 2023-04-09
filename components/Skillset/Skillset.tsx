import { ThemeIcon, Text, Title, Container, SimpleGrid, Box, Badge } from '@mantine/core';
import { FC, ReactNode } from 'react';
import { useStyles } from './Skillset.styles';
import { skillBlurbs, techStack } from './content';

interface FeatureProps {
  icon: FC<any>;
  title: ReactNode;
  description: ReactNode;
}

const Feature: FC<FeatureProps> = ({ icon: Icon, title, description }) => (
  <Box>
    <ThemeIcon color="indigo" variant="light" size={40} radius={40}>
      <Icon size="1.1rem" stroke={1.5} />
    </ThemeIcon>
    <Text mt="sm" mb={7}>
      {title}
    </Text>
    <Text size="sm" color="dimmed" sx={{ lineHeight: 1.6 }}>
      {description}
    </Text>
  </Box>
);

interface FeaturesGridProps {
  title: ReactNode;
  description: ReactNode;
  data?: FeatureProps[];
}

const SkillSet: FC<FeaturesGridProps> = ({ title, data = skillBlurbs }) => {
  const { classes } = useStyles();
  const features = data.map((feature, index) => <Feature {...feature} key={index} />);

  return (
    <Container mt="xl">
      <Title mb="xl" className={classes.title}>
        {title}
      </Title>
      <Text mt="lg" mb="lg" align="left">
        As an engineer, I have a passion for finding solutions to complex problems. I am always
        playing and tinkering with the latest technologies and staying on top of cutting-edge
        advancements to create well-rounded and innovative solutions that exceed expectations. Heres
        a look at some of the tools and idealolgies I use to get the job done.
      </Text>
      <Box>
        {techStack.map((item) => (
          <Badge
            color="indigo"
            radius="xs"
            mr=".5rem"
            mb=".5rem"
            size="lg"
            styles={{ leftSection: { display: 'flex' } }}
            leftSection={item.logo}
          >
            {item.tech}
          </Badge>
        ))}
      </Box>
      <SimpleGrid
        mt={15}
        cols={3}
        spacing={50}
        breakpoints={[
          { maxWidth: 980, cols: 2, spacing: 'xl' },
          { maxWidth: 755, cols: 1, spacing: 'xl' },
        ]}
      >
        {features}
      </SimpleGrid>
    </Container>
  );
};

export default SkillSet;

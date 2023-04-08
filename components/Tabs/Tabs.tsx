import { Tabs } from '@mantine/core';
import { IconTilde, IconBriefcase, IconMathGreater, IconBulb } from '@tabler/icons-react';
import Intro from '../Intro/Intro';
import { useMediaQuery } from '@mantine/hooks';
import Logo from '../Logo/Logo';

const TabsList = () => {
  const mediumScreen = useMediaQuery('(min-width: 48em)');
  return (
    <Tabs
      defaultValue="introduction"
      color="indigo"
      orientation={mediumScreen ? 'vertical' : 'horizontal'}
    >
      <Tabs.List>
        <Tabs.Tab value="introduction" icon={mediumScreen ? <IconTilde size="0.8rem" /> : null}>
          Home
        </Tabs.Tab>
        <Tabs.Tab
          value="workExperience"
          icon={mediumScreen ? <IconBriefcase size="0.8rem" /> : null}
        >
          {mediumScreen ? 'Work Experience' : 'Experience'}
        </Tabs.Tab>
        <Tabs.Tab
          value="technicalExperience"
          icon={mediumScreen ? <IconMathGreater size="0.8rem" /> : null}
        >
          {mediumScreen ? 'Techinal Skillset' : 'Skillset'}
        </Tabs.Tab>
        <Tabs.Tab value="interests" icon={mediumScreen ? <IconBulb size="0.8rem" /> : null}>
          {mediumScreen ? 'Interests for 2023' : 'Interests'}
        </Tabs.Tab>
      </Tabs.List>

      <Tabs.Panel value="introduction" pt="xs">
        <Intro />
      </Tabs.Panel>

      <Tabs.Panel value="workExperience" pt="xs">
        Messages tab content
      </Tabs.Panel>

      <Tabs.Panel value="technicalExperience" pt="xs">
        Settings tab content
      </Tabs.Panel>

      <Tabs.Panel value="interests" pt="xs">
        Settings tab content
      </Tabs.Panel>
    </Tabs>
  );
};

export default TabsList;

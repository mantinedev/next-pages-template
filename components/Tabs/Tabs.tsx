import { Tabs } from '@mantine/core';
import { IconPhoto, IconMessageCircle, IconSettings, IconTilde, IconBriefcase, IconMathGreater, IconBulb } from '@tabler/icons-react';

const TabsList = () =>  {
  return (
    <Tabs defaultValue="gallery" color='indigo' orientation='vertical' >
      <Tabs.List>
        <Tabs.Tab value="introduction" icon={<IconTilde size="0.8rem" />}>Introduction</Tabs.Tab>
        <Tabs.Tab value="workExperience" icon={<IconBriefcase size="0.8rem" />}>Work Experience</Tabs.Tab>
        <Tabs.Tab value="technicalExperience" icon={<IconMathGreater size="0.8rem" />}>Techinal Skillset</Tabs.Tab>
        <Tabs.Tab value="interests" icon={<IconBulb size="0.8rem" />}>Interests for 2023</Tabs.Tab>

      </Tabs.List>

      <Tabs.Panel value="introduction" pt="xs">
        Gallery tab content
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
}

export default TabsList
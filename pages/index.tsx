import Head from 'next/head';
import {
  Button,
  Group,
  Container,
  Title,
  Text,
  Slider,
  InputWrapper,
  NumberInput,
  SegmentedControl,
} from '@mantine/core';
import { useNotifications } from '@mantine/notifications';
import { Prism } from '@mantine/prism';
import { DatePicker } from '@mantine/dates';

const code = `
import React from 'react';
import { Prism } from '@mantine/prism';

function Demo() {
  return <Prism language="tsx">{yourCode}</Prism>
}
`.trim();

const stylesApiCode = `
<Button
  component="a"
  target="_blank"
  rel="noopener noreferrer"
  href="https://twitter.com/mantinedev"
  fullWidth
  styles={{
    filled: {
      backgroundColor: "#00acee",
      textShadow: "unset",
      border: 0,
      height: 48,
      paddingLeft: 20,
      paddingRight: 20,
    },

    label: {
      textShadow: "1px 1px 0 #0490c7",
    },
  }}
>
  Follow Mantine on Twitter
</Button>
`.trim();

export default function Home() {
  const notifications = useNotifications();
  return (
    <>
      <Head>
        <title>Mantine Next template</title>
        <meta name="description" content="Mantine Next template" />
        <link
          rel="icon"
          href="https://mantine.dev/favicon.svg?v=c7bf473b30e5d81722ea0acf3a11a107"
          type="image/svg+xml"
        />
      </Head>

      <Container size={400} style={{ paddingTop: 80, paddingBottom: 120 }}>
        <Title style={{ textAlign: 'center', marginBottom: 20 }}>Mantine Next starter</Title>
        <Text align="center" style={{ marginBottom: 40 }}>
          This starter includes all @mantine packages, feel free to remove everything that is not
          required for your application
        </Text>
        <Group position="center">
          <Button component="a" href="https://mantine.dev" size="lg">
            Mantine docs
          </Button>
          <Button
            component="a"
            href="https://mantine.dev/theming/theming-context/"
            variant="light"
            size="lg"
          >
            Change theme
          </Button>
        </Group>

        <Title order={2} style={{ marginBottom: 30, marginTop: 50, textAlign: 'center' }}>
          Explore features
        </Title>

        <Text weight={700}>Notifications system</Text>

        <Button
          variant="outline"
          style={{ marginTop: 10, marginBottom: 30 }}
          fullWidth
          onClick={() =>
            notifications.showNotification({
              title: 'Congratulations!',
              message: "You've just clicked a button",
            })
          }
        >
          Show notification
        </Button>

        <Text weight={700}>Display code with theme colors</Text>
        <Prism language="tsx" style={{ marginTop: 10, marginBottom: 30 }}>
          {code}
        </Prism>

        <Text weight={700}>Build forms fast with huge inputs library</Text>

        <InputWrapper label="Slider" style={{ marginTop: 15 }}>
          <Slider defaultValue={40} />
        </InputWrapper>

        <DatePicker label="Date picker" placeholder="Date Picker" style={{ marginTop: 15 }} />
        <NumberInput defaultValue={18} label="Number input" style={{ marginTop: 15 }} />

        <SegmentedControl
          fullWidth
          name="segmented-control"
          style={{ marginTop: 15 }}
          data={[
            { label: 'Segmented', value: 'segmented' },
            { label: 'Radio', value: 'radio' },
            { label: 'Control', value: 'control' },
          ]}
        />

        <Text weight={700} style={{ marginTop: 30, marginBottom: 15 }}>
          Add your styles to any part of component
        </Text>
        <Button
          component="a"
          target="_blank"
          rel="noopener noreferrer"
          href="https://twitter.com/mantinedev"
          size="lg"
          fullWidth
          styles={{
            filled: {
              backgroundColor: '#00acee',
              textShadow: 'unset',
              border: 0,
              height: 48,
              paddingLeft: 20,
              paddingRight: 20,
            },

            label: {
              textShadow: '1px 1px 0 #0490c7',
            },
          }}
        >
          Follow Mantine on Twitter
        </Button>

        <Prism language="tsx" style={{ marginTop: 15 }}>
          {stylesApiCode}
        </Prism>
      </Container>
    </>
  );
}

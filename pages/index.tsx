import Welcome from '../components/Welcome/Content';
import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
import Logo from '../components/Logo/Logo';
import { Box, Container } from '@mantine/core';

export default function HomePage() {
  return (
    <Container size="xl">
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          marginTop: '2rem',
          marginBottom: '2rem',
          alignItems: 'flex-start',
        }}
      >
        <Logo />
        <ColorSchemeToggle />
      </div>

      <Welcome />
    </Container>
  );
}

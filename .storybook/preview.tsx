import '@mantine/core/styles.css';

import { useEffect } from 'react';
import { useGlobals } from 'storybook/preview-api';
import { ColorSchemeScript, MantineProvider } from '@mantine/core';
import { theme } from '../theme';

export const parameters = {
  layout: 'fullscreen',
  options: {
    showPanel: false,
    // @ts-expect-error – storybook throws build error for (a: any, b: any)
    storySort: (a, b) => a.title.localeCompare(b.title, undefined, { numeric: true }),
  },
  backgrounds: { disable: true },
};

export const globalTypes = {
  theme: {
    name: 'Theme',
    description: 'Mantine color scheme',
    defaultValue: 'light',
    toolbar: {
      icon: 'mirror',
      items: [
        { value: 'light', title: 'Light' },
        { value: 'dark', title: 'Dark' },
      ],
    },
  },
};

export const decorators = [
  (renderStory: any, context: any) => {
    const [{ theme: storybookTheme }, updateGlobals] = useGlobals();

    useEffect(() => {
      const onKeyDown = (event: KeyboardEvent) => {
        const isMod = event.metaKey || event.ctrlKey;
        const isJ = event.code === 'KeyJ';

        if (!isMod || !isJ) {
          return;
        }

        event.preventDefault();
        updateGlobals({ theme: storybookTheme === 'dark' ? 'light' : 'dark' });
      };

      window.addEventListener('keydown', onKeyDown);
      return () => window.removeEventListener('keydown', onKeyDown);
    }, [storybookTheme, updateGlobals]);

    const scheme = (context.globals.theme || 'light') as 'light' | 'dark';
    return (
      <MantineProvider theme={theme} forceColorScheme={scheme}>
        <ColorSchemeScript />
        {renderStory()}
      </MantineProvider>
    );
  },
];

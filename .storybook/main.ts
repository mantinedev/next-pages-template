import type { StorybookConfig } from '@storybook/nextjs';

const config: StorybookConfig = {
  core: {
    disableWhatsNewNotifications: true,
    disableTelemetry: true,
    enableCrashReports: false,
  },
  stories: ['../components/**/*.(stories|story).@(js|jsx|ts|tsx)'],
  addons: ['storybook-dark-mode'],
  framework: {
    name: '@storybook/nextjs',
    options: {},
  },
};
export default config;

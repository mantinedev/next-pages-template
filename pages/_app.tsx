import { AppProps } from 'next/app';
import Head from 'next/head';
import {
  MantineProvider,
  NormalizeCSS,
  GlobalStyles,
  useStylesCleanup,
  SsrProvider,
} from '@mantine/core';
import { NotificationsProvider } from '@mantine/notifications';

export default function App(props: AppProps) {
  const { Component, pageProps } = props;

  useStylesCleanup();

  return (
    <>
      <SsrProvider>
        <Head>
          <title>Mantine next example</title>
          <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        </Head>

        <MantineProvider
          theme={{
            /** Put your mantine theme override here */
            colorScheme: 'light',
          }}
        >
          <NormalizeCSS />
          <GlobalStyles />
          <NotificationsProvider>
            <Component {...pageProps} />
          </NotificationsProvider>
        </MantineProvider>
      </SsrProvider>
    </>
  );
}

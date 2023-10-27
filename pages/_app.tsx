import { useState } from 'react';
import NextApp, { AppProps, AppContext } from 'next/app';
import { getCookie, setCookie } from 'cookies-next';
import Head from 'next/head';
import { MantineProvider, ColorScheme, ColorSchemeProvider } from '@mantine/core';
import { Notifications } from '@mantine/notifications';

export default function App(props: AppProps & { colorScheme: ColorScheme }) {
  const { Component, pageProps } = props;
  const [colorScheme, setColorScheme] = useState<ColorScheme>(props.colorScheme);

  const toggleColorScheme = (value?: ColorScheme) => {
    const nextColorScheme = value || (colorScheme === 'dark' ? 'light' : 'dark');
    setColorScheme(nextColorScheme);
    setCookie('mantine-color-scheme', nextColorScheme, { maxAge: 60 * 60 * 24 * 30 });
  };

  return (
    <>
      <Head>
        <title>Matthew Magnotta</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        <link rel="shortcut icon" href="/favicon.svg" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Titillium%20Web
          "
        />
      </Head>

      <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
        <MantineProvider
          theme={{
            colorScheme,
            headings: {
              fontFamily: 'Titillium Web, sans-serif',
              sizes: {
                h1: {
                  fontWeight: 1000,
                  fontSize:'4rem'
                  // fontWeight: CSSProperties['fontWeight'];
                  // lineHeight: CSSProperties['lineHeight'];
                },
              },
            },
            fontSizes: {
              xs: '0.6rem',
              sm: '.55rem',
              md: '1.2rem',
              lg: '1.2rem',
              xl: '1.2rem',
            },
          }}
          withGlobalStyles
          withNormalizeCSS
        >
          <Component {...pageProps} />
          {/* <Notifications /> */}
        </MantineProvider>
      </ColorSchemeProvider>
    </>
  );
}

App.getInitialProps = async (appContext: AppContext) => {
  const appProps = await NextApp.getInitialProps(appContext);
  return {
    ...appProps,
    colorScheme: getCookie('mantine-color-scheme', appContext.ctx) || 'dark',
  };
};

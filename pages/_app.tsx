import { useEffect } from "react";
import { JssProvider, createGenerateId } from "react-jss";
import { AppProps } from "next/app";
import Head from "next/head";
import { MantineProvider, NormalizeCSS, GlobalStyles } from "@mantine/core";
import { NotificationsProvider } from "@mantine/notifications";

export default function App(props: AppProps) {
  const { Component, pageProps } = props;

  useEffect(() => {
    const jssStyles = document.getElementById("mantine-ssr-styles");
    if (jssStyles) {
      jssStyles?.parentElement?.removeChild(jssStyles);
    }
  }, []);

  return (
    <>
      <JssProvider generateId={createGenerateId({ minify: true })}>
        <Head>
          <title>Mantine next example</title>
          <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width"
          />
        </Head>

        <MantineProvider
          theme={{
            /** Put your mantine theme override here */
            colorScheme: "light",
          }}
        >
          <NormalizeCSS />
          <GlobalStyles />
          <NotificationsProvider>
            <Component {...pageProps} />
          </NotificationsProvider>
        </MantineProvider>
      </JssProvider>
    </>
  );
}

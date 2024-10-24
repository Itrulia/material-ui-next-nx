import { AppProps } from 'next/app';
import Head from 'next/head';
import { AppCacheProvider } from '@mui/material-nextjs/v13-pagesRouter';
import { EmotionCache } from '@emotion/cache';

function CustomApp(props: AppProps & { emotionCache?: EmotionCache }) {
  const { Component, pageProps, emotionCache } = props;

  console.log(props);

  return (
    <AppCacheProvider emotionCache={emotionCache}>
      <Head>
        <title>Welcome to emotion-test!</title>
      </Head>

      <main className="app">
        <Component {...pageProps} />
      </main>
    </AppCacheProvider>
  );
}

export default CustomApp;

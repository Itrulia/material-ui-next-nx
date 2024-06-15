import { AppProps } from 'next/app';
import Head from 'next/head';
import { AppCacheProvider } from '@mui/material-nextjs/v13-pagesRouter';

function CustomApp(props: AppProps) {
  const { Component, pageProps } = props;
  return (
    <AppCacheProvider {...props}>
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

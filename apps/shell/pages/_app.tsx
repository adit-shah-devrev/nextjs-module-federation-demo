import { AppProps } from 'next/app';
import Head from 'next/head';
import './styles.css';
import { Hydrate, QueryClientProvider } from 'react-query';
import { queryClient } from '../utils/query-client';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <Head>
          <title>Welcome to shell!</title>
        </Head>
        <main className="app">
          <Component {...pageProps} />
        </main>
      </Hydrate>
    </QueryClientProvider>
  );
}

export default CustomApp;

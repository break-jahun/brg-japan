import dynamic from 'next/dynamic';
import { AppProps } from 'next/app';
import { ThemeProvider } from '@mui/material';
import Head from 'next/head';
import { getTheme } from '@/styles/theme';
import GlobalStyle from '@/styles/GlobalStyle';
import '../translation/i18n';
import Layout from 'brg-japan/common/components/Layout';
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 0,
    },
  },
});

// trigger.
function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <title>break │ brg grading</title>
      </Head>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={getTheme()}>
          <GlobalStyle />
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
      </QueryClientProvider>
    </>
  );
}

export default dynamic(() => Promise.resolve(App), { ssr: false });

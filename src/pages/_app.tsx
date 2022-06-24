import type { AppProps } from 'next/app';
import '@/styles/global.scss';

function MyApp({ Component, pageProps }: AppProps): React.ReactElement {
  return <Component {...pageProps} />;
}

export default MyApp;

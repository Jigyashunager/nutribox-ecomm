import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import '../styles/custom.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import Header from '@/components/homepage-components/main-header';
import { SSRProvider } from 'react-bootstrap'

export default function App({ Component, pageProps }: AppProps) {
  return <>
      <SSRProvider>
  <Component {...pageProps} />
  </SSRProvider>

  </>
}

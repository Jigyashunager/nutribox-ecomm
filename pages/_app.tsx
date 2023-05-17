import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import '../styles/custom.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import Header from '@/components/homepage-components/main-header';
import { SSRProvider } from 'react-bootstrap'
import Footer from '@/shared/homepage-shared/footer';
import MobileHeader from '@/components/mobilepage-components/mobile-header';
import MobileFooter from '@/components/mobilepage-components/mobile-footer';

export default function App({ Component, pageProps }: AppProps) {
  return <>
      <SSRProvider>
        <Header wishlistCount='2'/>
        <Component {...pageProps} />
        <Footer/>
        <MobileFooter/>
      </SSRProvider>

  </>
}

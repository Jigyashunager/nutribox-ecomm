import { Inter } from '@next/font/google'
import { SSRProvider } from 'react-bootstrap'
import Homepage from '@/components/homepage-components/home-page'
import MainMobilePage from '@/components/mobilepage-components/home-page-mobile';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <SSRProvider>
    <MainMobilePage/>
      <Homepage/>
    </SSRProvider>
    </>
  )
}

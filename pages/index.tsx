import { Inter } from '@next/font/google'
import { SSRProvider } from 'react-bootstrap'
import Homepage from '@/components/homepage-components/home-page'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <SSRProvider>
      <Homepage/>
    </SSRProvider>
    </>
  )
}

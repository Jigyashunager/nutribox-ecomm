import Homepage from '@/components/home-page'
import { Inter } from '@next/font/google'
import { SSRProvider } from 'react-bootstrap'

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

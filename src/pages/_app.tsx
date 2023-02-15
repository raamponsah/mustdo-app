import AccountButton from '@/components/AccountButton'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'

export default function App({ Component, pageProps }: AppProps) {
  return <>
  
      <div className='bg-amber-300 min-h-screen'>
        
    





<Component {...pageProps} />

      </div>
  </>
}

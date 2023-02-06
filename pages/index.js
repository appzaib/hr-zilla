import Head from 'next/head'
import Footer from './footer'
import Header from './header'
import Feature from './home'


export default function Home() {
  return (
    <>
      <Head>
        <title>A Better Way To Hire - Hrzilla</title>
        
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Header/>
      <Feature/>
      <Footer/>
    </>
  )
}

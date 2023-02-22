import Head from 'next/head'
import Script from 'next/script'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import Header from '../Components/Header'
import Hero from '../Components/Hero'
import Info from '../Components/Info'
import Focus from '../Components/Focus'
import Engage from '../Components/Engage'
import Footer from '../Components/Footer'



const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <div className="max-w-7xl mx-auto overflow-x-hidden"></div>
      <Head>
        <title>Thinktech</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/thinktech-favicon.svg" /> 


      </Head>
      
      <Header />
      <Hero />
      <Info />
      <Focus />
      <Engage />
      <Footer />

    </>
  )
}

import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import LandingPage from '@/components/landingPage'
import LayoutPage from '@/components/layout'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <LandingPage/>
    
  )
}

Home.getLayout = function getLayout(page) {
  return <LayoutPage>{page}</LayoutPage>;
};
'use client';
import { useStat, } from 'react';
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'
import Test from '@/components/Test'
import Cards from '@/components/Cards'
import { ChakraProvider, Row } from '@chakra-ui/react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
             <ChakraProvider>
             {/* <Row> */}
              <Cards />
              {/* </Row> */}
              </ChakraProvider>
      </div>
    </main>
  )
}

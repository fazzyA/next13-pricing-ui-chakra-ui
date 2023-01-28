'use client';
import { useState } from 'react';
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'
import Test from '@/components/Test'
import Cards from '@/components/Cards'
import { ChakraProvider } from '@chakra-ui/react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
             <ChakraProvider>
             <Test />
              <Cards />
    </ChakraProvider>
        </p>
      </div>
    </main>
  )
}

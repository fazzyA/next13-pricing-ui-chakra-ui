import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'
import Test from '@/components/Test'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          <Test />
        </p>
      </div>
    </main>
  )
}

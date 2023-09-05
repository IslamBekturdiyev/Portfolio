import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from './navbar'
import Cursor from '@/app/cursor'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'iSkiller portfolio',
  description: 'This is a partfolio website of Islambek',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar/>
        <Cursor/>
        {children}
      </body>
    </html>
  )
}

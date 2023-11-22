import Navbar from '@/components/Navbar'


import './globals.css'
import { Inter } from 'next/font/google'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'OBR GROUP',
  description: 'En OBR GROUP, nos dedicamos a la construcción y comercialización de viviendas nuevas de gran calidad en Tijuana, Baja California.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true} className={inter.className}>
      <Navbar/>
        <main>
          {children}
        </main>
        <Footer/>
      </body>
    </html>
  )
}

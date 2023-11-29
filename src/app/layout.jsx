import Navbar from '@/components/Navbar'


import './globals.css'
import { Montserrat } from 'next/font/google'
import Footer from '@/components/Footer'

const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata = {
  title: 'OBR GROUP',
  description: 'En OBR GROUP, nos dedicamos a la construcción y comercialización de viviendas nuevas de gran calidad en Tijuana, Baja California.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true} className={montserrat.className}>
      <Navbar/>
        <main>
          {children}
        </main>
        <Footer/>
      </body>
    </html>
  )
}

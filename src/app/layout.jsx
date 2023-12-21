import Navbar from '@/components/Navbar'

import { Viewport } from 'next'

import './globals.css'
import { Montserrat } from 'next/font/google'
import Footer from '@/components/Footer'
const montserrat = Montserrat({ subsets: ['latin'] })

!function (f, b, e, v, n, t, s) {
  if (f.fbq) return; n = f.fbq = function () {
    n.callMethod ?
      n.callMethod.apply(n, arguments) : n.queue.push(arguments)
  };
  if (!f._fbq) f._fbq = n; n.push = n; n.loaded = !0; n.version = '2.0';
  n.queue = []; t = b.createElement(e); t.async = !0;
  t.src = v; s = b.getElementsByTagName(e)[0];
  s.parentNode.insertBefore(t, s)
}(window, document, 'script',
  'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '2562234473946075');
fbq('track', 'PageView');



/** @type {import("next").Viewport} */
export const viewport = {
  themeColor: '#A44D24',
}
export const metadata = {
  title: 'OBR GROUP | 🏘️ Construcción y comercialización de viviendas nuevas de gran calidad en Tijuana, Baja California. ',
  description: 'En OBR GROUP, nos dedicamos a la construcción y comercialización de viviendas nuevas de gran calidad en Tijuana, Baja California.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true} className={montserrat.className}>
        <head>
          <noscript><img height="1" width="1" style="display:none"
            src="https://www.facebook.com/tr?id=2562234473946075&ev=PageView&noscript=1"
          /></noscript>
        </head>
        <Navbar />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}

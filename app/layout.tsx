import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'

const pageTitle = 'Faro Casino — официальный сайт, зеркало и игра онлайн без лишних вопросов'
const pageDescription = 'Faro Casino: понятный гид по официальному сайту, рабочему зеркалу и игре онлайн. Проверьте адрес, условия, лимиты и начните знакомство с платформой спокойно и осознанно.'

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  generator: 'v0.app',
  alternates: { canonical: 'https://farocasino12.vercel.app/' },
  icons: { icon: '/faro-favicon.png', apple: '/faro-favicon.png' },
  robots: { index: true, follow: true },
}

export const viewport: Viewport = { themeColor: '#101a2b', colorScheme: 'light', width: 'device-width', initialScale: 1, maximumScale: 5 }

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru" className="bg-[#f5f2eb]">
      <head>
        <link rel="canonical" href="https://farocasino12.vercel.app/" />
        <meta name="format-detection" content="telephone=no" />
      </head>
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}


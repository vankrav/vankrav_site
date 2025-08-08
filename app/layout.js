import './globals.css';
import { Inter } from 'next/font/google';


const inter = Inter({ subsets: ['latin', 'cyrillic'], variable: '--font-inter' });

export const metadata = {
  metadataBase: new URL('https://vankrav-site.example'),
  title: {
    default: 'Ivan Kravchuk — Portfolio',
    template: '%s — Ivan Kravchuk',
  },
  description: 'Media Artist, Creative Coder, Designer — портфолио интерактивных проектов.',
  openGraph: {
    title: 'Ivan Kravchuk — Portfolio',
    description: 'Media Artist, Creative Coder, Designer — портфолио интерактивных проектов.',
    url: 'https://vankrav-site.example',
    siteName: 'Vankrav',
    images: [
      { url: '/og.png', width: 1200, height: 630, alt: 'Vankrav Portfolio' },
    ],
    locale: 'ru_RU',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ivan Kravchuk — Portfolio',
    description: 'Media Artist, Creative Coder, Designer — портфолио интерактивных проектов.',
    images: ['/og.png'],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body className={`${inter.variable}`}>
       
        <div className="app-content">
          {children}
        </div>
      </body>
    </html>
  );
}


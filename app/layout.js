import './globals.css';
import { Inter } from 'next/font/google';
import GameOfLifeBackground from './components/GameOfLifeBackground';
import Footer from './components/Footer';
import { cookies } from 'next/headers';


const inter = Inter({ subsets: ['latin', 'cyrillic'], variable: '--font-inter' });

export const metadata = {
  metadataBase: new URL('https://vankrav.vercel.app'),
  title: {
    default: 'Ivan Kravchuk — Portfolio',
    template: '%s — Ivan Kravchuk',
  },
  description: 'Media Artist, Creative Coder, Designer — портфолио интерактивных проектов.',
  openGraph: {
    title: 'Ivan Kravchuk — Portfolio',
    description: 'Media Artist, Creative Coder, Designer — портфолио интерактивных проектов.',
    url: 'https://vankrav.vercel.app',
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
  const cookieStore = cookies();
  const lang = cookieStore.get('lang')?.value === 'en' ? 'en' : 'ru';
  return (
    <html lang={lang}>
      <body className={`${inter.variable}`}>
        <GameOfLifeBackground />
        <div className="app-content">
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}


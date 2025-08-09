import { cookies } from 'next/headers';
import HeaderClient from './HeaderClient';

export default function Header() {
  const lang = cookies().get('lang')?.value === 'en' ? 'en' : 'ru';
  return <HeaderClient initialLang={lang} />;
}


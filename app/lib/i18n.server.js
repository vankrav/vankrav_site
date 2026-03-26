import { cookies } from 'next/headers';

export function getLangServer() {
  try {
    const value = cookies().get('lang')?.value;
    return value === 'en' ? 'en' : 'ru';
  } catch {
    return 'ru';
  }
}



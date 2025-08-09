'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

function getCookie(name) {
  if (typeof document === 'undefined') return null;
  const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
  return match ? decodeURIComponent(match[2]) : null;
}

function setCookie(name, value, days = 365) {
  if (typeof document === 'undefined') return;
  const d = new Date();
  d.setTime(d.getTime() + days * 24 * 60 * 60 * 1000);
  const expires = 'expires=' + d.toUTCString();
  document.cookie = `${name}=${encodeURIComponent(value)}; ${expires}; path=/`;
}

export default function LanguageSwitcher({ className = '' }) {
  const router = useRouter();
  const [lang, setLang] = useState('ru');

  useEffect(() => {
    const current = getCookie('lang');
    if (current === 'ru' || current === 'en') setLang(current);
  }, []);

  const toggle = () => {
    const next = lang === 'ru' ? 'en' : 'ru';
    setCookie('lang', next);
    setLang(next);
    try { document.documentElement.lang = next; } catch {}
    router.refresh();
  };

  return (
    <button
      type="button"
      aria-label={lang === 'ru' ? 'Переключить на English' : 'Switch to Russian'}
      onClick={toggle}
      className={className || 'lang-switch'}
      title={lang === 'ru' ? 'EN' : 'RU'}
    >
      {lang === 'ru' ? 'EN' : 'RU'}
    </button>
  );
}



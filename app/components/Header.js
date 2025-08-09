 'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import LanguageSwitcher from './LanguageSwitcher';
import { getLangClient, dictionary } from '@/app/lib/i18n';

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href) => pathname === href;
  const lang = typeof window !== 'undefined' ? getLangClient() : 'ru';
  const t = dictionary[lang];

  // Закрыть меню при смене роута
  useEffect(() => {
    if (open) setOpen(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  // Escape + блокировка скролла при открытом меню
  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === 'Escape') setOpen(false);
    };
    if (open) {
      document.addEventListener('keydown', onKeyDown);
      const prev = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = prev;
        document.removeEventListener('keydown', onKeyDown);
      };
    }
  }, [open]);

  return (
    <header className="header">
      <div className="container header-inner">
      <Link href="/" className="logo">vankrav</Link>
       
        <nav className="nav">
          {/* <Link href="/work" className={isActive('/work') ? 'active' : ''}>{t.nav.projects}</Link> */}
          <Link href="/projects" className={isActive('/projects') ? 'active' : ''}>{t.nav.projects}</Link>
          <Link href="/about" className={isActive('/about') ? 'active' : ''}>{t.nav.about}</Link>
          <Link href="/resume" className={isActive('/resume') ? 'active' : ''}>{t.nav.resume}</Link>
          <Link href="/contact" className={isActive('/contact') ? 'active' : ''}>{t.nav.contact}</Link>
        </nav>
        <LanguageSwitcher />
        <button
          className={"burger-button" + (open ? ' open' : '')}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? t.header.closeMenu : t.header.openMenu}
          onClick={() => setOpen((v) => !v)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
      <div className={"menu-overlay" + (open ? ' open' : '')} onClick={() => setOpen(false)} />
      <nav id="mobile-menu" className={"mobile-menu" + (open ? ' open' : '')}>
        <div className="mobile-menu-inner">
          <Link href="/projects" className="mobile-menu-item" onClick={() => setOpen(false)}>{t.nav.projects}</Link>
          <Link href="/about" className="mobile-menu-item" onClick={() => setOpen(false)}>{t.nav.about}</Link>
          <Link href="/contact" className="mobile-menu-item" onClick={() => setOpen(false)}>{t.nav.contact}</Link>
          <Link href="/resume" className="mobile-menu-item" onClick={() => setOpen(false)}>{t.nav.resume}</Link>
          <a href="mailto:hello@vankrav.com" className="mobile-menu-item" onClick={() => setOpen(false)}>{t.nav.email}</a>
          <a href="https://github.com/vankrav" target="_blank" rel="noreferrer" className="mobile-menu-item" onClick={() => setOpen(false)}>{t.nav.github}</a>
          <div onClick={() => setOpen(false)}>
            <LanguageSwitcher className="mobile-menu-item" />
          </div>
        </div>
      </nav>
    </header>
  );
}


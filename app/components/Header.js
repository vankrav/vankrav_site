 'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href) => pathname === href;

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
          <Link href="/work" className={isActive('/work') ? 'active' : ''}>Работы</Link>
          <Link href="/resume" className={isActive('/resume') ? 'active' : ''}>Резюме</Link>
          <Link href="/contact" className={isActive('/contact') ? 'active' : ''}>Контакты</Link>
        </nav>
        <button
          className={"burger-button" + (open ? ' open' : '')}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Закрыть меню' : 'Открыть меню'}
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
          <Link href="/work" className="mobile-menu-item" onClick={() => setOpen(false)}>Работы</Link>
          <Link href="/contact" className="mobile-menu-item" onClick={() => setOpen(false)}>Контакты</Link>
          <Link href="/resume" className="mobile-menu-item" onClick={() => setOpen(false)}>Резюме</Link>
          <a href="mailto:hello@vankrav.com" className="mobile-menu-item" onClick={() => setOpen(false)}>Email</a>
          <a href="https://github.com/vankrav" target="_blank" rel="noreferrer" className="mobile-menu-item" onClick={() => setOpen(false)}>GitHub</a>
        </div>
      </nav>
    </header>
  );
}


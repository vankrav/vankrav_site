'use client';
import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href) => pathname === href;

  return (
    <header className="header">
      <div className="container header-inner">
        <Link href="/" className="logo">vankrav</Link>
        <nav className="nav">
          <Link href="/work" className={isActive('/work') ? 'active' : ''}>Работы</Link>
          <Link href="/contact" className={isActive('/contact') ? 'active' : ''}>Контакты</Link>
        </nav>
        <div className={"menu" + (open ? ' open' : '')}>
          <button className="menu-button" onClick={() => setOpen((v) => !v)}>Меню</button>
          <div className="menu-list" onMouseLeave={() => setOpen(false)}>
            <Link href="/resume" className="menu-item">Резюме</Link>
            <a className="menu-item" href="mailto:hello@vankrav.com">Email</a>
            <a className="menu-item" href="https://github.com/vankrav" target="_blank" rel="noreferrer">GitHub</a>
          </div>
        </div>
      </div>
    </header>
  );
}


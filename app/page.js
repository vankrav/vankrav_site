import TextType from './components/TextType';

const links = [
  {
    title: 'Портфолио',
    subtitle: 'Google Drive',
    href: 'https://drive.google.com/file/d/1YePA4yDv0fr9GnbHt7KpT35qF7OUvGWL/view?usp=sharing',
    icon: '/icons/folder.svg',
    color: '#000000',
  },
  {
    title: 'Behance',
    subtitle: 'Ivan Kravchuk',
    href: 'https://www.behance.net/e3c77ba9',
    icon: '/icons/iconmonstr-behance-1.svg',
    color: '#1769ff',
  },
  {
    title: 'Telegram',
    subtitle: '@vankrav',
    href: 'https://t.me/vankrav',
    icon: '/icons/tg.svg',
    color: '#26a5e4',
  },
  {
    title: 'Telegram канал',
    subtitle: 'священная чахорда',
    href: 'https://t.me/van_krav',
    icon: '/icons/megaphone.svg',
    color: '#26a5e4',
  },
  
  {
    title: 'Instagram*',
    subtitle: '@vankrav',
    href: 'https://instagram.com/vankrav',
    icon: '/icons/instagram.svg',
    color: '#e4405f',
  },
  {
    title: 'TikTok',
    subtitle: '@vankrav',
    href: 'https://tiktok.com/@van.krav',
    icon: '/icons/tiktok.svg',
    color: '#111111',
  },
];

export default function ComingSoonPage() {
  return (
    <main className="coming-soon">
      <div className="coming-soon__container">
        <div className="coming-soon__header">
          <img 
            src="/images/ava.jpeg" 
            alt="Ivan Kravchuk" 
            className="coming-soon__avatar"
          />
          <h1 className="coming-soon__title">
            <span className="accent">Ivan Kravchuk</span>
          </h1>
          <p className="coming-soon__subtitle">
            <TextType
              as="span"
              text={['Media Artist', 'Creative Coder', 'Designer', 'TouchDesigner Developer', 'Creative Technologist']}
              typingSpeed={40}
              deletingSpeed={35}
              pauseDuration={2000}
              initialDelay={300}
              showCursor={true}
              cursorCharacter="_"
              cursorBlinkDuration={0.7}
              startOnVisible={true}
              variableSpeed={{ min: 28, max: 55 }}
            />
          </p>
        </div>

        {/* <div className="coming-soon__status">
          <div className="coming-soon__badge">
            <span className="coming-soon__dot" />
            Сайт в разработке
          </div>
        </div> */}

        <nav className="coming-soon__links">
          {links.map((link) => (
            <a
              key={link.title}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="link-card"
              style={{ '--link-color': link.color }}
            >
              <span className="link-card__icon">
                <img src={link.icon} width="22" height="22" alt="" />
              </span>
              <span className="link-card__content">
                <span className="link-card__title">{link.title}</span>
                <span className="link-card__subtitle">{link.subtitle}</span>
              </span>
              <span className="link-card__arrow">→</span>
            </a>
          ))}
        </nav>

        <p className="coming-soon__disclaimer">
          * Meta признана экстремистской организацией и запрещена в РФ
        </p>
      </div>
    </main>
  );
}

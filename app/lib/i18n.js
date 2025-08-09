export const dictionary = {
  ru: {
    header: {
      openMenu: 'Открыть меню',
      closeMenu: 'Закрыть меню',
    },
    nav: {
      work: 'Портфолио',
      portfolio: 'Портфолио',
      projects: 'Проекты',
      about: 'О себе',
      contact: 'Контакты',
      resume: 'CV',
      email: 'Email',
      github: 'GitHub',
    },
    hero: {
      name: 'Иван Кравчук',
      titles: ['Медиахудожник', 'Креативный кодер', 'Дизайнер', 'Разработчик'],
      paragraph:
        'Работал с «Radugadesign», «Generative gallery», «Новой Третьяковкой» и Музеем «Гараж». Открыт к нетиповым проектам на стыке искусства, дизайна и технологий.',
      ctaPrimary: 'Смотреть работы',
      ctaSecondary: 'Связаться',
    },
  },
  en: {
    header: {
      openMenu: 'Open menu',
      closeMenu: 'Close menu',
    },
    nav: {
      work: 'Portfolio',
      portfolio: 'Portfolio',
      projects: 'Projects',
      about: 'About',
      contact: 'Contact',
      resume: 'CV',
      email: 'Email',
      github: 'GitHub',
    },
    hero: {
      name: 'Ivan Kravchuk',
      titles: ['Media Artist', 'Creative Coder', 'Designer', 'Developer'],
      paragraph:
        'Worked with “Radugadesign”, “Generative Gallery”, the New Tretyakov Gallery and Garage Museum. Open to unconventional projects at the intersection of art, design and technology.',
      ctaPrimary: 'See projects',
      ctaSecondary: 'Contact me',
    },
  },
};

export function getLangClient() {
  if (typeof document === 'undefined') return 'ru';
  // Источник истины — cookie
  const match = document.cookie.match(/(?:^|; )lang=([^;]*)/);
  const fromCookie = match ? decodeURIComponent(match[1]) : null;
  if (fromCookie === 'en' || fromCookie === 'ru') return fromCookie;
  // Фоллбек — атрибут html
  const htmlLang = document.documentElement.lang;
  if (htmlLang === 'en' || htmlLang === 'ru') return htmlLang;
  return 'ru';
}



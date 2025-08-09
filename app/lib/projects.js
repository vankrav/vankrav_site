export const projects = [
  {
    slug: 'neiro-most',
    title: 'Neiro‑Most',
    year: 2025,
    category: 'Media Art',
    description: 'Генеративная инсталляция Миши Моста для СберУниверситета',
    images: [
      '/images/neiro-most.jpeg'
    ],
    tech: ['TouchDesigner', 'comfyUI'],
    links: { publication: 'https://t.me/generativegallery/3167' },
    content:
      'Интегрировал предобученные ИИ‑модели в физическую инсталляцию, разработал интерфейс ввода и локального перевода промптов, реализовал автоматический запуск и автономную работу системы. Обеспечивал техническую поддержку во время экспонирования.'
  },
  {
    slug: 'motion-concrete',
    title: 'Motion Concréte',
    year: 2024,
    category: 'Interactive',
    description: 'Мультимедийный проект‑исследование',
    images: [
      '/images/motion-concrete.jpeg'
    ],
    tech: ['TouchDesigner', 'MediaPipe'],
    links: { publication: 'https://disk.yandex.ru/i/73pOErFxDlnqRQ' },
    content:
      'Мультимедийный проект‑исследование бытовых движений: DIY LED‑экран, терменвокс и камера. Сетап на TouchDesigner преобразует движения в аудио‑визуальный опыт. Представлялся на выставке Generative Gallery «Где я? / Система координат».'
  },
  {
    slug: 'tactile-models',
    title: 'Тактильные модели',
    year: 2024,
    category: 'Design',
    description: 'Инклюзивные выставочные объекты',
    images: [
      '/images/tactile-models.jpeg'
    ],
    tech: ['Blender', '3D‑печать (SLA, FDM)'],
    links: { publication: 'https://example.com/tactile-models' },
    content: '3D‑моделирование, адаптация под печать, взаимодействие с инклюзивным отделом. Для проектов «Гараж» и Новой Третьяковки.'
  },
  {
    slug: 'dif-tor-heh-smusma',
    title: 'Dif tor heh smusma',
    year: 2025,
    category: 'Media Art',
    description: 'Перформанс Марии Рогозиной для выставки «Сигнальные огни» (КЦСИ, 2025)',
    images: [
      '/images/smusma.jpeg'
    ],
    tech: ['Arduino', 'ESP32', 'TouchDesigner', 'Ableton Live'],
    links: {},
    content:
      'Световая инсталляция на берегу синхронизирована с наклоном весла на сап‑борде через акселерометр. Реал‑тайм управление паттернами и собственный саундскейп перформанса.'
  },
  {
    slug: 'nature-morte-nature-vivant',
    title: 'nature morte | nature vivant',
    year: 2025,
    category: 'Interactive',
    description: 'Интерактивная инсталляция о восприятии и оживлении объектов через сердцебиение',
    images: [
      '/images/nature-morte-nature-vivant.jpeg'
    ],
    tech: ['BPM sensor', 'TouchDesigner'],
    links: {},
    content:
      'Исследует, как человек меняет свойства предметов собственным восприятием. Экспонировалась: Septemas «Защитные пространства: Защита/Уязвимость» (2025); КЦСИ «Сигнальные огни» (2025).'
  },
  {
    slug: 'pixel',
    title: 'Pixel (совместно с Сашей Котенёвой)',
    year: 2025,
    category: 'Media Art',
    description: 'Интерактивная инсталляция о синтезе цвета и звука',
    images: [
      '/images/pixel.jpeg'
    ],
    tech: ['TouchDesigner'],
    links: { publication: 'https://generativegallery.com/where_am_i/' },
    content:
      'Исследование синтеза цвета и звука, вдохновлённое процессом фотопечати с оттенком берлинской лазури. Представлена на выставке Generative Gallery «Где я? / Система координат». '
  },
  {
    slug: 'city-flowers',
    title: 'City flowers',
    year: 2025,
    category: 'Media Art',
    description: 'Серия phygital‑работ на основе преобразования записей городских аудиоландшафтов',
    images: [
      'https://images.unsplash.com/photo-1539037116277-4db20889f2d4?q=80&w=1200&auto=format&fit=crop'
    ],
    tech: ['TouchDesigner', 'Blender', 'SLA‑печать'],
    links: { publication: 'https://disk.yandex.ru/i/ACKCSalbzE3Yfw' },
    content:
      'Генеративная графика, преобразующая аудиоландшафты в абстрактные образы цветов. Физические объекты напечатаны на SLA‑принтере.'
  },
  {
    slug: 'eto-proidet',
    title: 'Это пройдёт',
    year: 2024,
    category: 'Net‑art',
    description: 'Net‑art проект‑медитация на клеточном автомате Game of Life',
    images: [
      'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1200&auto=format&fit=crop'
    ],
    tech: ['Next.js', 'Canvas/WebGL'],
    links: { demo: 'https://it-will-pass.vercel.app/' },
    content:
      'Основан на «Игре Жизнь» Джона Конвея. Пользователь задаёт начальные условия и наблюдает развитие системы, как медитацию о переменах.'
  }
];

export function getProjectBySlug(slug) {
  return projects.find((p) => p.slug === slug);
}


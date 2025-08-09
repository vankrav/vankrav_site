import Header from './components/Header';
import ProjectCard from './components/ProjectCard';
import { projects } from './lib/projects';
import Link from 'next/link';
import Image from 'next/image';
import TextType from './components/TextType';
import { dictionary } from './lib/i18n';
import { getLangServer } from './lib/i18n.server';

export default function HomePage() {
  const lang = getLangServer();
  const t = dictionary[lang];
  const titles = t.hero.titles;
  const heroName = t.hero.name;
  const heroParagraph = t.hero.paragraph;
  const ctaPrimary = t.hero.ctaPrimary;
  const ctaSecondary = t.hero.ctaSecondary;
  return (
    <>
      <Header />
      <section className="hero">
        <div className="container">
          <h1>
            <span className="accent">{heroName}</span>
            <br/>
            <TextType
              as="span"
              text={titles}
              typingSpeed={35}
              deletingSpeed={30}
              pauseDuration={2200}
              initialDelay={100}
              showCursor={true}
              hideCursorWhileTyping={false}
              cursorCharacter="_"
              cursorBlinkDuration={0.7}
              className=""
              startOnVisible={true}
              variableSpeed={{ min: 24, max: 60 }}
            />
          </h1>
          <p>{heroParagraph}</p>
          <div className="hero-cta">
            <Link href="/work" className="btn primary">{ctaPrimary}</Link>
            <Link href="/contact" className="btn accent">{ctaSecondary}</Link>
            {/* <Link href="/resume" className="btn">Резюме</Link> */}
          </div>
        </div>
      </section>

      <main className="container">
        <section className="section">
          <h2 className="section-title">Проекты</h2>
          <div className="grid">
            {projects.slice(0, 6).map((p) => (
              <ProjectCard key={p.slug} project={p} basePath="/projects" />
            ))}
          </div>
          <div style={{ marginTop: 40 }}>
            <Link href="/work" className="btn">Все проекты →</Link>
          </div>
        </section>
      </main>

      {/* Глобальный футер теперь в layout */}
    </>
  );
}


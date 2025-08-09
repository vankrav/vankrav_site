import Header from './components/Header';
import ProjectCard from './components/ProjectCard';
import { projects } from './lib/projects';
import Link from 'next/link';
import Image from 'next/image';

export default function HomePage() {
  return (
    <>
      <Header />
      <section className="hero">
        <div className="container">
          <h1>
          
            <span className="accent">Ivan Kravchuk</span>
            {/* <span className="accent">Иван Кравчук</span> */}
            <br/>
            Media Artist / <br/>Creative Coder
            {/* Медиахудожник / <br/>Креативный кодер */}
          </h1>
          <p>
          Работал с «Radugadesign», «Generative gallery», «Новой Третьяковкой» и Музеем «Гараж». Открыт к нетиповым проектам  на стыке искусства, дизайна и технологий.
          </p>
          <div className="hero-cta">
            <Link href="/work" className="btn primary">Смотреть работы</Link>
            <Link href="/contact" className="btn accent">Связаться</Link>
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

      <footer className="footer">
        <div className="container">© {new Date().getFullYear()} vankrav</div>
      </footer>
    </>
  );
}


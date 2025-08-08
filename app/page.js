import Header from './components/Header';
import ProjectCard from './components/ProjectCard';
import { projects } from './lib/projects';
import Link from 'next/link';

export default function HomePage() {
  return (
    <>
      <Header />
      <section className="hero">
        <div className="container">
          <h1>
            <span className="accent">Ivan Kravchuk</span><br/>
            Media Artist / <br/>Creative Coder
          </h1>
          <p>
          Работал с «Radugadesign», «Generative gallery», «Новой Третьяковкой» и Музеем «Гараж». Открыт к нетиповым проектам  на стыке искусства, дизайна и технологий.
          </p>
          <div className="hero-cta">
            <Link href="/work" className="btn primary">Все проекты</Link>
            <Link href="/contact" className="btn">Связаться</Link>
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
          <div style={{ marginTop: 20 }}>
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


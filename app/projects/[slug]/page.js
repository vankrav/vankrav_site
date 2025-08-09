import Header from '@/app/components/Header';
import { getProject } from '@/app/lib/cms';
import { projects } from '@/app/lib/projects';
import Link from 'next/link';

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const project = await getProject(params.slug);
  return { title: `${project?.title ?? 'Project'} — Ivan Kravchuk` };
}

export default async function ProjectPage({ params }) {
  const project = await getProject(params.slug);

  if (!project) {
    return (
      <>
        <Header />
        <main className="container section">
          <p>Проект не найден.</p>
          <Link href="/work" className="btn" style={{ marginTop: 12 }}>К списку проектов</Link>
        </main>
      </>
    );
  }

  return (
    <>
      <Header />
      <main className="container section">
        <h1 style={{ fontSize: 'clamp(32px,5vw,64px)', margin: 0 }}>{project.title}</h1>
        <div className="card-meta" style={{ marginTop: 8 }}>{project.year} · {project.category}</div>

        <div style={{ marginTop: 24, maxWidth: 820 }}>
          <p className="card-desc">{project.content}</p>
        </div>

        {project.tech?.length ? (
          <section className="section" style={{ paddingTop: 24 }}>
            <h2 className="section-title">Technologies</h2>
            <div>
              {project.tech.map((t) => (
                <span key={t} className="tag" style={{ marginBottom: 6 }}>{t}</span>
              ))}
            </div>
          </section>
        ) : null}

        {project.links ? (
          <section className="section" style={{ paddingTop: 0 }}>
            <h2 className="section-title">Links</h2>
            <div className="list">
              {project.links.demo && <a href={project.links.demo} className="list-item" target="_blank" rel="noreferrer">Demo ↗</a>}
              {project.links.github && <a href={project.links.github} className="list-item" target="_blank" rel="noreferrer">GitHub ↗</a>}
              {project.links.publication && <a href={project.links.publication} className="list-item" target="_blank" rel="noreferrer">Publication ↗</a>}
            </div>
          </section>
        ) : null}

        <div style={{ marginTop: 24 }}>
          <Link href="/projects" className="btn">← Все проекты</Link>
        </div>
      </main>
    </>
  );
}


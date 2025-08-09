import Header from '@/app/components/Header';
import Image from 'next/image';
import { getProjectBySlug, projects } from '@/app/lib/projects';
import Link from 'next/link';

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }) {
  const project = getProjectBySlug(params.slug);
  return { title: `${project?.title ?? 'Проект'} — Vankrav` };
}

export default function ProjectPage({ params }) {
  const project = getProjectBySlug(params.slug);
  if (!project) {
    return (
      <>
        <Header />
        <main className="container section">
          <p>Проект не найден.</p>
          <Link href="/projects" className="btn" style={{ marginTop: 12 }}>К списку проектов</Link>
        </main>
      </>
    );
  }

  return (
    <>
      <Header />
      <main className="container section">
        <h1 style={{ marginBottom: 8 }}>{project.title}</h1>
        <p className="card-desc" style={{ marginBottom: 24 }}>{project.description}</p>
        <div style={{ display: 'grid', gap: 12 }}>
          {project.images.map((src, idx) => (
            <Image
              key={idx}
              src={src}
              alt={`${project.title} — фото ${idx + 1}`}
              width={1200}
              height={720}
              sizes="(max-width: 768px) 100vw, 1140px"
              priority={idx === 0}
            />
          ))}
        </div>

        <div style={{ marginTop: 24, color: 'var(--muted)' }}>{project.content}</div>

        {Array.isArray(project.tech) && project.tech.length > 0 && (
          <div style={{ marginTop: 24 }}>
            <div className="card-meta" style={{ marginBottom: 8 }}>Технологии</div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
              {project.tech.map((t) => (
                <span key={t} className="tag">{t}</span>
              ))}
            </div>
          </div>
        )}

        {(() => {
          const linkEntries = Object.entries(project.links || {});
          if (!linkEntries.length) return null;
          const primary =
            linkEntries.find(([k]) => k === 'demo') ||
            linkEntries.find(([k]) => k === 'publication') ||
            linkEntries[0];
          const [kind, href] = primary;
          const label = kind === 'demo' ? 'Открыть демо' : kind === 'publication' ? 'Открыть публикацию' : 'Перейти по ссылке';
          return (
            <div style={{ marginTop: 24 }}>
              <a className="btn accent" href={href} target="_blank" rel="noopener noreferrer">
                {label} ↗
              </a>
            </div>
          );
        })()}

        <div style={{ marginTop: 24 }}>
          <Link href="/projects" className="btn">← Все проекты</Link>
        </div>
      </main>
    </>
  );
}


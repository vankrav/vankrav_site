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
            <Image key={idx} src={src} alt={`${project.title} ${idx + 1}`} width={1200} height={720} />
          ))}
        </div>

        <div style={{ marginTop: 24, color: 'var(--muted)' }}>{project.content}</div>

        <div style={{ marginTop: 24 }}>
          <Link href="/projects" className="btn">← Все проекты</Link>
        </div>
      </main>
    </>
  );
}


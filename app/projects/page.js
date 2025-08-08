import Header from '../components/Header';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../lib/projects';

export const metadata = { title: 'Проекты — Vankrav' };

export default function ProjectsPage() {
  return (
    <>
      <Header />
      <main className="container section">
        <h1 className="section-title">Все проекты</h1>
        <div className="grid">
          {projects.map((p) => (
            <ProjectCard key={p.slug} project={p} basePath="/projects" />
          ))}
        </div>
      </main>
    </>
  );
}


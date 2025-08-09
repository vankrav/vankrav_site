import Header from '../components/Header';
import ProjectCard from '../components/ProjectCard';
import { getAllProjects } from '../lib/cms';
import WorkFilters from './workFilters';

export const metadata = { title: 'Work — Ivan Kravchuk' };

export default async function WorkPage({ searchParams }) {
  const all = await getAllProjects();
  const active = (searchParams?.type ?? 'all').toLowerCase();
  const filtered = all.filter((p) => {
    if (active === 'all') return true;
    if (active === 'media') return p.category === 'Media Art';
    if (active === 'interactive') return p.category === 'Interactive';
    if (active === 'design') return p.category === 'Design';
    return true;
  });

  return (
    <>
      <Header />
      <main className="section">
        <div className="container">
          <h1 className="section-title">Проекты</h1>
          <WorkFilters active={active} />
        </div>
        <div className="work-grid">
          <div className="grid">
            {filtered.map((p) => (
              <ProjectCard key={p.slug} project={p} />
            ))}
          </div>
        </div>
      </main>
    </>
  );
}


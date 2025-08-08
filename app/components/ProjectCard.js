import Link from 'next/link';
import Image from 'next/image';

export default function ProjectCard({ project, basePath = '/projects' }) {
  const cover = project.cover || (project.images && project.images[0]) || null;
  return (
    <Link href={`${basePath}/${project.slug}`} className="card">
      {cover ? (
        <Image src={cover} alt={project.title} width={600} height={360} />
      ) : null}
      <div className="card-body">
        <div className="card-title">{project.title}</div>
        <div className="card-meta">{project.year} · {project.category}</div>
        <div className="card-desc">{project.description}</div>
      </div>
    </Link>
  );
}


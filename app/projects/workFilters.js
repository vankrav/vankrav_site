'use client';
import { useRouter, useSearchParams } from 'next/navigation';

export default function WorkFilters({ active }) {
  const router = useRouter();
  const params = useSearchParams();

  const setType = (type) => {
    const newParams = new URLSearchParams(params.toString());
    if (type === 'all') newParams.delete('type');
    else newParams.set('type', type);
    router.replace(`/projects?${newParams.toString()}`);
  };

  return (
    <div className="filters" role="toolbar" aria-label="Фильтры проектов">
      <button className="filter" aria-pressed={active === 'all'} onClick={() => setType('all')}>All</button>
      <button className="filter" aria-pressed={active === 'media'} onClick={() => setType('media')}>Media Art</button>
      <button className="filter" aria-pressed={active === 'interactive'} onClick={() => setType('interactive')}>Interactive</button>
      <button className="filter" aria-pressed={active === 'design'} onClick={() => setType('design')}>Design</button>
    </div>
  );
}


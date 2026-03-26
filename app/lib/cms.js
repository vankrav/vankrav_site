// Абстракция CMS: Contentful, с корректным фолбэком на локальные данные
import { projects as localProjects } from './projects';

function getContentfulClient() {
  const space = process.env.CONTENTFUL_SPACE_ID;
  const token = process.env.CONTENTFUL_DELIVERY_TOKEN;
  if (!space || !token) return null;
  // динамический импорт через Function, чтобы бандлер не резолвил пакет без ENV
  // eslint-disable-next-line no-new-func
  const dynamicImport = new Function('m', 'return import(m)');
  return dynamicImport('contentful').then(({ createClient }) => createClient({ space, accessToken: token }));
}

function mapEntryToProject(entry) {
  const f = entry.fields;
  return {
    slug: f.slug,
    title: f.title,
    year: f.year,
    category: f.category,
    tags: f.tags || [],
    description: f.description || '',
    images: (f.images || []).map((img) => (typeof img === 'string' ? img : img?.fields?.file?.url)).filter(Boolean),
    tech: f.tech || [],
    links: f.links || {},
    content: f.content || '',
  };
}

export async function getAllProjects() {
  try {
    const clientFactory = await getContentfulClient();
    if (!clientFactory) return localProjects;
    const client = await clientFactory;
    const res = await client.getEntries({ content_type: 'project', order: ['-fields.year', 'fields.title'] });
    const items = res.items.map(mapEntryToProject);
    return items.length ? items : localProjects;
  } catch (_) {
    return localProjects;
  }
}

export async function getProject(slug) {
  try {
    const clientFactory = await getContentfulClient();
    if (!clientFactory) return localProjects.find((p) => p.slug === slug) || null;
    const client = await clientFactory;
    const res = await client.getEntries({ content_type: 'project', 'fields.slug': slug, limit: 1 });
    if (res.items.length) return mapEntryToProject(res.items[0]);
    return localProjects.find((p) => p.slug === slug) || null;
  } catch (_) {
    return localProjects.find((p) => p.slug === slug) || null;
  }
}


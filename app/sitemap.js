export default async function sitemap() {
  const base = 'https://vankrav-site.example';
  const routes = ['', '/work', '/about', '/services', '/contact'].map((p) => ({ url: base + p, lastModified: new Date() }));
  return routes;
}


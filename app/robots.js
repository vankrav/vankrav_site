export default function robots() {
  const host = 'https://vankrav-site.example';
  return {
    rules: [{ userAgent: '*' }],
    sitemap: `${host}/sitemap.xml`,
    host,
  };
}


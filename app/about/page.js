import Header from '../components/Header';

export const metadata = { title: 'About — Ivan Kravchuk' };

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="container section">
        <h1>About</h1>
        <p className="card-desc" style={{ maxWidth: 820 }}>
          Media Artist и Creative Coder. Создаю генеративные визуальные системы, интерактивные инсталляции
          и минималистичные интерфейсы. Работаю на стыке искусства и технологий: WebGL, Real‑time Graphics,
          дизайн систем и прототипирование.
        </p>
        <section className="section" style={{ paddingTop: 24 }}>
          <h2 className="section-title">Exhibitions / Awards / Publications</h2>
          <ul>
            <li>2024 — Digital Flow — Exhibition</li>
            <li>2023 — Shader Week — Speaker</li>
            <li>2022 — Design Systems Conf — Publication</li>
          </ul>
        </section>
      </main>
    </>
  );
}


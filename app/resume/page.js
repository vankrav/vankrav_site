import Header from '../components/Header';

export const metadata = { title: 'Резюме — vankrav' };

export default function ResumePage() {
  return (
    <>
      <Header />
      <main className="container section">
        <h1>Резюме</h1>
        <p className="card-desc">Кратко о навыках и опыте. При необходимости подключим PDF.</p>
        <h2 className="section-title">Опыт</h2>
        <p className="card-desc">Работал с «Radugadesign», «Generative Gallery», «Новой Третьяковкой», Музеем «Гараж».</p>
        <h2 className="section-title">Навыки</h2>
        <ul>
          <li>Touchdesigner, Blender, Unreal Engine, Ableton, Adobe CC, Figma</li>
          <li>Python, C/C++, JavaScript, Git</li>
          <li>Arduino, ESP32, DMX, OSC, 3D‑печать</li>
        </ul>
      </main>
    </>
  );
}


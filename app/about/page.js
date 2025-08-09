import Header from '../components/Header';
import Image from 'next/image';

export const metadata = { title: 'О себе — Ivan Kravchuk' };

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="section">
        <div className="container about">
          <h1 >О себе</h1>

          <div className="about-grid">
            <div className="about-photo">
              <Image
                src="/images/ava.jpeg"
                alt="Иван Кравчук"
                width={128}
                height={128}
                className="about-ava"
                priority
              />
            </div>

            <div className="about-content">
              <section className="about-section">
                <h2 className="section-title">Образование</h2>
                <div className="about-list">
                  <div className="about-item">
                    <strong>Прикладная информатика в дизайне</strong>
                    <div className="muted">Бакалавриат, МИСИС (2021–2025)</div>
                  </div>
                  <div className="about-item">
                    <strong>ДПО «Медиаарт»</strong>
                    <div className="muted">ВК «Простор», artTECH, GG (2024)</div>
                  </div>
                  <div className="about-item">
                    <strong>Школа 21</strong>
                    <div className="muted">СБЕР (2023–н.в.)</div>
                  </div>
                </div>
              </section>

              <section className="about-section">
                <h2 className="section-title">Hard skills</h2>
                <div className="about-skill-groups">
                  <div>
                    <div className="muted" style={{ marginBottom: 8 }}>Инструменты</div>
                    <div className="tags">
                      <span className="tag">TouchDesigner</span>
                      <span className="tag">Blender</span>
                      <span className="tag">Unreal Engine</span>
                      <span className="tag">Ableton</span>
                      <span className="tag">Adobe CC</span>
                      <span className="tag">Figma</span>
                    </div>
                  </div>

                  <div>
                    <div className="muted" style={{ margin: '16px 0 8px' }}>Программирование</div>
                    <div className="tags">
                      <span className="tag">Python</span>
                      <span className="tag">C/C++</span>
                      <span className="tag">JavaScript</span>
                      <span className="tag">Git</span>
                    </div>
                  </div>

                  <div>
                    <div className="muted" style={{ margin: '16px 0 8px' }}>Hardware / прототипирование</div>
                    <div className="tags">
                      <span className="tag">Arduino</span>
                      <span className="tag">ESP32</span>
                      <span className="tag">DMX</span>
                      <span className="tag">OSC</span>
                      <span className="tag">3D‑печать</span>
                    </div>
                  </div>
                </div>
              </section>

              <section className="about-section">
                <h2 className="section-title">Выставки</h2>
                <div className="about-list">
                  <div className="about-item">
                    <strong>Generative Gallery, Москва — «Где я? / Система координат»</strong>
                    <div className="muted">2 инсталляции</div>
                  </div>
                  <div className="about-item">
                    <strong>Septemas, Москва — «ТИРАЖ»</strong>
                    <div className="muted">видеоарт</div>
                  </div>
                  <div className="about-item">
                    <strong>Музей «Гараж», Москва — «Открытое хранение. Пролог»</strong>
                    <div className="muted">тактильная модель</div>
                  </div>
                  <div className="about-item">
                    <strong>Новая Третьяковка, Москва — «Человек и нейросеть: кто кого создает?»</strong>
                    <div className="muted">тактильная модель</div>
                  </div>
                  <div className="about-item">
                    <strong>Septemas, Москва — «Защитные пространства: Защита/Уязвимость»</strong>
                    <div className="muted">инсталляция</div>
                  </div>
                  <div className="about-item">
                    <strong>КЦСИ, Москва — «Сигнальные огни»</strong>
                    <div className="muted">инсталляция и перформанс</div>
                  </div>
                  <div className="about-item">
                    <strong>СберУниверситет, Москва — Neiro-Most</strong>
                    <div className="muted">генеративная инсталляция Миши Моста, совместно с Generative Gallery</div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}


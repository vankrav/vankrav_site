import Header from '../components/Header';
import Image from 'next/image';
import Chip from '../components/ui/Chip';
import { profileData } from '../lib/profile';

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
                src={profileData.avatar}
                alt={profileData.name}
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
                  {profileData.education.map((item, index) => (
                    <div key={index} className="about-item">
                      <strong>{item.title}</strong>
                      <div className="muted">{item.description}</div>
                    </div>
                  ))}
                </div>
              </section>

              <section className="about-section">
                <h2 className="section-title">Hard skills</h2>
                <div className="about-skill-groups">
                  <div>
                    <div className="muted" style={{ marginBottom: 8 }}>Инструменты</div>
                    <div className="tags">
                      {profileData.skills.tools.map((skill, index) => (
                        <Chip key={index}>{skill}</Chip>
                      ))}
                    </div>
                  </div>

                  <div>
                    <div className="muted" style={{ margin: '16px 0 8px' }}>Программирование</div>
                    <div className="tags">
                      {profileData.skills.programming.map((skill, index) => (
                        <Chip key={index}>{skill}</Chip>
                      ))}
                    </div>
                  </div>

                  <div>
                    <div className="muted" style={{ margin: '16px 0 8px' }}>Hardware / прототипирование</div>
                    <div className="tags">
                      {profileData.skills.hardware.map((skill, index) => (
                        <Chip key={index}>{skill}</Chip>
                      ))}
                    </div>
                  </div>
                </div>
              </section>

              <section className="about-section">
                <h2 className="section-title">Выставки</h2>
                <div className="about-list">
                  {profileData.exhibitions.map((exhibition, index) => (
                    <div key={index} className="about-item">
                      <strong>{exhibition.title}</strong>
                      <div className="muted">{exhibition.type}</div>
                      <div className="muted">{exhibition.year}</div>
                    </div>
                  ))}
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}


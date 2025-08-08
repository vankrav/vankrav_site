import Header from '../components/Header';

export const metadata = { title: 'Контакты — vankrav' };

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="container section">
        <h1>Контакты</h1>
        <form action="/api/contact" method="post" style={{ marginTop: 12, maxWidth: 720 }}>
          <div className="row two">
            <div>
              <label htmlFor="name">Имя</label>
              <input id="name" name="name" required />
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input id="email" name="email" type="email" required />
            </div>
          </div>
          <div className="row" style={{ marginTop: 12 }}>
            <div>
              <label htmlFor="message">Сообщение</label>
              <textarea id="message" name="message" rows={6} required />
            </div>
          </div>
          <div style={{ marginTop: 12 }}>
            <button className="btn primary" type="submit">Отправить</button>
          </div>
        </form>

        <section className="section" style={{ paddingTop: 24 }}>
          <h2 className="section-title">Также</h2>
          <ul>
            <li><a href="mailto:art@vankrav.ru">art@vankrav.ru</a></li>
            <li><a href="https://github.com/vankrav" target="_blank" rel="noreferrer">GitHub</a></li>
          </ul>
        </section>
      </main>
    </>
  );
}


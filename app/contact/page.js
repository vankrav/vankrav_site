import Header from '../components/Header';
import Button from '../components/ui/Button';

export const metadata = { title: 'Контакты — vankrav' };

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="section">
        <div className="container">
          <section className="contact-hero">
            <h1>Связаться со мной</h1>
            <p className="muted">Опишите задачу и сроки — предложу варианты и оценку в ближайшее время.</p>
          </section>

          <section className="contact-grid">
            <a href="https://t.me/vankrav" target="_blank" rel="noreferrer" className="contact-card">
              <span className="contact-card__icon">
                <img src="/icons/tg.svg" width="20" height="20" alt="Telegram" />
              </span>
              <span className="contact-card__text">
                <span className="contact-card__title">Telegram</span>
                <span className="contact-card__subtitle">@vankrav</span>
              </span>
            </a>

            <a href="mailto:art@vankrav.ru" className="contact-card">
              <span className="contact-card__icon">
                <img src="/icons/mail.svg" width="20" height="20" alt="Email" />
              </span>
              <span className="contact-card__text">
                <span className="contact-card__title">Email</span>
                <span className="contact-card__subtitle">art@vankrav.ru</span>
              </span>
            </a>

            <a href="tel:+79854920271" className="contact-card">
              <span className="contact-card__icon">
                <img src="/icons/phone.svg" width="20" height="20" alt="Телефон" />
              </span>
              <span className="contact-card__text">
                <span className="contact-card__title">Телефон</span>
                <span className="contact-card__subtitle">+7 985 492‑02‑71</span>
              </span>
            </a>

            <a href="https://instagram.com/vankrav" target="_blank" rel="noreferrer" className="contact-card">
              <span className="contact-card__icon">
                <img src="/icons/instagram.svg" width="20" height="20" alt="Instagram" />
              </span>
              <span className="contact-card__text">
                <span className="contact-card__title">Instagram</span>
                <span className="contact-card__subtitle">@vankrav</span>
              </span>
            </a>
          </section>

          <section className="contact-form">
            <h2 className="section-title">Написать сообщение</h2>
            <form action="/api/contact" method="post">
              <div className="row two">
                <div>
                  <label htmlFor="name">Имя</label>
                  <input id="name" name="name" required placeholder="Как к вам обращаться" />
                </div>
                <div>
                  <label htmlFor="email">Email</label>
                  <input id="email" name="email" type="email" required placeholder="name@email.com" />
                </div>
              </div>
              <div className="row" style={{ marginTop: 12 }}>
                <div>
                  <label htmlFor="message">Сообщение</label>
                  <textarea id="message" name="message" rows={6} required placeholder="Коротко о задаче, ссылке на рефы, сроках и бюджете (если есть)" />
                </div>
              </div>
              <div className="contact-actions">
                <Button variant="primary" as="button" type="submit">Отправить</Button>
                <a href="mailto:art@vankrav.ru" className="contact-text-link">или написать на email</a>
              </div>
            </form>
          </section>
        </div>
      </main>
    </>
  );
}


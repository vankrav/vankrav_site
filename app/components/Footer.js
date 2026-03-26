export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-left">© {new Date().getFullYear()} vankrav</div>
        <div className="footer-right contact-list">
         
          <div className="contact-item">
            <a
              href="https://t.me/vankrav"
              target="_blank"
              rel="noreferrer"
              className="contact-link"
              aria-label="Telegram @vankrav"
              title="@vankrav"
            >
              <img src="/icons/tg.svg" width="20" height="20" alt="Telegram" />
            </a>
            <a href="https://t.me/vankrav" target="_blank" rel="noreferrer" className="contact-text-link">@vankrav</a>
          </div>
          
          <div className="contact-item">
            <a
              href="tel:+79854920271"
              className="contact-link"
              aria-label="Позвонить 89854920271"
              title="89854920271"
            >
              <img src="/icons/phone.svg" width="20" height="20" alt="Телефон" />
            </a>
            <a href="tel:+79854920271" className="contact-text-link">89854920271</a>
          </div>
          <div className="contact-item">
            <a
              href="https://instagram.com/vankrav"
              target="_blank"
              rel="noreferrer"
              className="contact-link"
              aria-label="Instagram @vankrav"
              title="@vankrav"
            >
              <img src="/icons/instagram.svg" width="20" height="20" alt="Instagram" />
            </a>
            <a href="https://instagram.com/vankrav" target="_blank" rel="noreferrer" className="contact-text-link">@vankrav</a>
          </div>
          <div className="contact-item">
            <a href="mailto:art@vankrav.ru" className="contact-link" aria-label="Написать на email" title="art@vankrav.ru">
              <img src="/icons/mail.svg" width="20" height="20" alt="Email" />
            </a>
            <a href="mailto:art@vankrav.ru" className="contact-text-link">art@vankrav.ru</a>
          </div>
        </div>
      </div>
    </footer>
  );
}



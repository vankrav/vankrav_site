import Link from 'next/link';
import Button from './ui/Button';

export default function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <h1>Кравчук Иван — creative coder / media artist</h1>
        <p>
          Работал с «Radugadesign», «Generative Gallery», «Новой Третьяковкой» и Музеем «Гараж».
          Открыт к нетиповым проектам на стыке искусства, дизайна и технологий.
        </p>
        <div className="hero-cta">
          <Button href="/work" variant="primary">Смотреть работы</Button>
          <Button href="/contact">Связаться</Button>
        </div>
      </div>
    </section>
  );
}


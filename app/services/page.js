import Header from '../components/Header';
import Link from 'next/link';
import Button from '../components/ui/Button';

export const metadata = { title: 'Services — Ivan Kravchuk' };

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main className="container section">
        <h1>Services</h1>
        <div className="list" style={{ marginTop: 12 }}>
          <div className="list-item"><span>Interactive Installations</span><span>→</span></div>
          <div className="list-item"><span>Generative Visuals</span><span>→</span></div>
          <div className="list-item"><span>Design Systems</span><span>→</span></div>
          <div className="list-item"><span>Creative Prototyping</span><span>→</span></div>
        </div>
        <div style={{ marginTop: 16 }}>
          <Button href="/contact" variant="primary">Связаться</Button>
        </div>
      </main>
    </>
  );
}


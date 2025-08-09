import Header from '../components/Header';

export const metadata = { title: 'Резюме — vankrav' };

export default function ResumePage() {
  const cvUrl = '/pdf/cv_creative_coder.pdf';
  const portfolioUrl = '/pdf/portfolio.pdf';
  return (
    <>
      <Header />
      <main className="container section">
        <div className="resume-content">
          <h1>Резюме</h1>
          <div className="hero-cta">
            <a className="btn primary" href={cvUrl} target="_blank" rel="noopener noreferrer">
              Скачать CV (PDF)
            </a>
            <a className="btn primary" href={portfolioUrl} target="_blank" rel="noopener noreferrer">
              Портфолио (PDF)
            </a>
          </div>
        </div>
      </main>
    </>
  );
}


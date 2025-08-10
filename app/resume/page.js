import Header from '../components/Header';
import Button from '../components/ui/Button';
import Image from 'next/image';

export const metadata = { title: 'Резюме — vankrav' };

export default function ResumePage() {
  const cvUrl = '/pdf/cv_creative_coder.pdf';
  const portfolioUrl = '/pdf/portfolio.pdf';
  return (
    <>
      <Header />
      <main className="section">
        <div className="container about">
          
            

            <div className="about-content">
            <h1>Резюме</h1>
              <section className=" resume-content">
                
                <div style={{ marginTop: 0, display: 'flex', gap: 14 }}>
                  <Button href={cvUrl} variant="primary" target="_blank" rel="noopener noreferrer">
                    Скачать CV (PDF)
                  </Button>
                  <Button href={portfolioUrl} variant="primary" target="_blank" rel="noopener noreferrer">
                    Скачать Портфолио (PDF)
                  </Button>
                </div>
              </section>
            </div>
          
        </div>
      </main>
    </>
  );
}


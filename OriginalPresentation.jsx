import "./OriginalPresentation.css";
const PDF_URL = `${import.meta.env.BASE_URL}spotify-policy.pdf`;
export default function OriginalPresentation() {
  return (
    <main className="original-policy-page">
      <header className="original-policy-header">
        <div className="original-policy-brand"><span className="original-policy-logo">≋</span><span>Spotify</span></div>
        <h1>Privacy Policy</h1>
      </header>
      <div className="original-policy-pdf-container">
        <iframe className="original-policy-pdf" title="Spotify Privacy Policy original document" src={`${PDF_URL}#toolbar=0&navpanes=0`} />
      </div>
    </main>
  );
}

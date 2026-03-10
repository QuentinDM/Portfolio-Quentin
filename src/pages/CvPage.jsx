import "../styles/cvPage.css";
import NavIcon from "../components/iconComponents/navIcon";

function CvPage() {
  const cvPath = "/CV_Quentin_Della_Mattia_Administrateur_Systeme.pdf";

  return (
    <section className="cv-page">
      <NavIcon />
      <h2 className="cv-title">CV</h2>

      <div className="cv-viewer-wrap">
        <iframe
          title="CV Quentin Della Mattia"
          src={cvPath}
          className="cv-viewer"
        />
      </div>

      <a className="cv-download" href={cvPath} target="_blank" rel="noopener noreferrer">
        Ouvrir / Telecharger le CV
      </a>
    </section>
  );
}

export default CvPage;

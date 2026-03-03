import './Home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faHandSpock } from '@fortawesome/free-solid-svg-icons';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">
      <Link to="/navbar">
      <FontAwesomeIcon icon={faBars} className="home-icon navbar-icon" />
      </Link>
      <p className="home-greeting">Bonjour <span className="icon"><FontAwesomeIcon icon={faHandSpock} className="home-icon" /></span> je suis <b>Quentin Della Mattia</b></p>
      <div className="home-title">
        <h1> Développeur Web Full Stack</h1>
        <p className="home-title-learning">Administrateur systèmes & réseaux <br /> / en apprentisage</p>
      </div>
      <p className="home-location">Toulouse <span className="home-icon"><FontAwesomeIcon icon={faLocationDot} color="#FACC15"/></span> France</p>
      <div className="home-contact">
        <FontAwesomeIcon icon={faGithub} className="home-contact-icon" />
        <FontAwesomeIcon icon={faLinkedin} className="home-contact-icon" />
        <FontAwesomeIcon icon={faEnvelope} className="home-contact-icon" />
      </div>
      <p>Découvrir mon parcours</p>
      <button className="home-button">Ici</button>
    </div>
  );
}   

export default Home;
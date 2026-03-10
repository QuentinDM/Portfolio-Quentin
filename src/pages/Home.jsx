import '../styles/home.css';
import NavIcon from '../components/iconComponents/navIcon';
import GithubIcon from '../components/iconComponents/GithubIcon';
import MailIcon from '../components/iconComponents/MailIcon';
import LinkedInIcon from '../components/iconComponents/LinkedInIcon';
import WhatsappIcon from '../components/iconComponents/WhatsappIcon';
import LocationIcon from '../components/iconComponents/LocationIcon';
import HandIcon from '../components/iconComponents/HandIcon';
import { Link } from 'react-router-dom';

function Home() {
  //Render
  return (
    <div className="home">
      <NavIcon />
      <p className="home-greeting">Bonjour <HandIcon /> je suis <b>Quentin Della Mattia</b></p>
      <div className="home-title">
        <h1> Développeur Web Full Stack</h1>
        <p className="home-title-learning">Administrateur systèmes & réseaux <br /> / en apprentisage</p>
      </div>
      <p className="home-location">Toulouse <LocationIcon /> France</p>
      <div className="home-contact">
        <GithubIcon />
        <LinkedInIcon />
        <MailIcon />
        <WhatsappIcon
          phone="33651919190"
          message="Bonjour Quentin, je viens de ton portfolio."
        />
      </div>
      <p className="p-discover">Découvrir mon CV</p>
      <Link to="/cv">
        <button className="home-button">Ici</button>
      </Link>
    </div>
  );
}   

export default Home;
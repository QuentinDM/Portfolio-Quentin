import '../styles/home.css';
import NavIcon from '../components/iconComponents/navIcon';
import GithubIcon from '../components/iconComponents/GithubIcon';
import MailIcon from '../components/iconComponents/MailIcon';
import LinkedInIcon from '../components/iconComponents/LinkedInIcon';
import LocationIcon from '../components/iconComponents/LocationIcon';
import HandIcon from '../components/iconComponents/HandIcon';

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
      </div>
      <p>Découvrir mon parcours</p>
      <button className="home-button">Ici</button>
    </div>
  );
}   

export default Home;
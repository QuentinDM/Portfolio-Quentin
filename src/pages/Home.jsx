import '../styles/home.css';
import NavIcon from '../components/inconComponents/navIcon';
import GithubIcon from '../components/inconComponents/GithubIcon';
import MailIcon from '../components/inconComponents/MailIcon';
import LinkedInIcon from '../components/inconComponents/LinkedInIcon';
import LocationIcon from '../components/inconComponents/LocationIcon';
import HandIcon from '../components/inconComponents/HandIcon';

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
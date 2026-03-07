import NavIcon from "../components/inconComponents/navIcon";
import '../styles/RoutePage.css';
import { Link } from "react-router-dom";

function RoutePage() {
    return (
        <div className="route-home">
            <NavIcon />
            <ul>
                <Link to="/">
                    <li className="navbar-item">Accueil</li>
                </Link>
                <Link to="/projects">
                    <li className="navbar-item">Projets</li>
                </Link>
                <Link to="/skills">
                    <li className="navbar-item">Compétences</li>
                </Link>
                <Link to="/contact">
                    <li className="navbar-item">Contact</li>
                </Link>
            </ul>
        </div>
    );
}

export default RoutePage;
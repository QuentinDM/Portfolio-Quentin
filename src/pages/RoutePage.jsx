import NavIcon from "../components/iconComponents/navIcon";
import '../styles/RoutePage.css';
import { Link } from "react-router-dom";

function RoutePage() {
    return (
        <div className="route-home">
            <NavIcon />
            <ul>
                <Link to="/">
                    <button className="button" data-text="Accueil">
                        <span className="actual-text">&nbsp;Accueil&nbsp;</span>
                        <span aria-hidden="true" className="hover-text">&nbsp;Accueil&nbsp;</span>
                    </button>
                </Link>
                <Link to="/projects">
                    <button className="button" data-text="Projets">
                        <span className="actual-text">&nbsp;Projets&nbsp;</span>
                        <span aria-hidden="true" className="hover-text">&nbsp;Projets&nbsp;</span>
                    </button>
                </Link>
                <Link to="/skills">
                    <button className="button" data-text="Compétences">
                        <span className="actual-text">&nbsp;Compétences&nbsp;</span>
                        <span aria-hidden="true" className="hover-text">&nbsp;Compétences&nbsp;</span>
                    </button>
                </Link>
                <Link to="/contact">
                    <button className="button" data-text="Contact">
                        <span className="actual-text">&nbsp;Contact&nbsp;</span>
                        <span aria-hidden="true" className="hover-text">&nbsp;Contact&nbsp;</span>
                    </button>
                </Link>
            </ul>
        </div>
    );
}

export default RoutePage;
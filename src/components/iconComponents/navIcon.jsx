import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Link, useLocation } from "react-router-dom";

const NavIcon = () => {
    //State
    const location = useLocation();
    const destination = location.pathname === "/navbar" ? "/" : "/navbar";

    //Render
    return (
        <Link to={destination}>
            <FontAwesomeIcon icon={faBars} className="home-icon navbar-icon" />
        </Link>
    );
};

export default NavIcon;
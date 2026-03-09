import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

const NavIcon = () => {
    //State
    const location = useLocation();
    const navigate = useNavigate();
    const destination = location.pathname === "/navbar" ? "/" : "/navbar";
    const isNavbarPage = location.pathname === "/navbar";
    const [className, setClassName] = useState(isNavbarPage ? "change" : "");

    const handleNavClick = (event) => {
        event.preventDefault();

        if (isNavbarPage) {
            setClassName("return");
        } else {
            setClassName("change");
        }

        setTimeout(() => {
            navigate(destination);
        }, 220);
    };

    //Render
    return (
        <Link
            to={destination}
            className="navbar-icon"
            onClick={handleNavClick}
        >
            <div className={`menu-container ${className}`} aria-label="Navigation menu">
                <div className="bar1"></div>
                <div className="bar2"></div>
                <div className="bar3"></div>
            </div>
        </Link>
    );
};

export default NavIcon;
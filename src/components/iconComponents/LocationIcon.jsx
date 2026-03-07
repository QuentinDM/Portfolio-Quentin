import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';

const LocationIcon = () => {
    //Render
    return (
        <span>
            <FontAwesomeIcon icon={faLocationDot} className="home-icon" />
        </span>
    );
};

export default LocationIcon;
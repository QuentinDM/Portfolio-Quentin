import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandSpock } from '@fortawesome/free-solid-svg-icons';

const HandIcon = () => {
    //Render
    return (
        <span>
            <FontAwesomeIcon icon={faHandSpock} className="home-icon" />
        </span>
    );
};

export default HandIcon;
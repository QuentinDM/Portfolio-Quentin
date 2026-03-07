import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

const LinkedInIcon = () => {
    // external URL
    const destination = "https://www.linkedin.com/in/quentin-della-mattia-3b772b246/";

    //Render
    return (
        <a href={destination} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} className="home-contact-icon" />
        </a>
    );
};

export default LinkedInIcon;
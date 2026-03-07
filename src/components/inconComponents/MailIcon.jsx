import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const MailIcon = () => {
    //State
    const destination = "quentin.della.mattia@gmail.com";

    //Render
    return (
        <a href={`mailto:${destination}`}
            aria-label="Envoyer un email">
            <FontAwesomeIcon icon={faEnvelope} className="home-contact-icon" />
        </a>
    );
};

export default MailIcon;
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSass } from "@fortawesome/free-brands-svg-icons";

function SassIcon() {
    //Render
    return (
        <span className="icon"> 
            <FontAwesomeIcon icon={faSass} />
        </span>
    );
}   

export default SassIcon;
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faJs } from "@fortawesome/free-brands-svg-icons";

function JavaScriptIcon() {
    //Render
    return (
        <span className="icon js-icon"> 
            <FontAwesomeIcon icon={faJs} />
        </span>
    );
}   

export default JavaScriptIcon;
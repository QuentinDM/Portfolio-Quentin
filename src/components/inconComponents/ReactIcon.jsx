import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact } from "@fortawesome/free-brands-svg-icons";

function ReactIcon() {
    //Render
    return (
        <span className="icon"> 
            <FontAwesomeIcon icon={faReact} />
        </span>
    );
}   

export default ReactIcon;
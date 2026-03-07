import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCss3Alt } from "@fortawesome/free-brands-svg-icons";

function CssIcon() {
    //Render
    return (
        <span className="icon css-icon"> 
            <FontAwesomeIcon icon={faCss3Alt} />
        </span>
    );
}   

export default CssIcon;
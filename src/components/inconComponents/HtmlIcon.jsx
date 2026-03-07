import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHtml5 } from "@fortawesome/free-brands-svg-icons";

function HtmlIcon() {
    //Render
    return (
        <span className="icon"> 
            <FontAwesomeIcon icon={faHtml5} />
        </span>
    );
}   

export default HtmlIcon;
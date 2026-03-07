import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faNode } from "@fortawesome/free-brands-svg-icons";

function NodeIcon() {
    //Render
    return (
        <span className="icon node-icon"> 
            <FontAwesomeIcon icon={faNode} />
        </span>
    );
}   

export default NodeIcon;
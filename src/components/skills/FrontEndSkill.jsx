import HtmlIcon from '../inconComponents/HtmlIcon';
import CssIcon from '../inconComponents/CssIcon';
import JavaScriptIcon from '../inconComponents/JavaScriptIcon';
import ReactIcon from '../inconComponents/ReactIcon';

function FrontEndSkill() {
  return (
    <div className="skills-card">
      <h3 className="skills-card-title">Front-end</h3>
      <p className="skills-card-desc">
        Le front-end concerne la partie visible d'une application web. Il permet de créer des interfaces interactives, modernes et performantes.
      </p>
      <div className="skills-card-icons">
        <div className="skills-card-icon-item"><HtmlIcon /><span>HTML</span></div>
        <div className="skills-card-icon-item"><CssIcon /><span>CSS</span></div>
        <div className="skills-card-icon-item"><JavaScriptIcon /><span>JavaScript</span></div>
        <div className="skills-card-icon-item"><ReactIcon /><span>React</span></div>
      </div>
      <button className="skills-card-project-btn">Voir un projet</button>
    </div>
  );
}

export default FrontEndSkill;
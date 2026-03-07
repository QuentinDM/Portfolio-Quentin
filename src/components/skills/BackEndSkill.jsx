import NodeIcon from '../iconComponents/NodeIcon';

function BackEndSkill() {
  return (
    <div className="skills-card">
      <h3 className="skills-card-title">Back-end</h3>
      <p className="skills-card-desc">
        Le back-end gère la logique serveur, les bases de données et l'API. Il assure la sécurité, la performance et la gestion des données.
      </p>
      <div className="skills-card-icons">
        <div className="skills-card-icon-item"><NodeIcon /><span>Node.js</span></div>
        <div className="skills-card-icon-item"><span className="icon">🚀</span><span>Express</span></div>
        <div className="skills-card-icon-item"><span className="icon">🍃</span><span>MongoDB</span></div>
        <div className="skills-card-icon-item"><span className="icon">🗄️</span><span>SQL</span></div>
      </div>
      <button className="skills-card-project-btn">Voir un projet</button>
    </div>
  );
}

export default BackEndSkill;
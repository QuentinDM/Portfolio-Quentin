import GithubIcon from '../iconComponents/GithubIcon';

function WorkflowSkill() {
  return (
    <div className="skills-card">
      <h3 className="skills-card-title">Workflow</h3>
      <p className="skills-card-desc">
        Le workflow englobe les méthodologies de développement, la gestion de version et l'intégration continue pour une livraison efficace.
      </p>
      <div className="skills-card-icons">
        <div className="skills-card-icon-item"><GithubIcon as="span" className="github-icon" /><span>Git</span></div>
        <div className="skills-card-icon-item"><span className="icon">📋</span><span>Agile</span></div>
        <div className="skills-card-icon-item"><span className="icon">🔄</span><span>CI/CD</span></div>
        <div className="skills-card-icon-item"><span className="icon">📊</span><span>Scrum</span></div>
      </div>
      <button className="skills-card-project-btn">Voir un projet</button>
    </div>
  );
}

export default WorkflowSkill;
function AdminSkill() {
  return (
    <div className="skills-card">
      <h3 className="skills-card-title">Administrateur</h3>
      <p className="skills-card-desc">
        L'administration système assure la gestion des serveurs, la sécurité et l'optimisation des infrastructures informatiques.
      </p>
      <div className="skills-card-icons">
        <div className="skills-card-icon-item"><span className="icon">🐧</span><span>Linux</span></div>
        <div className="skills-card-icon-item"><span className="icon">🐳</span><span>Docker</span></div>
        <div className="skills-card-icon-item"><span className="icon">☁️</span><span>AWS</span></div>
        <div className="skills-card-icon-item"><span className="icon">🔧</span><span>DevOps</span></div>
      </div>
    </div>
  );
}

export default AdminSkill;
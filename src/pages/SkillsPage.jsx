import { useState } from 'react';
import '../styles/skillsPage.css';
import NavIcon from '../components/inconComponents/navIcon';
import FrontEndSkill from '../components/skills/FrontEndSkill';
import BackEndSkill from '../components/skills/BackEndSkill';
import AdminSkill from '../components/skills/AdminSkill';
import WorkflowSkill from '../components/skills/WorkflowSkill';

function SkillsPage() {
  const [selectedCategory, setSelectedCategory] = useState('Front-end');

  const renderSkillComponent = () => {
    switch (selectedCategory) {
      case 'Front-end':
        return <FrontEndSkill />;
      case 'Back-end':
        return <BackEndSkill />;
      case 'Administrateur':
        return <AdminSkill />;
      case 'Workflow':
        return <WorkflowSkill />;
      default:
        return <FrontEndSkill />;
    }
  };

  return (
    <div className="skills-page">
      <NavIcon />
      <h2 className="skills-title">Compétences</h2>
      <div className="skills-categories">
        <button
          className={`skills-category-btn ${selectedCategory === 'Front-end' ? 'active' : ''}`}
          onClick={() => setSelectedCategory('Front-end')}
        >
          Front-end
        </button>
        <button
          className={`skills-category-btn ${selectedCategory === 'Back-end' ? 'active' : ''}`}
          onClick={() => setSelectedCategory('Back-end')}
        >
          Back-end
        </button>
        <button
          className={`skills-category-btn ${selectedCategory === 'Administrateur' ? 'active' : ''}`}
          onClick={() => setSelectedCategory('Administrateur')}
        >
          Administrateur
        </button>
        <button
          className={`skills-category-btn ${selectedCategory === 'Workflow' ? 'active' : ''}`}
          onClick={() => setSelectedCategory('Workflow')}
        >
          Workflow
        </button>
      </div>
      {renderSkillComponent()}
    </div>
  );
}

export default SkillsPage;
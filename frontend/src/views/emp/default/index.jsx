
import { useState } from "react";
import './index.css';
import Footer from './footer';

const Dashboard = () => {
  const [selectedProjects, setSelectedProjects] = useState([]);
  const [selectedType, setSelectedType] = useState(''); // 'top-performers' or 'top-losers'

  const projectList = {
    'top-performers': ['Project A', 'Project B', 'Project C'],
    'top-losers': ['Project X', 'Project Y', 'Project Z']
  };

  const handleButtonClick = (type) => {
    setSelectedType(type);
    setSelectedProjects([]); // Reset selected projects when button changes
  };

  const handleProjectClick = (project) => {
    const newSelection = selectedProjects.includes(project)
      ? selectedProjects.filter(p => p !== project)
      : [...selectedProjects, project];

    if (newSelection.length <= 3) {
      setSelectedProjects(newSelection);
    }
  };

  return (
    <div className="body-container">
      <div className="left-box">
        <h3>Project Description</h3>
        {selectedProjects.length === 0 ? (
          <p>Select a project to view description</p>
        ) : (
          <p>{selectedProjects.length === 1 
              ? `Description of ${selectedProjects[0]}` 
              : `Comparing performance of ${selectedProjects.join(', ')}`}
          </p>
        )}
      </div>
      
      <div className="middle-box">
        <h3>Project Performance</h3>
        <div className="graph-container">
          {selectedProjects.length === 0 ? (
            <p>No project selected</p>
          ) : selectedProjects.length === 1 ? (
            <p>Line graph for {selectedProjects[0]}</p>
          ) : (
            <p>Comparison graph for {selectedProjects.join(', ')}</p>
          )}
        </div>
      </div>

      <div className="right-box">
        <div className="button-container">
          <button onClick={() => handleButtonClick('top-performers')}>Top Performer</button>
          <button onClick={() => handleButtonClick('top-losers')}>Top Loser</button>
        </div>
        {selectedType && (
          <ul className="project-list">
            {projectList[selectedType].map(project => (
              <li 
                key={project} 
                onClick={() => handleProjectClick(project)} 
                className={selectedProjects.includes(project) ? 'selected' : ''}
              >
                {project}
              </li>
            ))}
          </ul>
        )}
      </div>
     <section>
     <Footer/>
     </section>
    </div>
  );
};

export default Dashboard;

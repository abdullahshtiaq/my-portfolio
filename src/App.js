import React, { useState } from 'react';
import Introduction from './components/Introduction';
import Projects from './components/Projects';
import './App.css';

const App = () => {
  const [currentProject, setCurrentProject] = useState(null);

  const handleProjectClick = (projectId) => {
    setCurrentProject(projectId);
  };

  const handleBackClick = () => {
    setCurrentProject(null);
  };

  return (
    <div id="app">
      <video id="background-video" autoPlay loop muted>
        <source src={`${process.env.PUBLIC_URL}/background.mp4`} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div id="content">
        {currentProject === null ? (
          <Introduction onProjectClick={handleProjectClick} />
        ) : (
          <Projects projectId={currentProject} onBackClick={handleBackClick} />
        )}
      </div>
    </div>
  );
};

export default App;

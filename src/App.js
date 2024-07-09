import React, { useState, useEffect } from 'react';
import Introduction from './components/Introduction';
import Projects from './components/Projects';
import './App.css';

const App = () => {
  const [currentSection, setCurrentSection] = useState('intro');

  const handleScrollToProject = (projectId) => {
    const element = document.getElementById(projectId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setCurrentSection('projects');
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const projectsSection = document.getElementById('projects');
      if (projectsSection) {
        const rect = projectsSection.getBoundingClientRect();
        if (rect.top <= window.innerHeight / 2) {
          setCurrentSection('projects');
        } else {
          setCurrentSection('intro');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div id="app">
      <video id="background-video" autoPlay loop muted>
        <source src={`${process.env.PUBLIC_URL}/background.mp4`} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {currentSection === 'intro' && <div className="background-intro"></div>}
      {currentSection === 'projects' && <div className="background-projects"></div>}
      <div id="content">
        <Introduction onProjectClick={handleScrollToProject} />
        <Projects />
      </div>
    </div>
  );
};

export default App;

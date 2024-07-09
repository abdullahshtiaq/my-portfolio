import React from 'react';
import ProjectItem from './ProjectItem';
import './Projects.css';

const Projects = () => {
  const projectData = [
    {
      id: 'project1',  // Add an ID for scrolling
      title: 'Self-checkout Station',
      description: 'An efficient self-checkout system that provides a thorough experience of using a self-checkout station. Key concepts used in the production were object-oriented programming and development, JUnit Testing, GUI configuration using Swing, working with Git, and using a hardware simulation API',
      imageUrl: '/path/to/image1.png',
    },
    {
      id: 'project2',  // Add an ID for scrolling
      title: 'Project 2',
      description: 'Description for project 2.',
      imageUrl: '/path/to/image2.png',
    },
    {
      id: 'project3',  // Add an ID for scrolling
      title: 'Project 3',
      description: 'Description for project 3.',
      imageUrl: '/path/to/image3.png',
    },
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="projects-content">
        <h1 className="projects-title">My Projects</h1>
        <div className="project-list">
          {projectData.map((project) => (
            <ProjectItem
              key={project.id}
              id={project.id}
              title={project.title}
              description={project.description}
              imageUrl={project.imageUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

import React from 'react';
import './ProjectItem.css';

const ProjectItem = ({ id, title, description, imageUrl }) => {
  return (
    <div id={id} className="project-item">
      <div className="project-description">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      <div className="project-image">
        <img src={imageUrl} alt={title} />
      </div>
    </div>
  );
};

export default ProjectItem;

import React from 'react';
import './ProjectItem.css';

const ProjectItem = ({ id, title, description, imageUrl, link }) => {
  return (
    <div id={id} className={`project-item ${id}`}>
      <div className="project-description">
        <h2>{title}</h2>
        <p>{description}</p>
        <a href={link} target="_blank" rel="noopener noreferrer">
          <button>
            <span>Github Repository</span>
          </button>
        </a>
      </div>
      <div className="project-image">
        <img src={imageUrl} alt={title} />
      </div>
    </div>
  );
};

export default ProjectItem;

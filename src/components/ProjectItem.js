import React from 'react';
import './ProjectItem.css';

const ProjectItem = ({ id, title, description, images, link }) => {
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
      <div className="project-images">
        {images.map((image, index) => (
          <div key={index} className={`project-image ${id}-image-${index}`}>
            <img src={image} alt={`${title} screenshot ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectItem;

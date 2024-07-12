import React from 'react';
import './ProjectItem.css';

const ProjectItem = ({ id, title, description, images, link, viewAllLink}) => {
  return (
    <div id={id} className={`project-item ${id}`}>
      <div className="project-description">
        <h2>{title}</h2>
        <p>{description}</p>
        <a href={link} target="_blank" rel="noopener noreferrer">
          <button className="github-button">
            <span>Github Repository</span>
          </button>
        </a>
      </div>
      <div className="project-images-container">
        <div className="project-images">
          {images.map((image, index) => (
            <div key={index} className={`project-image ${id}-image-${index}`}>
              <img src={image} alt={`${title} screenshot ${index + 1}`} />
            </div>
          ))}
        </div>
        <div className="view-all-button-container">
        {id !== 'project3' && (
            <a href={viewAllLink} target="_blank" rel="noopener noreferrer">
              <button className="view-all-button" a>
                <span className="button-content">View all</span>
            </button>
            </a>
        )}  
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;

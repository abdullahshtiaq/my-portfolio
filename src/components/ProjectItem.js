import React from 'react';
import './ProjectItem.css';

import image1 from './image1.jpg';
import image2 from './image2.png';
import image3 from './image3.jpg';

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

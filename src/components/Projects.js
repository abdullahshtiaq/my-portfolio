import React from 'react';
import ProjectItem from './ProjectItem';
import './Projects.css';

import image1 from './image1.jpg';
import image2 from './image2.png';
import image3 from './image3.jpg';


const Projects = ({ projectId, onBackClick }) => {
  const projectData = {
    project1: {
      id: 'project1',
      title: 'Self-checkout Station',
      description: 'This project entails the development of an efficient self-checkout system designed to simulate a thorough user experience similar to using a self-checkout station in a retail environment. The system is coded using Java, and it leverages object-oriented programming (OOP) for modular and scalable design, and JUnit testing to ensure reliability and correctness. A user-friendly graphical user interface (GUI) was crafted using Swing, while Git was utilized for effective version control and collaboration. Additionally, a hardware simulation API was integrated to mimic real-world hardware interactions like barcode scanning and payment processing, providing a realistic and seamless user experience.',
      imageUrl: image1,
      link: 'https://github.com/abdullahshtiaq/Calgary-Kiosk'
    },
    project2: {
      id: 'project2',
      title: 'Wedding RSVP',
      description: 'This project is an RSVP website developed using HTML, CSS, JavaScript, and MongoDB. The website features a responsive and visually appealing interface created with HTML and CSS, ensuring a smooth user experience across various devices but optimized for mobile. JavaScript is used to handle dynamic interactions and form validations, providing real-time feedback to users. MongoDB serves as the backend database, storing and managing RSVP data efficiently, allowing users to easily submit and manage their event responses.',
      imageUrl: image2,
      link: 'https://github.com/abdullahshtiaq/Walima'
    },
    project3: {
      id: 'project3',
      title: 'Self-checkout Station',
      description: 'This project entails the development of an efficient self-checkout system designed to simulate a thorough user experience similar to using a self-checkout station in a retail environment. The system is coded using Java, and it leverages object-oriented programming (OOP) for modular and scalable design, and JUnit testing to ensure reliability and correctness. A user-friendly graphical user interface (GUI) was crafted using Swing, while Git was utilized for effective version control and collaboration. Additionally, a hardware simulation API was integrated to mimic real-world hardware interactions like barcode scanning and payment processing, providing a realistic and seamless user experience.',
      imageUrl: image3,
      link: 'https://github.com/abdullahshtiaq/Self-checkout-station'
    },
  };

  const project = projectData[projectId];

  return (
    <section id={project.id} className="projects-section">
      <div className="projects-content">
        <ProjectItem
          id={project.id}
          title={project.title}
          description={project.description}
          imageUrl={project.imageUrl}
          link={project.link}
        />
      </div>
    </section>
  );
};

export default Projects;

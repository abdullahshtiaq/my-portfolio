import React from 'react';
import ProjectItem from './ProjectItem';
import './Projects.css';

import image1 from './image1.jpg';
import image2 from './image2.png';
import image3 from './image3.jpg';
import image4 from './image4.jpg';
import image5 from './image5.jpg';
import image6 from './image6.jpg';
import image7 from './image7.jpg';
import image8 from './image8.png';
import image9 from './image9.png';
import image10 from './image10.png';
import image11 from './image11.png';
import image12 from './image12.png';
import image13 from './image13.png';
import image14 from './image14.png';
import image15 from './image15.png';
import image16 from './image16.png';
import image17 from './image17.png';
import image18 from './image18.png';
import image19 from './image19.png';
const Projects = ({ projectId, onBackClick }) => {
  const projectData = {
    project1: {
      id: 'project1',
      title: 'Information Kiosk',
      description: 'This project involves creating a public information kiosk interface deployed as a web application, using React for dynamic and responsive user interfaces, CSS for styling, and integrating the Google Maps API for location-based services. Task-Centered System Design (TCSD) was employed to ensure the functionalities and design are aligned with real-world user tasks. Extensive user research, including surveys and interviews, informed the design, making it diverse and user-centric. The web application offers a seamless and efficient user experience, accessible across various devices, and tailored to the actual needs of users, ensuring clarity, ease of use, and responsiveness.',
      images: [
        image2,
        image19,
        image13,
      ],
      link: 'https://github.com/abdullahshtiaq/Calgary-Kiosk'
    },
    project2: {
      id: 'project2',
      title: 'Wedding RSVP',
      description: 'This project is an RSVP website developed using HTML, CSS, JavaScript, and MongoDB. The website features a responsive and visually appealing interface created with HTML and CSS, ensuring a smooth user experience across various devices but optimized for mobile. JavaScript is used to handle dynamic interactions and form validations, providing real-time feedback to users. MongoDB serves as the backend database, storing and managing RSVP data efficiently, allowing users to easily submit and manage their event responses.',
      images: [
        image2,
      ],
      link: 'https://github.com/abdullahshtiaq/Walima'
    },
    project3: {
      id: 'project3',
      title: 'Self-checkout Station',
      description: 'This project entails the development of an efficient self-checkout system designed to simulate a thorough user experience similar to using a self-checkout station in a retail environment. The system is coded using Java, and it leverages object-oriented programming (OOP) for modular and scalable design, and JUnit testing to ensure reliability and correctness. A user-friendly graphical user interface (GUI) was crafted using Swing, while Git was utilized for effective version control and collaboration. Additionally, a hardware simulation API was integrated to mimic real-world hardware interactions like barcode scanning and payment processing, providing a realistic and seamless user experience.',
      images: [
        image3,
      ],
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
          images={project.images}
          link={project.link}
        />
      </div>
    </section>
  );
};

export default Projects;

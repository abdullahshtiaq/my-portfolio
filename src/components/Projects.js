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
      ],
      link: 'https://github.com/abdullahshtiaq/Calgary-Kiosk',
      viewAllLink: `${process.env.PUBLIC_URL}/kiosk pics.pdf`,
    },
    project2: {
      id: 'project2',
      title: 'Wedding RSVP',
      description: 'This project is an RSVP website developed using HTML, CSS, JavaScript, and MongoDB. The website features a responsive and visually appealing interface created with HTML and CSS, ensuring a smooth user experience across various devices but optimized for mobile. JavaScript is used to handle dynamic interactions and form validations, providing real-time feedback to users. MongoDB serves as the backend database, storing and managing RSVP data efficiently, allowing users to easily submit and manage their event responses.',
      images: [
        image3,
        image4,
      ],
      link: 'https://github.com/abdullahshtiaq/Walima',
      viewAllLink: `${process.env.PUBLIC_URL}/rsvp pics.pdf`,
    },
    project3: {
      id: 'project3',
      title: 'Self-checkout Station',
      description: 'This project entails the development of an efficient self-checkout system designed to simulate a thorough user experience similar to using a self-checkout station in a retail environment. The system is coded using Java, and it leverages object-oriented programming (OOP) for modular and scalable design, and JUnit testing to ensure reliability and correctness. A user-friendly graphical user interface (GUI) was crafted using Swing, while Git was utilized for effective version control and collaboration. Additionally, a hardware simulation API was integrated to mimic real-world hardware interactions like barcode scanning and payment processing, providing a realistic and seamless user experience.',
      images: [
        image1,
      ],
      link: 'https://github.com/abdullahshtiaq/Self-checkout-station'
    },
  };

  const project = projectData[projectId];

  return (
    <section id={project.id} className="projects-section">
      <button className="back-button" onClick={onBackClick}>
        <svg className="svgIcon" viewBox="0 0 384 512">
          <path
            d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"
          ></path>
        </svg>
      </button>
      <div className="projects-content">
        <ProjectItem
          id={project.id}
          title={project.title}
          description={project.description}
          images={project.images}
          link={project.link}
          viewAllLink={project.viewAllLink} 
        />
      </div>
    </section>
  );
};

export default Projects;

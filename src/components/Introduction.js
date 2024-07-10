import React from 'react';

const Introduction = ({ onProjectClick }) => {
  return (
    <section id="introduction" className="intro-section">
      <div className="intro-content">
        <h1 className="intro-title">Hello, I'm Abdullah Ishtiaq</h1>
        <div className="buttons">
          <a
            href="https://example.com/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button>
              <span>Resume</span>
            </button>
          </a>
          <div className="dropdown">
            <button>
              <span>Projects</span>
            </button>
            <div className="dropdown-content">
              <ul>
                <li>
                  <button
                    onClick={() => onProjectClick('project1')}
                    className="dropdown-item"
                  >
                    Calgary Kiosk
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => onProjectClick('project2')}
                    className="dropdown-item"
                  >
                    RSVP Website
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => onProjectClick('project3')}
                    className="dropdown-item"
                  >
                    Self-checkout Station
                  </button>
                </li>
              </ul>
            </div>
          </div>
          <a
            href="https://www.linkedin.com/in/your-linkedin-profile"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="linkedin-btn">
              <span>LinkedIn</span>
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Introduction;

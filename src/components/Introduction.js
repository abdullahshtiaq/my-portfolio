import React from 'react';

const Introduction = () => {
  const handleScrollToProject = (projectId) => {
    const element = document.getElementById(projectId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="introduction" className="intro-section">
      <div className="intro-content">
        <h1 className="intro-title">Hi, I'm Abdullah Ishtiaq</h1>
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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-5 h-5 ml-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            <div className="dropdown-content">
              <ul>
                <li>
                  <button
                    onClick={() => handleScrollToProject('project1')}
                    className="dropdown-item"
                  >
                    Project 1
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleScrollToProject('project2')}
                    className="dropdown-item"
                  >
                    Project 2
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleScrollToProject('project3')}
                    className="dropdown-item"
                  >
                    Project 3
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
            <button>
              <span>LinkedIn</span>
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Introduction;

import { useState } from 'react';
import fastRobotsImg from './img/lab4ex.jpg';
import imageSrc from './img/newpomodoroappimage.png';
import imageSrc2 from './img/workoutapp-image.jpg';

const projects = [
  {
    id: 1,
    title: 'Fast Robots',
    subtitle: 'Embedded Robotics / Controls Project',
    image: fastRobotsImg,
    imageClass: 'project-image fastrobots-image',
    shortDetails: ['C++', 'Arduino', 'Sensors', 'PID Control'],
    description: (
      <>
        <p>
          Fast Robots was a robotics course project focused on programming and
          testing an autonomous RC car using embedded systems, sensors, and
          control algorithms.
        </p>
        <p>
          Over the course of the project, I worked with components including
          time of flight distance sensors, an IMU, BLE communication, and motor
          control on the SparkFun Artemis Nano platform.
        </p>
        <p>
          I implemented features such as data collection, sensor integration,
          PID based motion control, and state estimation techniques including a
          Kalman filter to improve the car’s performance and responsiveness.
        </p>
        <p>
          I documented the labs, design process, code, and results in a course
          website that highlights both the hardware and software side of the
          project.
        </p>

        <div className="project-modal-links">
          <a
            href="https://mcmahonjosh.github.io/Fast-Robots-Website/"
            target="_blank"
            rel="noopener noreferrer"
            className="project-modal-link"
          >
            View project website
          </a>
        </div>
      </>
    ),
  },
  {
    id: 2,
    title: 'Pomodoro Study App',
    subtitle: 'Productivity / Study Tool',
    image: imageSrc,
    imageClass: 'project-image pomodoro-image',
    shortDetails: ['Swift', 'Firebase', 'Gamification'],
    description: (
      <>
        <p>
          Study app that allows the user to create and organize tasks on
          different days.
        </p>
        <p>
          It also allows users to time their tasks and set break times to
          promote studying efficiency.
        </p>
        <p>
          The app tracks user data on study time and gives users points to buy
          different virtual Koi fish for studying.
        </p>
        <p>
          Users can also view their own analytics.
        </p>
      </>
    ),
  },
  {
    id: 3,
    title: 'Full-Stack Workout App',
    subtitle: 'Full Stack Web App',
    image: imageSrc2,
    imageClass: 'project-image workoutapp-image',
    shortDetails: ['Python', 'Django', 'CRUD'],
    description: (
      <>
        <p>
          App that enables users to create and store personalized workouts,
          aiding them in structuring their exercise routines.
        </p>
        <p>
          Users can edit and delete workouts and also add descriptions for each
          workout.
        </p>
        <p>
          The app uses Python for the back end, HTML for the front end, and
          Django as the web framework.
        </p>
      </>
    ),
  },
];

const ProjectPage = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => {
    setSelectedProject(project);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <div className="projectPage section-block">
      <h1 className="slideheaders">Projects</h1>

      <div className="cards-grid project-card-grid">
        {projects.map((project) => (
          <div
            key={project.id}
            className="content-card project-card modal-preview-card"
            onClick={() => openModal(project)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                openModal(project);
              }
            }}
          >
            <div className="project-image-wrap">
              <img
                src={project.image}
                alt={project.title}
                className={project.imageClass}
              />
            </div>

            <div className="project-card-content">
              <div className="project-subtitle">{project.subtitle}</div>

              <div className="slidebody card-text preview-text">
                <p className="project-title">{project.title}</p>

                <div className="project-tags">
                  {project.shortDetails.map((detail, index) => (
                    <span key={index} className="project-tag">
                      {detail}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedProject && (
        <div className="project-modal-overlay" onClick={closeModal}>
          <div
            className="project-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <button className="project-modal-close" onClick={closeModal}>
              ×
            </button>

            <img
              src={selectedProject.image}
              alt={selectedProject.title}
              className={`project-modal-image ${selectedProject.imageClass}`}
            />

            <div className="project-modal-body">
              <h2 className="project-modal-title">{selectedProject.title}</h2>
              <p className="project-modal-subtitle">
                {selectedProject.subtitle}
              </p>

              <div className="slidebody card-text project-modal-description">
                {selectedProject.description}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectPage;
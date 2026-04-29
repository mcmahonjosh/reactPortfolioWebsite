import { useState } from 'react';
import imageSrc from './img/arcadia-high-app-image.jpg';
import imageSrc2 from './img/wardrobepic.png';
import imageSrc3 from './img/newappstoredownloadimage.png';
import imageSrc4 from './img/newgoogleplaydownloadimage.png';
import reuse_img from './img/reuselogo.png';
import zest_ai_img from './img/zestaiimage1.jpg';

const experiences = [
  {
    id: 1,
    title: 'Zest AI',
    role: 'Software Engineering Intern',
    period: 'Summer Internship',
    image: zest_ai_img,
    imageClass: 'experience-image ewbapp-image1',
    shortDetails: [
      'TypeScript',
      'ReactJS',
      'Vitest',
      'Playwright',
      'Argo',
    ],
    description: (
      <>
        <p>
          I worked as a Software Engineering Intern at Zest AI, where I
          contributed to a B2B SaaS portal that enabled clients to configure
          underwriting models.
        </p>
        <p>
          Working primarily with TypeScript and ReactJS, I implemented a
          history diff tool to compare client configurations and model versions,
          improving transparency and debugging efficiency.
        </p>
        <p>
          I also wrote scripts to parse and validate model data across
          production, sandbox, and development environments, identifying over
          1,000 discrepancies across models and reducing deployment errors.
        </p>
        <p>
          In addition, I contributed to unit testing with Vitest and end to end
          testing with Playwright, deployed updates through CI/CD pipelines
          using Jenkins and Argo, and worked with internal APIs to retrieve and
          display client data.
        </p>
      </>
    ),
  },
  {
    id: 2,
    title: 'Finger Lakes ReUse',
    role: 'Software Development Team Lead',
    period: 'Engineers Without Borders Cornell',
    image: reuse_img,
    imageClass: 'experience-image ewbapp-image1',
    shortDetails: [
      'React Native',
      'Expo',
      'PostgreSQL',
      'Team Leadership',
    ],
    description: (
      <>
        <p>
          I lead development of a digital donation platform for Finger Lakes
          ReUse, a non profit focused on reducing local waste and promoting
          community engagement.
        </p>
        <p>
          Built with React Native using Expo for the frontend and PostgreSQL for
          the backend, the platform includes an online catalogue, donation
          portal and registration, reward system, user engagement tools, and
          discounts.
        </p>
        <p>
          The app helps streamline donation processing, optimize in store space
          usage, and reduce staff workload.
        </p>
        <p>
          I coordinate the team, onboard new members, and lead implementation of
          backend functionality.
        </p>
      </>
    ),
  },
  {
    id: 3,
    title: 'Cornell Wardrobe',
    role: 'Back End Developer',
    period: 'Cornell Project Team',
    image: imageSrc2,
    imageClass: 'experience-image ewbapp-image1',
    shortDetails: [
      'Firestore',
      'Swift',
      'monday.com',
      'make.com APIs',
    ],
    description: (
      <>
        <p>
          I am a back end developer for Cornell Wardrobe, an app that allows
          students to rent out professional clothing.
        </p>
        <p>
          I have worked to set up and integrate the back end into the Swift
          app. Google Cloud Firestore is used to store the back end data.
        </p>
        <p>
          We also use monday.com to store information, and communicate data
          between monday.com and Firestore through make.com APIs.
        </p>
      </>
    ),
  },
  {
    id: 4,
    title: 'Arcadia High Mobile',
    role: 'iOS Developer',
    period: 'High School App Team',
    image: imageSrc,
    imageClass: 'experience-image arcadiaapp-image',
    shortDetails: [
      'iOS Development',
      'Student Team',
      'App Store',
      'Google Play',
    ],
    description: (
      <>
        <p>
          In high school I was an iOS developer for Arcadia High Mobile, the
          official app for Arcadia High School.
        </p>
        <p>
          I worked with a team of students across front end development, back
          end development, graphic design, and content editing.
        </p>
        <p>
          The app is fully student made and is available for both iOS and
          Android.
        </p>

        <div className="download-buttons modal-download-buttons">
          <a
            href="https://apps.apple.com/us/app/arcadia-high-mobile/id1305220468"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={imageSrc3}
              alt="Download on App Store"
              className="downloadarcadiaapp-appstore"
            />
          </a>
          <a
            href="https://play.google.com/store/apps/details?id=com.hsappdev.ahs"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={imageSrc4}
              alt="Download on Google Play"
              className="downloadarcadiaapp-goolgeplay"
            />
          </a>
        </div>
      </>
    ),
  },
];

const ExperiencePage = () => {
  const [selectedExperience, setSelectedExperience] = useState(null);

  const openModal = (experience) => {
    setSelectedExperience(experience);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedExperience(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <div className="experiencePage section-block">
      <h1 className="slideheaders">Experience</h1>

      <div className="cards-grid modal-card-grid">
        {experiences.map((experience) => (
          <div
            key={experience.id}
            className="content-card experience-card modal-preview-card"
            onClick={() => openModal(experience)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                openModal(experience);
              }
            }}
          >
            <div className="experience-image-wrap">
              <img
                src={experience.image}
                alt={experience.title}
                className={experience.imageClass}
              />
            </div>

            <div className="experience-card-content">
              <div className="experience-placeholder">{experience.title}</div>

              <div className="slidebody card-text preview-text">
                <p className="experience-role">{experience.role}</p>
                <p className="experience-period">{experience.period}</p>

                <div className="experience-tags">
                  {experience.shortDetails.map((detail, index) => (
                    <span key={index} className="experience-tag">
                      {detail}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedExperience && (
        <div className="experience-modal-overlay" onClick={closeModal}>
          <div
            className="experience-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <button className="experience-modal-close" onClick={closeModal}>
              ×
            </button>

            <img
              src={selectedExperience.image}
              alt={selectedExperience.title}
              className={`experience-modal-image ${selectedExperience.imageClass}`}
            />

            <div className="experience-modal-body">
              <h2 className="experience-modal-title">
                {selectedExperience.title}
              </h2>
              <p className="experience-modal-role">
                {selectedExperience.role}
              </p>
              <p className="experience-modal-period">
                {selectedExperience.period}
              </p>

              <div className="slidebody card-text experience-modal-description">
                {selectedExperience.description}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ExperiencePage;
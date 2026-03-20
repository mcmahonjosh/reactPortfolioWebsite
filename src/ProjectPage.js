import imageSrc from './img/newpomodoroappimage.png';
import imageSrc2 from './img/workoutapp-image.jpg';

const ProjectPage = () => {
  return (
    <div className="projectPage section-block">
      <h1 className="slideheaders">Projects</h1>

      <div className="cards-grid">
        <div className="content-card project-card">
          <img src={imageSrc} alt="Pomodoro Study App" className="project-image pomodoro-image" />
          <div className="slidebody card-text">
            <p>
              <u>Pomodoro Study App:</u> Study app that allows the user to create and organize tasks on different days.
              Also allows user to time their tasks and set break times to promote studying efficiency. App tracks user data
              on study time and gives users points to buy different virtual Koi fish for studying. Users can also view their
              own analytics.
            </p>
          </div>
        </div>

        <div className="content-card project-card">
          <img src={imageSrc2} alt="Full-Stack Workout App" className="project-image workoutapp-image" />
          <div className="slidebody card-text">
            <p>
              <u>Full-Stack Workout App:</u> App that enables users to create and store personalized workouts, aiding them
              in structuring their exercise routines. Allows users to edit and delete workouts and add descriptions. Uses
              Python for the back-end, HTML for the front-end, and Django as the web framework.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
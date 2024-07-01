import imageSrc from './img/newpomodoroappimage.png'; // Import your image
import imageSrc2 from './img/workoutapp-image.jpg'; // Import your image
//var counter = 0;

const ProjectPage = () => {
    

    return ( 
        <div className="projectPage">
            
            <h1 className="slideheaders">Projects</h1>
            <div className="pagecontainer">
                
                <img src={imageSrc} alt="Joshua McMahon" className="pomodoro-image" /> {/* Use imported image */}
                
                <body className="slidebody">
                <u>Pomodoro Study App:</u> Study app that allows the user to create and organize tasks on different days. Also allows user to time their tasks
 and set break times to promote studying efficiency. App tracks user data on study time and gives users points to
 buy different virtual Koi fish for studying (users can view their Koi pond with all their fish swim around in it).
 User can also view their own Analytics
                </body>
                <img src={imageSrc2} alt="Joshua McMahon" className="workoutapp-image"/> {/* Use imported image */}
                <body className="slidebody">
                    <u>Full-Stack Workout App:</u> App that enables users to create and store personalized workouts, aiding them in structuring their exercise
 routines. Allows users to edit and delete workouts and add descriptions for them if needed. Uses Python for the
 back-end, HTML for the front-end, and Django as the web framework. Also has user-authentication where users
 can sign in and out on the application. Data is stored on a SQLite3 document, the default database for Django
                </body>
            </div>
           
        </div>
    );
}
 
export default ProjectPage;
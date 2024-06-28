import imageSrc from './img/pomodoro-study-app-image.jpg'; // Import your image
//var counter = 0;

const ProjectPage = () => {
    

    return ( 
        <div className="projectPage">
            
            <h1 className="slideheaders">Projects</h1>
            <div className="pagecontainer">
                <img src={imageSrc} alt="Joshua McMahon" className="pomodoro-image"/> {/* Use imported image */}
                <body className="slidebody">
                    Pomodoro Study App: Study app that allows the user to create and organize tasks on different days. Also allows user to time their tasks
 and set break times to promote studying efficiency. App tracks user data on study time and gives users points to
 buy different virtual Koi fish for studying (users can view their Koi pond with all their fish swim around in it).
 User can also view their own Analytics
                </body>
            </div>
           
        </div>
    );
}
 
export default ProjectPage;
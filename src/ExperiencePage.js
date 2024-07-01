import imageSrc from './img/arcadia-high-app-image.jpg'; // Import your image
import imageSrc2 from './img/ewbappimage1.png';
import imageSrc3 from './img/newappstoredownloadimage.png';
import imageSrc4 from './img/newgoogleplaydownloadimage.png';
//var counter = 0;

const ExperiencePage = () => {
    

    return ( 
        <div className="experiencePage">
            
            <h1 className="slideheaders">Experience</h1>
            <div className="pagecontainer">
                <img src={imageSrc} alt="Joshua McMahon" className="arcadiaapp-image"/> {/* Use imported image */}
                    <body className="slidebody">
                    <u>Arcadia High Mobile:</u> In high school I was an iOS developer for Arcadia High Mobile which is the official
                    app for Arcadia High School. I worked with a team of student with various roles including front-end and back-end development,
                    as well as graphic designers and content editors. The app is fully student made and is avaliable for iOS and android.
                    </body>
                    <img src={imageSrc2} alt="Joshua McMahon" className="ewbapp-image1"/> {/* Use imported image */}
                    <body className="slidebody">
                        <u>Cornell Wardrobe:</u> App that enables users to create and store personalized workouts, aiding them in structuring their exercise
    routines. Allows users to edit and delete workouts and add descriptions for them if needed. Uses Python for the
    back-end, HTML for the front-end, and Django as the web framework. Also has user-authentication where users
    can sign in and out on the application. Data is stored on a SQLite3 document, the default database for Django. *Currently in Development
                    </body>
                    <div class="image-crop-dowload-app">
                        <a href="https://apps.apple.com/us/app/arcadia-high-mobile/id1305220468" target="_blank" rel="noopener noreferrer">
                        <img src={imageSrc3} alt="Arcadia App Download" className="downloadarcadiaapp-appstore"/> {/* Use imported image */}
                        </a>
                    </div>
                    <div class="image-crop-dowload-app">
                        <a href="https://play.google.com/store/apps/details?id=com.hsappdev.ahs" target="_blank" rel="noopener noreferrer">
                        <img src={imageSrc4} alt="Arcadia App Download" className="downloadarcadiaapp-goolgeplay"/> {/* Use imported image */}
                        </a>
                    </div>
                </div>
           
        </div>
    );
}
 
export default ExperiencePage;
import imageSrc from './img/arcadia-high-app-image.jpg';
import imageSrc2 from './img/newewbappimage1.png';
import imageSrc3 from './img/newappstoredownloadimage.png';
import imageSrc4 from './img/newgoogleplaydownloadimage.png';

const ExperiencePage = () => {
  return (
    <div className="experiencePage section-block">
      <h1 className="slideheaders">Experience</h1>

      <div className="cards-grid">
        <div className="content-card experience-card">
          <img src={imageSrc} alt="Arcadia High Mobile" className="experience-image arcadiaapp-image" />
          <div className="slidebody card-text">
            <p>
              <u>Arcadia High Mobile:</u> In high school I was an iOS developer for Arcadia High Mobile which is the official
              app for Arcadia High School. I worked with a team of students with various roles including front-end and back-end
              development, as well as graphic designers and content editors. The app is fully student made and is available for
              iOS and Android.
            </p>
          </div>

          <div className="download-buttons">
            <a href="https://apps.apple.com/us/app/arcadia-high-mobile/id1305220468" target="_blank" rel="noopener noreferrer">
              <img src={imageSrc3} alt="Download on App Store" className="downloadarcadiaapp-appstore" />
            </a>
            <a href="https://play.google.com/store/apps/details?id=com.hsappdev.ahs" target="_blank" rel="noopener noreferrer">
              <img src={imageSrc4} alt="Download on Google Play" className="downloadarcadiaapp-goolgeplay" />
            </a>
          </div>
        </div>

        <div className="content-card experience-card">
          <img src={imageSrc2} alt="Cornell Wardrobe" className="experience-image ewbapp-image1" />
          <div className="slidebody card-text">
            <p>
              <u>Cornell Wardrobe:</u> Currently I am a back-end developer for Cornell Wardrobe which is an app that allows
              students to rent out professional clothing. I have worked to set up and integrate the back-end into the Swift app.
              Google Cloud Firestore is used to store the back-end data. We also use monday.com to store information, and we
              communicate the information between monday.com and Firestore through make.com APIs.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperiencePage;
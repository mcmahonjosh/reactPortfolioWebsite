import imageSrc from './img/arcadia-high-app-image.jpg';
import imageSrc2 from './img/newewbappimage1.png';
import imageSrc3 from './img/newappstoredownloadimage.png';
import imageSrc4 from './img/newgoogleplaydownloadimage.png';
import reuse_img from './img/reuselogo.png';
import zest_ai_img from './img/zestaiimage1.jpg';

// Add image imports for your new experiences if you have them
// import imageSrc5 from './img/zest-ai-image.png';
// import imageSrc6 from './img/reuse-image.png';

const ExperiencePage = () => {
  return (
    <div className="experiencePage section-block">
      <h1 className="slideheaders">Experience</h1>

      <div className="cards-grid">

        <div className="content-card experience-card">
            <img
            src={zest_ai_img}
            alt="Cornell Wardrobe"
            className="experience-image ewbapp-image1"
          />
          <div className="experience-placeholder">Zest AI</div>
          <div className="slidebody card-text">
            <p>
            <u>Zest AI Internship:</u> I worked as a Software Engineering Intern at Zest AI, where I
            contributed to a B2B SaaS portal that enabled clients to configure underwriting
            models. Working primarily with TypeScript and ReactJS, I implemented a history
            diff tool to compare client configurations and model versions, improving
            transparency and debugging efficiency. I also wrote scripts to parse and validate
            model data across production, sandbox, and development environments, identifying
            over 1,000 discrepancies across models and reducing deployment errors. In
            addition, I contributed to unit testing with Vitest and end-to-end testing with
            Playwright to improve the reliability of new features. I deployed updates
            through CI/CD pipelines using Jenkins and Argo and worked with internal APIs to
            retrieve and display client data, helping streamline workflows and enhance
            usability for clients.
            </p>
          </div>
        </div>

         <div className="content-card experience-card">
          <img
            src={reuse_img}
            alt="Cornell Wardrobe"
            className="experience-image ewbapp-image1"
          />
          <div className="experience-placeholder">ReUse</div>
          <div className="slidebody card-text">
            <p>
                <u>Software Development Team Lead, Engineers Without Borders Cornell Project Team:</u>{' '}
                I lead development of a digital donation platform for
                Finger Lakes ReUse, a non-profit focused on reducing local waste and
                promoting community engagement. Built with React Native using Expo for the
                frontend and GraphQL for the backend, the platform includes an online
                catalogue, donation portal and registration, reward system, user engagement
                tools, and discounts. The app helps streamline donation processing, optimize
                in-store space usage, and reduce staff workload. I coordinate the team, onboard new members, and 
                lead in implementing backend functionality.
            </p>
          </div>
        </div>
        

        <div className="content-card experience-card">
          <img
            src={imageSrc2}
            alt="Cornell Wardrobe"
            className="experience-image ewbapp-image1"
          />
          <div className="slidebody card-text">
            <p>
              <u>Cornell Wardrobe:</u> Currently I am a back-end developer for
              Cornell Wardrobe which is an app that allows students to rent out
              professional clothing. I have worked to set up and integrate the
              back-end into the Swift app. Google Cloud Firestore is used to
              store the back-end data. We also use monday.com to store
              information, and we communicate the information between monday.com
              and Firestore through make.com APIs.
            </p>
          </div>
        </div>

       


        <div className="content-card experience-card">
          <img
            src={imageSrc}
            alt="Arcadia High Mobile"
            className="experience-image arcadiaapp-image"
          />
          <div className="slidebody card-text">
            <p>
              <u>Arcadia High Mobile:</u> In high school I was an iOS developer
              for Arcadia High Mobile which is the official app for Arcadia High
              School. I worked with a team of students with various roles
              including front-end and back-end development, as well as graphic
              designers and content editors. The app is fully student made and
              is available for iOS and Android.
            </p>
          </div>

          <div className="download-buttons">
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
        </div>
        
      </div>
    </div>
  );
};

export default ExperiencePage;
import React from "react";
import ContactComponent from "./ContactComponent";
import imageSrc from './img/github-logo-image.png'; // Import your image
import imageSrc2 from './img/gmail-logo-image.png';
import imageSrc3 from './img/new-linkedin-image.png';


const ContactPage = () => {
    return ( 
        <div className="contactpage">
          <h1 className="slideheaders">Contact Me</h1>
          <ContactComponent />
          <a href="https://github.com/mcmahonjosh" target="_blank" rel="noopener noreferrer">
                <img src={imageSrc} alt="GitHub Profile" className="github-image"/> {/* Use imported image */}
          </a>
          <a href="mailto:jhm359@cornell.edu" target="_blank" rel="noopener noreferrer">
                <img src={imageSrc2} alt="Gmail" className="gmail-image"/> {/* Use imported image */}
          </a>
          <a href="https://www.linkedin.com/in/joshuahmcmahon/" target="_blank" rel="noopener noreferrer">
                <img src={imageSrc3} alt="Linkedin Profile" className="linkedin-image"/> {/* Use imported image */}
          </a>
          <p className="websitesignature">Programmed by Joshua McMahon              © Copyright 2024</p>
        </div>
    );
    
}

export default ContactPage;

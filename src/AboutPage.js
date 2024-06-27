import { useState, useEffect} from 'react';
import BlogList from './BlogList';
import useFetch from './useFetch';
import imageSrc from './img/1705489908612.jpg'; // Import your image

//var counter = 0;

const AboutPage = () => {
    
 
    

    return ( 
        <div className="aboutPage">
            
            <h1 className="slideheaders">About</h1>
            <div className="aboutpagecontainer">
                <img src={imageSrc} alt="Joshua McMahon" className="profileimage"/> {/* Use imported image */}
                <body className="slidebody">
                    Hello, My name is Joshua McMahon. I am a computer science undergrad from Los Angeles, California studying Computer Science
                    at Cornell University.
                    Hello, My name is Joshua McMahon. I am a computer science undergrad from Los Angeles, California studying Computer Science
                    at Cornell University.
                    Hello, My name is Joshua McMahon. I am a computer science undergrad from Los Angeles, California studying Computer Science
                    at Cornell University.
                    Hello, My name is Joshua McMahon. I am a computer science undergrad from Los Angeles, California studying Computer Science
                    at Cornell University.
                    
                </body>
            </div>
           
        </div>
    );
}
 
export default AboutPage;
import { useState, useEffect} from 'react';
import BlogList from './BlogList';
import useFetch from './useFetch';
import imageSrc from './img/1705489908612.jpg'; // Import your image
import imageSrc2 from './img/selfphotoflowers.jpg'; // Import your image

//var counter = 0;

const AboutPage = () => {
    
 
    

    return ( 
        <div className="aboutPage">
            
            <h1 className="slideheaders">About</h1>
            <div className="pagecontainer">
                <img src={imageSrc2} alt="" className="profileimage"/> {/* Use imported image */}
                <body className="slidebody">
                    Hello, My name is Joshua McMahon! I am from Los Angeles, California and I am currently studying Computer 
                    Science at Cornell University.<br /><br />
                    My technical skills include front-end devoplement languages and frameworks such as HTML and CSS as well as ReactJS. I also
                    have experience in iOS development and have worked on multiple apps with Swift. In addition I have back-end experience
                    with non SQL databases such as Google Cloud Firestore and am currently using Firestore in my role as a back-end developer on
                    the project team Engineers Without Borders at Cornell. Finally, I am fluent in C++, Java, and Python.
                    <br /><br />
                    Apart from academics I am part of the Cornell Taekwondo Sport Club team. Additionally some of 
                    my favorite hobbies are to work out, play basketball, play piano, and learn languages.
                </body>
            </div>
           
        </div>
    );
}
 
export default AboutPage;
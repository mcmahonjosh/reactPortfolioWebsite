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
                    Science at Cornell University. 
                    
                    At school I am a software developer on the engineering project team Engineers Without Borders.

                    In addition to accademics I am part of the Cornell Taekwondo Sport Club team. Additionally some of 
                    my favorite hobbies are to work out, play basketball, play piano, and learn languages.
                </body>
            </div>
           
        </div>
    );
}
 
export default AboutPage;
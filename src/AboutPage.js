import { useState, useEffect} from 'react';
import canvasDots from './animation';

var counter = 0;

const AboutPage = () => {
    
 
 
    useEffect(() => {
        if (counter != 0) {
            canvasDots(); //counter fixed studid glitch caused by calling canvasDots() twice
        }
        counter++;
      }, []); // Ensure it only runs once after initial render
    

    return (
    <div className="canvas">
        <canvas className="connecting-dots"></canvas>
      </div>
    );
}
 
export default AboutPage;
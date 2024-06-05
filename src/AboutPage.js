import { useState, useEffect} from 'react';
import canvasDots from './animation';

var counter = 0;

const AboutPage = () => {
    
 
 
    useEffect(() => {
        if (counter == 1) {
            canvasDots(); //counter fixed studid glitch caused by calling canvasDots() twice
        }
        counter++;
      }, []); // Ensure it only runs once after initial render
    

    return (
    <div class="canvas">
        <canvas class="connecting-dots"></canvas>
      </div>
    );
}
 
export default AboutPage;
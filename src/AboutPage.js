import { useState, useEffect} from 'react';
import canvasDots from './animation';


const AboutPage = () => {

    useEffect(() => {
        canvasDots(); // Call canvasDots function to initialize the animation
      }, []); // Ensure it only runs once after initial render
    

    return (
        <canvas id="canvas"></canvas>
    );
}
 
export default AboutPage;
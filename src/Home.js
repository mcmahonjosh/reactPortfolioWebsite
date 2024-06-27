import { useState, useEffect} from 'react';
import canvasDots from './animation';


const Home = () => {




    useEffect(() => {
        //    if () {
                canvasDots(); //counter fixed studid glitch caused by calling canvasDots() twice
        //    }
          //  counter++;
          }, []); // Ensure it only runs once after initial render
        
    
        return (
        <div className="canvas">
            <canvas className="connecting-dots"></canvas>
          </div>
        );
}
 
export default Home;
import { useEffect } from 'react';
import canvasDots from './animation';

const Home = () => {
  useEffect(() => {
    const isMobile = window.innerWidth <= 768;

    if (!isMobile) {
      canvasDots();
    }
  }, []);

  return (
    <div className="canvas">
      <canvas className="connecting-dots"></canvas>

      <div className="titlecontainer1">
        <h1 className="homepagetitle">Joshua McMahon</h1>
      </div>

      <div className="titlecontainer2">
        <p className="homepagetitle2">Software Engineer</p>
      </div>
    </div>
  );
};

export default Home;
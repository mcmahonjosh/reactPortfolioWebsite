import { useState, useEffect} from 'react';
import BlogList from './BlogList';
import useFetch from './useFetch';
import canvasDots from './animation';


const Home = () => {

    useEffect(() => {
        canvasDots(); // Call canvasDots function to initialize the animation
    }, []); // Ensure it only runs once after initial render
    const { data: blogs, isLoading, error} = useFetch('http://localhost:8000/blogs');
    

    return ( 
        <div className="home">
        <canvas id="canvas"></canvas>
          { error && <div>{ error }</div>}
          { isLoading && <div>Loading...</div>}
          {blogs && <BlogList blogs={ blogs } title = "All Blogs!" />}
          
        </div>
    );
}
 
export default Home;
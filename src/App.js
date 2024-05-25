import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router , Route, Switch } from 'react-router-dom';
import Create from './Create';
import BlogDetails from './BlogDetails';
import AboutPage from './AboutPage';



function App() {


  return (
    <Router>
      <div class = "container">
        <div className="App">
       
        <Navbar />
          <div className="content">
            <Switch>
              <Route exact path="/">
              <div class= "slides slide1">
                <Home /> 
              </div>
              <div class= "slides slide2">
                <AboutPage /> 
              </div>
              </Route>
              <Route path="/create">
                <Create />
              </Route>
              <Route path="/blogs/:id">
                <BlogDetails />
              </Route>
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;

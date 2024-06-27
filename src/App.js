import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router , Route, Switch } from 'react-router-dom';
import Create from './Create';
import BlogDetails from './BlogDetails';
import AboutPage from './AboutPage';
import ProjectPage from './ProjectPage';
import ExperiencePage from './ExperiencePage';
import ContactPage from './ContactPage';

//honestly don't understand why the nabnar is in the about home page but it just is

function App() {

  

  return (
    <Router basename="/reactPortfolioWebsite/">
      <div className = "container">
        <div className="App">
       
       
          <div className="content">
            <Switch>
              <Route exact path="/">
              <div className="firstpage">
                <Navbar /> 
                <div className = "slides slide1">
                <Home className="Home" /> 
                </div>
                <div className = "slides slide2">
                <AboutPage className="AboutPage"/> 
                </div>
                <div className = "slides slide3">
                <ProjectPage className="ProjectPage"/> 
                </div>
                <div className = "slides slide4">
                <ExperiencePage className="ExperiencePage"/> 
                </div>
                <div className = "slides slide5">
                <ContactPage className="ContactPage"/> 
                </div>
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

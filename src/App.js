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

                  <section id = "home"></section>
                  <div className = "slides slide1">
                  <Home className="Home" /> 
                  </div>
                
                
                  <div className = "slides slide2">
                  <section id = "about"> 
                  <AboutPage className="AboutPage"/> 
                  </section>
                  </div>
                
                
                  <div className = "slides slide3">
                  <section id = "projects"> 
                  <ProjectPage className="ProjectPage"/> 
                  </section>
                  </div>
                
                
                  <div className = "slides slide4">
                  <section id = "experience"> 
                  <ExperiencePage className="ExperiencePage"/> 
                  </section>
                  </div>
                
                
                  <div className = "slides slide5">
                  <section id = "contact"> 
                  <ContactPage className="ContactPage"/> 
                  </section>
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

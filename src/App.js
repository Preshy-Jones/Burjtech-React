import NavBar from './Navbar'
import Footer from './Footer'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Services from './Services'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas} from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'

library.add(fab, fas,far, faCheckSquare, faCoffee)




function App() {
  return (
    <Router>
    <div className="App">
      <NavBar/>
      <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/services">
              <Services />
            </Route>
          </Switch>
        </div>

      <Footer/>
    </div>
    </Router>
  );
}

export default App;

import React, {useState} from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import home from "./component/home.js";
import about from "./component/about.js";
import experience from "./component/experience.js";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { CSSTransition } from 'react-transition-group';
import "./app.css";

const App = () => {

  const [show, setShow] = useState(false);
  
  const handleClick = (e) => {
    e.preventDefault();
    console.log('got here');
    setShow(!show);
    console.log(show);
    // let mainNav = document.getElementById('js-links');

    // mainNav.classList.toggle('active')
  }

  return (
    <Router>
      <div className="narbox">
        <nav className="navbar">
          <ul>
            <li className="logo">
              Yifei Li
            </li>
            <CSSTransition
              in={show}
              timeout={300}
              classNames="list-transition"
              unmountOnExit>
              <div className="inside">
                <li className="links" id="js-links">
                  <Link to="/" className="navlinks">Home</Link>
                </li>
                <li className="links">
                  <Link to="/about" className="navlinks">About me</Link>
                </li>
                <li className="links">
                  <Link to="/experience" className="navlinks">Experience</Link>
                </li>
              </div>
            </CSSTransition>
            <li className="collapse" id="js-navbar-toggle" >
              <FontAwesomeIcon icon={faBars} onClick={handleClick}/>
            </li>
          </ul>
        </nav>
      </div>
      <Switch>
        <Route exact path="/" component={home}/>
        <Route exact path="/experience" component={experience}/>
        <Route exact path="/about" component={about}/>
        <Route/>
      </Switch>
    </Router>
  );
}



export default App;

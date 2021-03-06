import React, {useState} from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import home from "./component/home.js";
import about from "./component/about.js";
import education from "./component/education";
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
  }

  return (
    <Router>
      <div className="narbox">
        <nav className="navbarz">
          <ul className="container1">
            <li className="logo">
            <Link style={{textDecoration: "none", color: "white", marginLeft: "2.5%"}}to="/">Hello｜您好</Link>
            </li>
            <ul className="horizontal_menu">
              <li className="linkzz" id="js-links" onClick={handleClick}>
                <Link to="/" className="navlinkz">Home</Link>
              </li>
              <li className="linkzz" onClick={handleClick}>
                <Link to="/education" className="navlinkz">Education</Link>
              </li>
              <li className="linkzz" onClick={handleClick}>
                <Link to="/experience" className="navlinkz">Experience</Link>
              </li>
              <li className="linkzz" id="js-links" onClick={handleClick}>
                <Link to="/about" className="navlinkz">About me</Link>
              </li>
            </ul>
            <ul className="overlayMenu">
            <CSSTransition
              in={show}
              timeout={300}
              classNames="list-transition"
              unmountOnExit>
              <div className="inside">
                  <li className="linkzz" id="js-links" onClick={handleClick}>
                    <Link to="/" className="navlinkz">Home</Link>
                  </li>
                  <li className="linkzz" onClick={handleClick}>
                    <Link to="/education" className="navlinkz">Education</Link>
                  </li>
                  <li className="linkzz" onClick={handleClick}>
                    <Link to="/experience" className="navlinkz">Experience</Link>
                  </li>
                  <li className="linkzz" id="js-links" onClick={handleClick}>
                    <Link to="/about" className="navlinkz">About me</Link>
                  </li>
              </div>
            </CSSTransition>
            </ul>
            <li className="fontawesometoggle" id="js-navbar-toggle" >
              <FontAwesomeIcon icon={faBars} onClick={handleClick} size="2x"/>
            </li>
          </ul>
        </nav>
      </div>
      <Switch>
        <Route exact path="/" component={home}/>
        <Route exact path="/experience" component={experience}/>
        <Route exact path="/about" component={about}/>
        <Route exact path="/education" component={education}/>
        <Route/>
      </Switch>
    </Router>
  );
}



export default App;

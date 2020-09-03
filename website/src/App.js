import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import home from "./component/home.js";
import about from "./component/about.js";
import experience from "./component/experience.js";

const App = () => {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About me</Link>
          </li>
          <li>
            <Link to="/experience">Experience</Link>
          </li>
        </ul>
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

import React from 'react';
import {Route, NavLink, HashRouter, Switch } from 'react-router-dom';
import Home from './Home';
import AboutUs from './AboutUs';
import Contact from './Contact';
import Jobs from './Jobs';

class App extends React.Component {
  render() {
    return (
      <HashRouter>
        <div>
          <div>
            <h1>CXY Corp.</h1>
            <ul className = 'header'>
              <li><NavLink to = "/">Home</NavLink></li>
              <li><NavLink to = "/aboutUs">About Us</NavLink></li>
              <li><NavLink to = "/jobs">Jobs</NavLink></li>
              <li><NavLink to = "/contact">Contact US</NavLink></li>
            </ul>
          </div>
          <div className = 'content'>
            <Switch>
              <Route exact path = '/' component = {Home}></Route>
              <Route exact path = '/aboutUs' component = {AboutUs}></Route>
              <Route exact path = '/contact' component = {Contact}></Route>
              <Route exact path = '/jobs' component = {Jobs}></Route>
            </Switch>
          </div>
        </div>
      </HashRouter>
    )
  }
}
export default App


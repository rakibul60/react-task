import React from "react"
import ReactDOM from "react-dom"
import {
    Route,
    NavLink,
    BrowserRouter as Router,
    Switch,
  } from 'react-router-dom'

import App from "./components/App"
import Contact from "./components/contacts"
import Home from "./components/home"
import "./scss/body.scss"

const routing = (
  <Router>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Employee
      </a>
      <div className="collapse navbar-collapse" id="navbarText">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <NavLink className="nav-link" to="/">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/contacts">
              Contacts
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/employees">
              Employees
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
    <br />
    <Switch>
      <Route path="/" exact component={Home} />
      <Route exact component={Home} path="/home" />
      <Route component={Contact} path="/contacts" />
      <Route component={App} path="/employees" />
    </Switch>

    {/* <Route path="/about/" component={About} />
    <Route path="/users/" component={Users} /> */}
  </Router>
);
ReactDOM.render(routing, document.getElementById("app"))

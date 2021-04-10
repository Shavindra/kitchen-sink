import React from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";

import { PageCounter, PageHome } from './pages';

import './app.scss';

export const App = () => {
  return (
    <Router>
      <div className="page">
        <div className="page-header">
          <header>
            <nav>
              <ul>
                <li>
                  <NavLink to="/">Home</NavLink>
                </li>
                <li>
                  <NavLink to="/counter">Counter</NavLink>
                </li>
              </ul>
            </nav>
          </header>
        </div>
        <div className="page-content">
          <Switch>
            <Route path="/counter">
              <PageCounter />
            </Route>
            <Route path="/">
              <PageHome />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

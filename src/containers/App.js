import React, { Component } from 'react';
import { IndexLink } from 'react-router';

import { NavLink } from '../components';

class App extends Component {
  render() {
    return (
      <div
      >
        <div
          className="nav"
        >
          <ul>
            <li>
              <IndexLink
                to="/"
                activeClassName="active"
              >
                Home
              </IndexLink>
            </li>
            <li>
              <NavLink
                to="/template"
              >
                Template
              </NavLink>
            </li>
          </ul>
        </div>
        <div
          className="app-container"
        >
          { this.props.children }
        </div>
      </div>
    )
  }
}

export default App;
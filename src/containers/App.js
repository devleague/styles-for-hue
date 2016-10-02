import React, { Component } from 'react';
import { IndexLink } from 'react-router';

import { NavLink } from '../components';

class App extends Component {
  render () {
    return (
      <div>
        <div
          className="nav"
        >
          <ul>
            <div
              className="home"
            >
              <li>
                <IndexLink
                  to="/"
                  activeClassName="active"
                >
                  Home
                </IndexLink>
              </li>
            </div>
            <div
              className="template"
            >
              <li>
                <NavLink
                  to="/template"
                >
                  Template
                </NavLink>
              </li>
            </div>
          </ul>
        </div>
        <div>
          { this.props.children }
        </div>
      </div>
    )
  }
}

export default App;
import React, { Component } from 'react';
import { IndexLink } from 'react-router';
import { NavLink } from '../components';

console.log(NavLink);

class App extends Component {
  render () {
    return (
      <div>
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
        <div>
          { this.props.children }
        </div>
      </div>
    )
  }
}

export default App;
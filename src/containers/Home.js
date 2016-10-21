import React, { Component } from 'react';

import { NavLink } from '../components';

class Home extends Component {
  render() {
    return (
      <div>
        <div
          className="home-background"
        >
          <div
            className="home-title"
          >
            <h5>Welcome To</h5>
            <h1>Styles For Hue</h1>
            <NavLink to="/template" className="start-button">
              Start Styling
            </NavLink>
          </div>
        </div>
      </div>
    )
  }
}

export default Home;
import React, { Component } from 'react';

import { NavLink } from '../components';

class NotFound extends Component {
  render() {
    return (
      <div
        className="content-container"
      >
        <div
          className="notfound-image"
        >
          <h1>Whoops!</h1>
        </div>
        <div
          className="row-notfound"
        >
          <div
            className="flex-nowrap-notfound-container"
          >
            <div
              className="notfound-container"
            >
              <h1>404 PAGE NOT FOUND</h1>
              <br/>
              <p>Don't have a template yet?</p>
              <NavLink to="/template" className="notfound-button">
                Start Styling
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default NotFound;
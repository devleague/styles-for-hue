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
        <footer>
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <ul className="list-inline">
                  <li>
                    <a href="#">Home</a>
                  </li>
                  <li className="footer-menu-divider">&sdot;</li>
                  <li>
                    <a href="#">Template</a>
                  </li>
                  <li className="footer-menu-divider">&sdot;</li>
                  <li>
                    <a href="#">About</a>
                  </li>
                </ul>
                <p>Copyright &copy; 2016 Styles For Hue. All Rights Reserved</p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    )
  }
}

export default Home;
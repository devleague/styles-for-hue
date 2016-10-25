import React, { Component } from 'react';
import { Link } from 'react-router';

class Footer extends Component {
  render() {
    return (
      <footer>
          <div className="footer-content">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li className="footer-menu-divider">&sdot;</li>
              <li>
                <Link to="/template">Template</Link>
              </li>
              <li className="footer-menu-divider">&sdot;</li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li className="footer-menu-divider">&sdot;</li>
              <li>
                <Link to="/tutorial">Tutorial</Link>
              </li>
              <li className="footer-menu-divider">&sdot;</li>
              <li>
                <Link to="/resources">Resources</Link>
              </li>
            </ul>
            <p>Copyright &copy; 2016 Styles For Hue. All Rights Reserved</p>
          </div>
        </footer>
    )
  }
}

export default Footer;
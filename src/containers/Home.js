import React, { Component } from 'react';

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
                <p>Copyright &copy; 2016, Styles For Hue. All Rights Reserved</p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    )
  }
}

export default Home;
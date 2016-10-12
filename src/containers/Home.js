import React, { Component } from 'react';

class Home extends Component {
  render() {
    return (
      <div
        className="home-container"
      >
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
        <div
          className="home-footer"
        >
          <p>
            &copy; 2016 Styles For Hue
          </p>
        </div>
      </div>
    )
  }
}

export default Home;
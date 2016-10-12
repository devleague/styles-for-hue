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
            <h1>
              Welcome to Colors
              <br/>
              for Hue!
            </h1>
          </div>
        </div>
        <div
          className="home-footer"
        >
          <h3>
            &copy; Copyright 2016 Hue
          </h3>
        </div>
      </div>
    )
  }
}

export default Home;
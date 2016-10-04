import React, { Component } from 'react';

class Home extends Component {
  render() {
    return (
      <div
        className="home-page"
      >
        <div
          className="home-msg"
        >
          <h1>
            Welcome to Colors 
            <br/>
            for Hue!
          </h1>
        </div>
        <img src="/images/computer.jpg"/>
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
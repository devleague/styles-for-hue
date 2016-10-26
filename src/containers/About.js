import React, { Component } from 'react';
import { Link } from 'react-router';

class About extends Component {
  render() {
    return (
      <div
        className="content-container"
      >
        <div
          className="header-image about-image"
        >
          <h1>About Us</h1>
        </div>
        <div className="row about-us">
          <div className="flex-wrap-container">
            <div className="flex-100">
              <h2>Who We Are</h2>
            </div>
            <div className="flex-50">
              <p>We are <a href="http://www.devleague.com/" target="_blank">DevLeague</a> students from Cohort 11! Before entering DevLeague, our coding skills ranged from minimal to non-existent. Using Javascript, HTML, CSS and various frameworks, we created this wonderful app for hue!</p>
            </div>
            <div className="flex-50">
              <p>Styles for Hue is a application for web developers who need help styling a website.</p>
            </div>
          </div>
        </div>
        <div className="row photos">
          <div className="flex-wrap-container">
            <div className="flex-photos pos-1">
              <div className="profile"/>
              <h3>Nikki Kobayashi</h3>
              <p>Stuff I Did</p>
            </div>
            <div className="flex-photos pos-2">
              <div className="profile"/>
              <h3>Lisa Zhou</h3>
              <p>Stuff I Did</p>
            </div>
            <div className="flex-photos pos-3">
              <div className="profile"/>
              <h3>Bryce Saito</h3>
              <p>Stuff I Did</p>
            </div>
            <div className="flex-photos pos-4">
              <div className="profile"/>
              <h3>Christie Reindle</h3>
              <p>Stuff I Did</p>
            </div>
            <div className="flex-photos pos-5">
              <div className="profile"/>
              <h3>Sheena Galutira</h3>
              <p>Stuff I Did</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default About;
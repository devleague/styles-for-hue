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
              <p>Styles for Hue is a collaboration by five <a href="http://www.devleague.com/" target="_blank" className="content-link">DevLeague</a> students from Cohort 11. It represents the culmination of our six-month endeavor from no-experience programming fledglings to full-fledged full-stack developers. We effectively implemented our skills in JavaScript, HTML, CSS, and various frameworks to create this wonderful app for hue!</p>
            </div>
            <div className="flex-50">
              <p>This application was designed to help web developers efficiently prototype a website.  It grants the user the freedom to change styles on the fly, and empowers them further with the ability to save HTML and CSS files to use on their own server. These features will lessen the already heavy workload of developers, while allowing them the flexibility to cater the code to their specific needs.</p>
            </div>
          </div>
        </div>
        <div className="row photos">
          <div className="flex-wrap-container">
            <div className="flex-photos pos-1">
              <div className="profile"/>
              <h3>
                <a className="link-to-github" href="https://github.com/ynikki" target="_blank">
                  Nikki Kobayashi
                </a>
              </h3>
              <p>Leveled up on Toggles/Modals</p>
            </div>
            <div className="flex-photos pos-2">
              <div className="profile"/>
              <h3>
                <a className="link-to-github" href="https://github.com/herrolisa" target="_blank">
                  Lisa Zhou
                </a>
              </h3>
              <p>Gulped the sprites</p>
            </div>
            <div className="flex-photos pos-3">
              <div className="profile"/>
              <h3>
                <a className="link-to-github" href="https://github.com/tokumori" target="_blank">
                  Bryce Saito
                </a>
              </h3>
              <p>Dispatched actions to set state to "Stressed Out"</p>
            </div>
            <div className="flex-photos pos-4">
              <div className="profile"/>
              <h3>
                <a className="link-to-github" href="https://github.com/creindle" target="_blank">
                  Christie Reindle
                </a>
              </h3>
              <p>Packaged the program for hue to use!</p>
            </div>
            <div className="flex-photos pos-5">
              <div className="profile"/>
              <h3>
                <a className="link-to-github" href="https://github.com/sogalutira" target="_blank">
                  Sheena Galutira
                </a>
              </h3>
              <p>db.HACKED .findOneAndDelete(&#123;&#125;)</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default About;
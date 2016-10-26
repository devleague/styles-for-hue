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
        <div className="row">
          <div className="flex-wrap-container">
            <div className="flex-100">
              <h2>Who We Are</h2>
            </div>
            <div className="flex-50">
              <p>Oat cake dragée cheesecake chocolate cake. Jelly dessert dessert chocolate liquorice caramels sweet ice cream liquorice. Gummi bears tart topping gummies jelly bear claw. Lemon drops tootsie roll topping. Dragée gingerbread jelly beans cake dragée cake caramels. Icing sesame snaps bonbon sweet roll.</p>
            </div>
            <div className="flex-50">
              <p>Marzipan bear claw sweet donut. Jujubes croissant candy wafer cheesecake caramels carrot cake tart. Apple pie chocolate apple pie gummi bears. Candy biscuit cheesecake gummi bears powder. Tootsie roll sugar plum chocolate cake jelly beans chupa chups bear claw apple pie.</p>
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
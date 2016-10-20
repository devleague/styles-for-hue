import React, { Component } from 'react';
import { Link } from 'react-router';

class About extends Component {
  render() {
    return (
      <div
        className="content-container"
      >
        <div
          className="header-image"
        >
          <h1>About Us</h1>
        </div>
        <div className="row">
          <div className="flex-nowrap-container">
            <div className="flex-50 left">
              <h2>Who We Are</h2>
              <p>Oat cake dragée cheesecake chocolate cake. Jelly dessert dessert chocolate liquorice caramels sweet ice cream liquorice. Gummi bears tart topping gummies jelly bear claw. Lemon drops tootsie roll topping. Dragée gingerbread jelly beans cake dragée cake caramels. Icing sesame snaps bonbon sweet roll.</p>
            </div>
            <div className="flex-50 right">
              <p>Marzipan bear claw sweet donut. Jujubes croissant candy wafer cheesecake caramels carrot cake tart. Apple pie chocolate apple pie gummi bears. Candy biscuit cheesecake gummi bears powder. Tootsie roll sugar plum chocolate cake jelly beans chupa chups bear claw apple pie.</p>
            </div>
          </div>
        </div>
        <div className="row photos">
          <div className="flex-wrap-container">
            <div className="flex-photos">
              <img src="http://www.sheffield.com/wp-content/uploads/2013/06/placeholder.png" />
              <h2>Name Goes Here</h2>
              <p>Stuff I Did</p>
            </div>
            <div className="flex-photos">
              <img src="http://www.sheffield.com/wp-content/uploads/2013/06/placeholder.png" />
              <h2>Name Goes Here</h2>
              <p>Stuff I Did</p>
            </div>
            <div className="flex-photos">
              <img src="http://www.sheffield.com/wp-content/uploads/2013/06/placeholder.png" />
              <h2>Name Goes Here</h2>
              <p>Stuff I Did</p>
            </div>
            <div className="flex-photos">
              <img src="http://www.sheffield.com/wp-content/uploads/2013/06/placeholder.png" />
              <h2>Name Goes Here</h2>
              <p>Stuff I Did</p>
            </div>
            <div className="flex-photos">
              <img src="http://www.sheffield.com/wp-content/uploads/2013/06/placeholder.png" />
              <h2>Name Goes Here</h2>
              <p>Stuff I Did</p>
            </div>
          </div>
        </div>
        <footer>
          <div className="footer-content">
            <ul>
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
        </footer>
      </div>
    )
  }
}

export default About;
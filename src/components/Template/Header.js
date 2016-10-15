import React, { Component } from 'react';

class Header extends Component {
  render () {
    return (
      <div
        className="header-container"
        style={
          {
            fontFamily: "Lato",
            width: "100%",
            height: "42px",
            backgroundColor: "#30B3AA"
          }
        }
      >
        <img
          src="http://www.hsdtaxlaw.com/wp-content/uploads/2016/05/logo_placeholder.png"
          style={
            {
              height: "50px"
            }
          }
        />
        <ul>
          <li>
            Home
          </li>
        </ul>
      </div>
    )
  }
}

export default Header;
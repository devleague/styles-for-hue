import React, { Component } from 'react';

class Header extends Component {
  render () {
    return (
      <div
        id="headerDiv"
        style={
          {
            fontFamily: "Lato",
            width: "100%",
            height: "42px",
            backgroundColor: "#30B3AA"
          }
        }
      >
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
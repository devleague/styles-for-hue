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
            height: "40px",
            backgroundColor: "#30B3AA"
          }
        }
      >
      Hello
      </div>
    )
  }
}

export default Header;
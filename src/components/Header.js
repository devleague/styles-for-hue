import React, { Component } from 'react';

class Header extends Component {
  render () {
    return (
      <div
        id="headerDiv"
        style={
          {
            width: "100%",
            height: "40%",
            padding: "10px",
            backgroundColor: "#48E5C2"
          }
        }
      >
      Hello
      </div>
    )
  }
}

export default Header;
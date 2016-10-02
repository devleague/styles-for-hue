import React, { Component } from 'react';

class Footer extends Component {
  render () {
    return (
      <div
        className="FooterDiv"
        style={
          {
            width: "100%",
            height: "40%",
            backgroundColor: "#609CAB",
            padding: "10px",
            textAlign: "center",
            color: "#E6E8E6"
          }
        }
      >
        <h4>
          &copy; Copyright 2016 inHue
        </h4>
      </div>
    )
  }
}

export default Footer;
import React, { Component } from 'react';

class Footer extends Component {
  render () {
    return (
      <div
        className="FooterDiv"
        style={
          {
            width: "100%",
            height: "30px",
            backgroundColor: "#30B3AA",
            textAlign: "center",
            color: "#E9E9E9",
            paddingTop: "10px"
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
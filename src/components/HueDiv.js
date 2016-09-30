import React, { Component } from 'react';

class HueDiv extends Component {
  render() {
    return (
      <div
        className="hueDiv"
        style={
          {
            display: "inline-block",
            backgroundColor: "red"
          }
        }
      >
      I'm a div component!
      </div>
    )
  }
}

export default HueDiv;
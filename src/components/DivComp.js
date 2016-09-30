import React, { Component } from 'react';

class DivComp extends Component {
  render() {
    return (
      <div
        className="divComp"
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

export default DivComp;
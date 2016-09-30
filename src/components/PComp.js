import React, { Component } from 'react';

class PComp extends Component {
  render() {
    return (
      <p
        className="pComp"
        style={
          {
            display: "inline-block",
            backgroundColor: "blue"
          }
        }
      >I'm a p component!
      </p>
    )
  }
}

export default PComp;
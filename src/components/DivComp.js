import React, { Component } from 'react';

class DivComp extends Component {
  render() {
    console.log(this.props.changeColor);
    return (
      <div
        className="divComp"
        style={ this.props.style }
      >
      I'm a div component!
      </div>
    )
  }
}

export default DivComp;
import React, { Component } from 'react';

class DivComp extends Component {
  render() {
    return (
      <div
        className="divComp"
        style={ this.props.style }
        onClick={() => this.props.selectElement(this.props.elementId)}
      >
        I'm a div component!
      </div>
    )
  }
}

export default DivComp;
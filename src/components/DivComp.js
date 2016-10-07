import React, { Component } from 'react';

class DivComp extends Component {
  render() {
    return (
      <div
        className="divComp"
        style={ this.props.style }
        onClick={() => this.props.selectElement(this.props.elementId, this.props.style)}
      >
        I'm a div component!
      </div>
    )
  }
}

export default DivComp;
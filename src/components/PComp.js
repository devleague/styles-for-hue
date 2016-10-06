import React, { Component } from 'react';

class PComp extends Component {
  render() {
    return (
      <p
        className="pComp"
        style={this.props.style}
        onClick={() => this.props.selectP(this.props.elementId)}
      >I'm a p component!
      </p>
    )
  }
}

export default PComp;
import React, { Component } from 'react';

class PComp extends Component {
  isActive () {
    if (this.props.elementId === this.props.selectedElementId) {
      return "pComp selected"
    }
    return "pComp";
  }

  render() {
    return (
      <p
        className={this.isActive()}
        style={this.props.style}
        onClick={() => this.props.selectElement(this.props.elementId, this.props.style)}
      >I'm a p component!
      </p>
    )
  }
}

export default PComp;
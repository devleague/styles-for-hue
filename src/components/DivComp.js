import React, { Component } from 'react';

class DivComp extends Component {
  isActive () {
    if (this.props.elementId === this.props.selectedElementId) {
      return `divComp${this.props.elementId} selected`
    }
    return `divComp${this.props.elementId}`;
  }

  render() {
    return (
      <div
        className={this.isActive()}
        style={ this.props.style }
        onClick={() => this.props.selectElement(this.props.elementId, this.props.style)}
      >
        I'm a div component!
      </div>
    )
  }
}

export default DivComp;
import React, { Component } from 'react';

class ImgComp extends Component {
  isActive () {
    if (this.props.elementId === this.props.selectedElementId) {
      return `imgComp${this.props.elementId} selected`
    }
    return `imgComp${this.props.elementId}`;
  }
  render () {
    return (
      <div
        className={this.props.className}
        style={
          {
            justifyContent: "center"
          }
        }
        onClick={() => this.props.selectElement(this.props.elementId, this.props.style)}
      >

        <h1>Hello</h1>
      </div>
    )
  }
}

export default ImgComp;
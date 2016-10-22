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
        id={this.props.elementId}
        className={this.props.className}
        style={
          {
            justifyContent: "center"
          }
        }
        onClick={(event) => this.props.clickHandler(event, this.props.selectElement, this.props.style)}
      >

        <h1>We Are A Company</h1>
      </div>
    )
  }
}

export default ImgComp;
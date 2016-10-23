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
        <p>We make music and you can make music too! It's easy!</p>
        <p><a href="#">Get Started</a></p>
      </div>
    )
  }
}

export default ImgComp;
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
        <img
          className={this.isActive()}
          src={this.props.src}
          style={ this.props.style }
          onClick={() => this.props.selectElement(this.props.elementId, this.props.style)}
        />
      </div>
    )
  }
}

export default ImgComp;
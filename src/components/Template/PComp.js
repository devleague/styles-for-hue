import React, { Component } from 'react';

class PComp extends Component {
  isActive () {
    if (this.props.elementId === this.props.selectedElementId) {
      return `pComp${this.props.elementId} selected`
    }
    return `pComp${this.props.elementId}`;
  }

  render() {
    if (this.props.linkText) {
      return (
        <p
          id={this.props.elementId}
          className={this.isActive()}
          style={this.props.style}
          onClick={(event) => this.props.clickHandler(event, this.props.selectElement, this.props.style)}
        >
          <a href="#">{this.props.linkText}</a>
        </p>
      )
    }
    return (
      <p
        id={this.props.elementId}
        className={this.isActive()}
        style={this.props.style}
        onClick={(event) => this.props.clickHandler(event, this.props.selectElement, this.props.style)}
      >{this.props.text}
      </p>
    )
  }
}

export default PComp;
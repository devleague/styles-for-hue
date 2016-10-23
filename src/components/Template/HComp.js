import React, { Component } from 'react';

class HComp extends Component {
  isActive () {
    if (this.props.elementId === this.props.selectedElementId) {
      return `hComp${this.props.elementId} selected`
    }
    return `hComp${this.props.elementId}`;
  }

  render () {
    switch (this.props.tag) {
      case 'h1':
        return (
          <h1
            id={this.props.elementId}
            className={this.isActive()}
            style={this.props.style}
            onClick={(event) => this.props.clickHandler(event, this.props.selectElement, this.props.style)}
          >
            {this.props.text}
          </h1>
        )
      case 'h2':
        return (
          <h2
            id={this.props.elementId}
            className={this.isActive()}
            style={this.props.style}
            onClick={(event) => this.props.clickHandler(event, this.props.selectElement, this.props.style)}
          >
            {this.props.text}
          </h2>
        )
      case 'h3':
        return (
          <h3
            id={this.props.elementId}
            className={this.isActive()}
            style={this.props.style}
            onClick={(event) => this.props.clickHandler(event, this.props.selectElement, this.props.style)}
          >
            {this.props.text}
          </h3>
        )
      default:
        return (
          <div> No H-Tag found! </div>
        )
    }
  }
}

export default HComp;
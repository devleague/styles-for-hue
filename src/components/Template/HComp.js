import React, { Component } from 'react';

class HComp extends Component {
  isActive () {
    if (this.props.elementId === this.props.selectedElementId) {
      return `imgComp${this.props.elementId} selected`
    }
    return `imgComp${this.props.elementId}`;
  }

  render () {
    switch (this.props.tag) {
      case 'h1':
        return (
          <h1
            className={this.isActive()}
            style={this.props.style}
            onClick={() => this.props.selectElement(this.props.elementId, this.props.style)}
          >
            This Is An H1 Tag
          </h1>
        )
      case 'h2':
        return (
          <h2
            className={this.isActive()}
            style={this.props.style}
            onClick={() => this.props.selectElement(this.props.elementId, this.props.style)}
          >
            This Is An H2 Tag
          </h2>
        )
      case 'h3':
        return (
          <h3
            className={this.isActive()}
            style={this.props.style}
            onClick={() => this.props.selectElement(this.props.elementId, this.props.style)}
          >
            This Is An H3 Tag
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
import React, { Component } from 'react';

class PComp extends Component {
  isActive () {
    if (this.props.elementId === this.props.selectedElementId) {
      return `pComp${this.props.elementId} selected`
    }
    return `pComp${this.props.elementId}`;
  }

  hoverHandler(event, boolean) {
    if (event) {
      if (boolean === true) {
        return event.target.style.backgroundColor = this.props.mouseOverColor.value;
      }
      return event.target.style.backgroundColor = '#fcca03';
    }
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
          <a
            href="#"
            onMouseEnter={(event) => this.hoverHandler(event, true)}
            onMouseLeave={(event) => this.hoverHandler(event, false)}
          >
            {this.props.linkText}
          </a>
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
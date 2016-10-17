import React, { Component } from 'react';

class Footer extends Component {
  render () {
    return (
      <div
        className={this.props.className}
        style={this.props.style}
        onClick={() => this.props.selectElement(this.props.elementId, this.props.style)}
      >
        <h6>
          &copy; Copyright 2016 inHue
        </h6>
      </div>
    )
  }
}

export default Footer;
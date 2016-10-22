import React, { Component } from 'react';

class Footer extends Component {
  render () {
    return (
      <div
        id={this.props.elementId}
        className={this.props.className}
        style={this.props.style}
        onClick={(event) => this.props.clickHandler(event, this.props.selectElement, this.props.style)}
      >
        <h6>
          Copyright © 2016 YOUR COMPANY. All Rights Reserved
        </h6>
      </div>
    )
  }
}

export default Footer;
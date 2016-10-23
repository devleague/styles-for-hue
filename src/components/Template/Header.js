import React, { Component } from 'react';

class Header extends Component {
  render () {
    return (
      <div
        id={this.props.elementId}
        className={this.props.className}
        style={this.props.style}
        onClick={(event) => this.props.clickHandler(event, this.props.selectElement, this.props.style)}
      >
        <div className="t1-header-left">
          <h1>YOUR COMPANY</h1>
        </div>
        <div className="t1-header-right">
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Features</a></li>
            <li><a href="#">Pricing</a></li>
            <li><a href="#">About Us</a></li>
          </ul>
        </div>
      </div>
    )
  }
}

export default Header;
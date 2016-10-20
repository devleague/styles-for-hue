import React, { Component } from 'react';

class Header extends Component {
  render () {
    return (
      <div
        className={this.props.className}
        style={this.props.style}
        onClick={() => this.props.selectElement(this.props.elementId, this.props.style)}
      >
        <img
          src="http://www.hsdtaxlaw.com/wp-content/uploads/2016/05/logo_placeholder.png"
          style={
            {
              height: "50px"
            }
          }
        />
      </div>
    )
  }
}

export default Header;
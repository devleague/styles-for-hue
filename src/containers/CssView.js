import React, { Component } from 'react';

class CssView extends Component {
  render() {
    return (
      <div
        onClick={this.props.handleClick}
        className="css-contain"
      >
        <h1> &lt; CSS &gt; </h1>
        <div
          className="view-css"
        >
          VIEWING THE CSS HERE...
        </div>
        <div 
          className="footer-cssView"
        >
         Stuck on the bottom
        </div>
      </div>
    )
  }
}

export default CssView;
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
          <p>VIEWING THE CSS HERE...</p>
        </div>
        <div 
          className="footer-cssView"
        >
         <p>Stuck on the bottom</p>
        </div>
      </div>
    )
  }
}

export default CssView;
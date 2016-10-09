import React, { Component } from 'react';

class CssView extends Component {
  render() {
    return (
      <div
        className="cssView"
      >
        <h1> &lt; CSS &gt; </h1>
        <div>
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
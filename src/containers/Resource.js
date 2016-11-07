import React, { Component } from 'react';
import { Link } from 'react-router';

class Resource extends Component {
  render() {
    return (
      <div
        className="content-container"
      >
        <div
          className="header-image resource-image"
        >
          <h1>Resources</h1>
        </div>
        <div className="row">
          <div className="flex-wrap-container">
            <div className="flex-100">
              <h2 className="resource-subtitle">Fonts</h2>
              <p>For the everyday developer that needs help picking out fonts. </p>
              <p><a href="https://fonts.google.com/" target="_blank">Google Fonts</a> - Google Fonts have popular pairings with each fonts provided on the website.</p>
            </div>
            <div className="flex-100">
              <h2 className="resource-subtitle">Color Palettes</h2>
              <p>A few sites that we recommend to the everyday developer that needs help with color palettes. There are more color palette sites that are out there. These sites are here to help the everyday developer start off from here.</p>
              <p><a href="http://colorpalettes.net/" target="_blank">Color Palettes</a></p>
              <p><a href="http://www.colourlovers.com/" target="_blank">Colourlovers</a></p>
              <p><a href="https://color.adobe.com/create/color-wheel/" target="_blank">Adobe Color CC</a></p>
              <p><a href="https://coolors.co/" target="_blank">Coolors</a></p>
              <p><a href="http://www.color-hex.com/color-palettes/" target="_blank">Color Hex</a></p>
              <p><a href="http://www.pictaculous.com/" target="_blank">Pictaculous</a> - If you want to create a site that compliments the colors of a photo.</p>
            </div>
            <div className="flex-100">
              <h2 className="resource-subtitle">Responsive Grid Layout</h2>
              <p>Creating a responsive layout that is visually appealing to the users. </p>
              <p><a href="http://www.responsivegridsystem.com/" target="_blank">Responsive Grid System</a></p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Resource;
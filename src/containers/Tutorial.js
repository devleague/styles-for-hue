import React, { Component } from 'react';
import { Link } from 'react-router';
import { NavLink } from '../components';

class Tutorial extends Component {
  render() {
    return (
      <div
        className="content-container"
      >
        <div
          className="header-image tutorial-image"
        >
          <h1>Tutorial</h1>
        </div>
        <div
          className="row"
        >
          <div
            className="flex-wrap-container"
          >
            <div className="flex-100">
              <div style={{textAlign: 'center'}}>
              <iframe display="inline-block" width="100%" height="415" src="https://www.youtube.com/embed/RW58JIfK6zc?version=3&vq=hd1080" frameBorder="0" allowFullScreen></iframe>
              </div>
            </div>
            <div className="flex-100">
              <h2 className="content-subtitle">Getting Started</h2>
              <ul>
                <li>On the <NavLink to="/">Home</NavLink> page click on the button Start Styling or <NavLink to="/template">Template</NavLink> on the navigation bar.</li>
                <li>Use the <i>Edit Sidebar</i> and click on the icons next to the Font, Div, Images and Saved Templates to show the menu to change styles.</li>
              </ul>
            </div>
            <div className="flex-100">
              <h2 className="content-subtitle">Font</h2>
              <ul>
                <li>Pick your element: Change your fonts based on the type of element (&lt;p&gt;, &lt;h1&gt;, &lt;h2&gt;, &lt;h2&gt;, selected, or all).</li>
                <li>Pick your font: Choose a font.</li>
                <li>Font color: Change colors using the color wheel.</li>
                <li>Font size: Type in desired font size number.</li>
              </ul>
            </div>
            <div className="flex-100">
              <h2 className="content-subtitle">Div</h2>
              <ul>
                <li>Pick your palette: Use preset palettes to change div colors.</li>
                <li>Pick your color: Select a div and change the color of the individual div.</li>
              </ul>
            </div>
            <div className="flex-100">
              <h2 className="content-subtitle">Saving</h2>
              <ul>
                <li>Name your template/style using the Name Your Style input field.</li>
                <li>You may choose to use the default name of Hue with a timestamp.</li>
                <li>Click on Save Template to create a unique link to your template for later editing.</li>
                <li>Use Update Template to update your current saved template.</li>
                <li>Click on Export HTML and CSS to download a .zip file of the HTML and CSS onto your computer.</li>
              </ul>
            </div>
            <div className="flex-100">
              <h2 className="content-subtitle">Loading Saved Styles/Templates</h2>
              <ul>
                <li>Click on Saved Styles in the Style Editor Sidebar.</li>
                <li>Using the Choose Your Template dropdown menu, select a template to load.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Tutorial;
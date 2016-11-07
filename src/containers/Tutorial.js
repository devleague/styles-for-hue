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
              <br/>
              <h1>Welcome to Styles for Hue</h1>
              <br />
            </div>
            <div className="flex-100">
              <h3>Getting Started</h3>
              <p>On the <NavLink to="/">Home</NavLink> page click on the button Start Styling or <NavLink to="/template">Template</NavLink> on the navigation bar.</p>
              <p>Use the <i>Edit Sidebar</i> and click on the icons next to the Font, Div, Images and Saved Templates to show the menu to change styles.</p>
              <br />
            </div>
            <div className="flex-100">
              <h3>Font</h3>
              <p>Pick your element: Change your fonts based on the type of element (&lt;p&gt;, &lt;h1&gt;, &lt;h2&gt;, &lt;h3&gt;, selected, or all).</p>
              <p>Pick your font: Choose a font.</p>
              <p>Font color: Change colors using the color wheel.</p>
              <p>Font size: Type in desired font size number.</p>
              <br />
            </div>
            <div className="flex-100">
              <h3>Div</h3>
              <p>Pick your palette: Use preset palettes to change div colors.</p>
              <p>Pick your color: Select a div and change the color of the individual div.</p>
              <br />
            </div>
            <div className="flex-100">
              <h3>Saving</h3>
              <p>Name your template/style using the Name Your Style input field.</p>
              <p>You may choose to use the default name of Hue with a timestamp.</p>
              <p>Click on Save Template to create a unique link to your template for later editing.</p>
              <p>Use Update Template to update your current saved template.</p>
              <p>Click on Export HTML and CSS to download a .zip file of the HTML and CSS onto your computer.</p>
              <br />
            </div>
            <div className="flex-100">
              <h3>Loading Saved Styles/Templates</h3>
              <p>Click on Saved Styles in the Style Editor Sidebar.</p>
              <p>Using the Choose Your Template dropdown menu, select a template to load.</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Tutorial;
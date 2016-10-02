import React, { Component } from 'react';


class Edit extends Component {
  constructor (props) {
    super(props);
    this.colorValue = () => {
      var colorMenu = document.getElementById('colorMenu');
      return colorMenu.options[colorMenu.selectedIndex].value;
    }
    this.fontValue = () => {
      var fontMenu = document.getElementById('fontMenu');
      return fontMenu.options[fontMenu.selectedIndex].value;
    }
  }
  render () {
    return (
      <div
        className="editColumn"
      >
        <h1> Edit </h1>
        <div>
          <h3>Pick Your Font:</h3>
            <select id="fontMenu">
              <option value="times">Times New Roman</option>
              <option value="arial">Arial</option>
            </select>
        </div>
        <div>
          <h3>Pick Your Color:</h3>
            <select id="colorMenu" onChange= {() => this.props.changeColor(this.colorValue())}>
              <option value="blue">Blue</option>
              <option value="purple">Purple</option>
            </select>
        </div>
      </div>
    )
  }
}

export default Edit;
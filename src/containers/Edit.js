import React, { Component } from 'react';


class Edit extends Component {
  constructor (props) {
    super(props);
    this.colorValue = () => {
      var color = document.getElementById('colorMenu').value;
      document.getElementById("Color").innerHTML = "You selected: " + color;
      document.getElementById("Color").style.backgroundColor = color;
      return color;
    }
    this.fontValue = () => {
      var fontMenu = document.getElementById('fontMenu').value;
      document.getElementById("Font").innerHTML = "You selected: " + font;
      document.getElementById("Font").style.fontFamily = font;
      return font;
    }
  }
  ChangeFont() {
      var font = document.getElementById("fontMenu").value;
      return font;
  }
  render () {
    return (
      <div
        className="editColumn"
      >
        <h1> Edit </h1>
        <div>
          <h3>Pick Your Font:</h3>
            <select id="fontMenu" onChange={this.ChangeFont}>
              <option value="times">Times New Roman</option>
              <option value="arial">Arial</option>
            </select>
            <div id="Font"></div>
        </div>
        <div>
          <h3>Pick Your Color:</h3>
            <select id="colorMenu" onChange={() => this.props.changeColor(this.colorValue())}>
              <option value="blue">Blue</option>
              <option value="purple">Purple</option>
            </select>
            <div id="Color"></div>
        </div>
      </div>
    )
  }
}

export default Edit;

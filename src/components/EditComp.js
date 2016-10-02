import React, { Component } from 'react';

class EditComp extends Component {
  ChangeColor() {
      var x = document.getElementById("changeColor").value;

      document.getElementById("Color").innerHTML = "You selected: " + x;
      document.getElementById("Color").style.backgroundColor = x;
  }
  ChangeFont() {
      var x = document.getElementById("changeFont").value;

      document.getElementById("Font").innerHTML = "You selected: " + x;
      document.getElementById("Font").style.fontFamily = x;
  }
  render () {
    return (
      <div
        className="editColumn"
      >
        <h1> Edit </h1>
        <div>
          <h3>Pick Your Font:</h3>
            <select id="changeFont" onChange={this.ChangeFont}>
              <option value="times">Times New Roman</option>
              <option value="arial">Arial</option>
            </select>
            <div id="Font"></div>
        </div>
        <div>
          <h3>Pick Your Color:</h3>
            <select id="changeColor" onChange={this.ChangeColor}>
              <option value="blue">Blue</option>
              <option value="purple">Purple</option>
            </select>

            <div id="Color"></div>
        </div>
      </div>
    )
  }
}

export default EditComp;
import React, { Component } from 'react';

class EditComp extends Component {
  myFunction() {
      var x = document.getElementById("changeColor").value;

      document.getElementById("demo").innerHTML = "You selected: " + x;
      document.getElementById("demo").style.backgroundColor = x;
  }
  render () {
    return (
      <div
        className="editColumn"
      >
        <h1> Edit </h1>
        <div>
          <h3>Pick Your Font:</h3>
            <select>
              <option value="times">Times New Roman</option>
              <option value="arial">Arial</option>
            </select>
        </div>
        <div>
          <h3>Pick Your Color:</h3>
            <select id="changeColor" onChange={this.myFunction}>
              <option value="blue">Blue</option>
              <option value="purple">Purple</option>
            </select>

            <div id="demo"></div>
        </div>
      </div>
    )
  }
}

export default EditComp;
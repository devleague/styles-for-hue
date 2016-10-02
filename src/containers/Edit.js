import React, { Component } from 'react';


class Edit extends Component {
  constructor (props) {
    super(props);
  }
  changeFont() {
      var font = document.getElementById("fontMenu").value;
      return font;
  }
  changeColor() {
      var color = document.getElementById("colorMenu").value;
      return color;
  }
  render () {
    return (
      <div
        className="editColumn"
      >
        <h1> Edit </h1>
        <div>
          <h3>Pick Your Font:</h3>
            <select id="fontMenu" onChange={this.changeFont}>
              <option value="times">Times New Roman</option>
              <option value="arial">Arial</option>
            </select>
        </div>
        <div>
          <h3>Pick Your Color:</h3>
            <select id="colorMenu" onChange={() => this.props.changeColor(this.changeColor())}>
              <option value="blue">Blue</option>
              <option value="purple">Purple</option>
            </select>
        </div>
      </div>
    )
  }
}

export default Edit;

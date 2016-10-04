import React, { Component } from 'react';

class ColorMenu extends Component {
  changeColor() {
    var color = document.getElementById("colorMenu").value;
    return color;
  }

  render() {
    return (
      <div>
        <h3>Pick Your Color:</h3>
          <select id="colorMenu" onChange={() => this.props.changeColor(this.changeColor())}>
            <option value="blue">Blue</option>
            <option value="purple">Purple</option>
          </select>
      </div>
    );
  }
}

export default ColorMenu;
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
          <select id="colorMenu" defaultValue="0" onChange={() => this.props.changeColor(this.props.selectedElement, this.changeColor())}>
            <option value="0" disabled="disabled">SELECT COLOR</option>
            {this.props.colorPalette.map((color, index) => {
              return (
                <option
                  key={ index }
                  value={ color.value }
                  >
                    { color.label }
                </option>
              )
            })}
          </select>
      </div>
    );
  }
}

export default ColorMenu;
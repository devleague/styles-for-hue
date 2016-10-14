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
        <h3>Div Size</h3>
          <select id="divWidth"
            defaultValue="0" onChange={() => this.props.changeDivWidth(this.props.selectedElement, this.changeDivWidth())}
          >
            <option value="20px">20px</option>
            <option value="30px">30px</option>
          </select>
      </div>
    );
  }
}

export default ColorMenu;
import React, { Component } from 'react';

class FontMenu extends Component {
  changeFont() {
    var font = document.getElementById("fontMenu").value;
    return font;
  }
  changeFontColor() {
    var font = document.getElementById("fontColors").value;
    return font;
  }
  changeFontSize() {
    var font = document.getElementById("fontSizes").value;
    return font;
  }
  changeFontSizeUnit() {
    var font = document.getElementById("fontSizeUnits").value;
    return font;
  }
  render() {
    return(
      <div>
        <h3>Pick Your Font:</h3>
          <select id="fontMenu" defaultValue="0" onChange={() => this.props.changeFont(this.props.selectedElement, this.changeFont())}>
            <option value="0" disabled="disabled">SELECT FONT</option>
            {this.props.fontList.map((font, index) => {
              return (
                <option
                  key={index}
                  value={font.family}
                >
                  { font.family }
                </option>
              )
            })}
          </select>
          <p>Font Color</p>
          <form onChange={(event) => {this.props.changeFontColor(this.props.selectedElement, event.target.value)}}>
            <input type="color" defaultValue="#ff0000" />
          </form>
          <p>Font Size</p>
          <form onChange={(event) => this.props.changeFontSize(this.props.selectedElement, event.target.value + this.changeFontSizeUnit())}>
            <input type="number" min="10" max="100" id="fontSizes" placeholder="Font Size" />
            <select id="fontSizeUnits">
              <option value="px">px</option>
              <option value="em">em</option>
            </select>
          </form>
      </div>
    );
  }
}

export default FontMenu;
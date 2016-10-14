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
          <select id="fontSizes" defaultValue="0" onChange={() => this.props.changeFontSize(this.props.selectedElement, this.changeFontSize())}>
            <option value="10px">10px</option>
            <option value="12px">12px</option>
            <option value="16px">16px</option>
            <option value="20px">20px</option>
            <option value="24px">24px</option>
            <option value="36px">36px</option>
          </select>
      </div>
    );
  }
}

export default FontMenu;
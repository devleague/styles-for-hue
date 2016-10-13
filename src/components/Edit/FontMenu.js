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
          <select id="fontColors" defaultValue="0" onChange={() => this.props.changeFontColor(this.props.selectedElement, this.changeFontColor())}>
            <option value="red">red</option>
            <option value="pink">pink</option>
            <option value="purple">purple</option>
          </select>
      </div>
    );
  }
}

export default FontMenu;
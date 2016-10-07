import React, { Component } from 'react';

class FontMenu extends Component {
  changeFont() {
    var font = document.getElementById("fontMenu").value;
    return font;
  }
  render() {
    return(
      <div>
        <h3>Pick Your Font:</h3>
          <select id="fontMenu" onChange={() => this.props.changeFont(this.props.selectedElement, this.changeFont())}>
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
            <option value="times">Times New Roman</option>
            <option value="arial">Arial</option>
          </select>
      </div>
    );
  }
}

export default FontMenu;
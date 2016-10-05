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
          <select id="fontMenu" onChange={() => this.props.changeFont(5, this.changeFont())}>
            <option value="times">Times New Roman</option>
            <option value="arial">Arial</option>
          </select>
      </div>
    );
  }
}

export default FontMenu;
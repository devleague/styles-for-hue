import React, { Component } from 'react';

class FontMenu extends Component {
  changeFont() {
    var font = document.getElementById("fontMenu").value;
    return this.switchThemeFonts(font);
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

  switchThemeFonts(newFont) {
    // this.props.changeSelectedFont(newFont);
    let newElems = this.props.elements;
    newElems = newElems.map((elem) => {
      if (elem.children) {
        elem.children = elem.children.map((child) => {
          if (child.children) {
            child.children = child.children.map((secondChild) => {
              if(secondChild.children) {
                secondChild.children = secondChild.children.map((thirdChild) => {
                  if(thirdChild.children) {
                    thirdChild.children = thirdChild.children.map((fourthChild) => {
                      return { ...fourthChild, style: { ...fourthChild.style, fontFamily: newFont}};
                    })
                  }
                  return { ...thirdChild};
                })
              }
              return { ...secondChild};
            })
          }
          return { ...child};
        })
      }
      return { ...elem};
    })
    return this.props.changeFont(newElems);
  }

  render() {
    return(
      <div>
        <h3>Pick Your Font:</h3>
          <select id="fontMenu" defaultValue="0" onChange={() => this.changeFont()}>
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
              <option value="em">rem</option>
            </select>
          </form>
      </div>
    );
  }
}

export default FontMenu;
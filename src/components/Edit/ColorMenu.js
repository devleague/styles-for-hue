import React, { Component } from 'react';

class ColorMenu extends Component {
  constructor(props) {
    super(props);
    this.switchThemeColor = this.switchThemeColor.bind(this);
  }
  changeColor() {
    var color = document.getElementById("colorMenu").value;
    return color;
  }
  changeColorPalette() {
    var colorArrayIndex = document.getElementById("colorPalette").value;
    return this.switchThemeColor(this.props.colorPalette[colorArrayIndex]);
  }

  switchThemeColor(colorArray) {
    this.props.changeColorPalette(colorArray);
    let newElems = this.props.elements;
    newElems = newElems.map((elem) => {
      if (elem.children) {
        elem.children = elem.children.map((child) => {
          if (child.children) {
            child.children = child.children.map((secondChild) => {
              if (secondChild.children) {
                secondChild.children = secondChild.children.map((thirdChild) => {
                  if (thirdChild.children) {
                    thirdChild.children = thirdChild.children.map((fourthChild) => {
                       return { ...fourthChild, style: { ...fourthChild.style, backgroundColor: colorArray[3].value}};
                    })
                  }
                  return { ...thirdChild, style: { ...thirdChild.style, backgroundColor: colorArray[2].value}};
                })
              }
              return { ...secondChild, style: { ...secondChild.style, backgroundColor: colorArray[0].value}};
            })
          }
          return { ...child, style: { ...child.style, backgroundColor: colorArray[1].value}};
        })
      }
      return { ...elem, style: { ...elem.style, backgroundColor: colorArray[0].value}};
    })
    return this.props.changeColor(newElems);
  }

  render() {
    return (
      <div>
      <h3>Pick Your Palette:</h3>
        <select
          id="colorPalette"
          defaultValue="0"
          onChange={() => this.changeColorPalette()}
        >
          <option value="0">Palette 1</option>
          <option value="1">Palette 2</option>
        </select>
        <h3>Pick Your Color:</h3>
          <select id="colorMenu" defaultValue="0" onChange={() => this.props.changeColor(this.props.selectedElement, this.changeColor())}>
            <option value="0" disabled="disabled">SELECT COLOR</option>
            {this.props.colorPalette[0].map((color, index) => {
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
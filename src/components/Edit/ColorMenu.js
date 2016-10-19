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

  switchThemeColor(styleArray) {
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
                       return { ...fourthChild, style: { backgroundColor: styleArray[3].value}};
                    })
                  }
                  return { ...thirdChild, style: { backgroundColor: styleArray[2].value}};
                })
              }
              return { ...secondChild};
            })
          }
          return { ...child};
        })
      }
      return { ...elem, style: { ...elem.style, backgroundColor: styleArray[0].value}};
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
          onChange={() => this.switchThemeColor(this.props.colorPalette)}
        >
          <option value="0" disabled="disabled">SELECT PALETTE</option>
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
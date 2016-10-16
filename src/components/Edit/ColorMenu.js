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
    console.log(this.props.elements);
    let newElems = this.props.elements;
    newElems = newElems.map((elem) => {
      if (elem.children) {
        elem.children = elem.children.map((child) => {
          if (child.children) {
            child.children = child.children.map((secondChild) => {
              if (secondChild.children) {
                secondChild.children = secondChild.children.map((thirdChild) => {
                  return { ...thirdChild, style: { backgroundColor: styleArray[3].value}};
                })
              }
              return { ...secondChild, style: { ...secondChild.style, backgroundColor: styleArray[2].value}};
            })
          }
          return { ...child, style: { ...child.style, backgroundColor: styleArray[1].value}};
        })
      }
      return { ...elem, style: { ...elem.style, backgroundColor: styleArray[0].value}};
    })
    console.log(this.props.changeColor(newElems));
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
      </div>
    );
  }
}

export default ColorMenu;
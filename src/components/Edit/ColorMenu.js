import React, { Component } from 'react';

class ColorMenu extends Component {
  constructor(props) {
    super(props);
    this.switchThemeColor = this.switchThemeColor.bind(this);
    this.foundElement = false;
  }
  changeColor() {
    var color = document.getElementById("colorMenu").value;
    return color;
  }
  changeColorPalette() {
    console.log(this.props.colorPalette);
    var colorArrayIndex = document.getElementById("colorPalette").value;
    return this.switchThemeColor(this.props.colorPalette[colorArrayIndex]);
  }

  switchElementColor(color, selectedElementId, elements) {
    let newElems = elements;
    newElems = newElems.map((elem) => {
      if (elem.elementId === selectedElementId) {
        return { ...elem, style: { ...elem.style, backgroundColor: color}};
      }
      if (elem.children) {
        elem.children = elem.children.map((child) => {
          if (child.elementId === selectedElementId) {
          return { ...child, style: { ...child.style, backgroundColor: color}};
        }
          if (child.children) {

            child.children = child.children.map((secondChild) => {
              if (secondChild.elementId === selectedElementId) {
          return { ...secondChild, style: { ...secondChild.style, backgroundColor: color}};
        }
              if (secondChild.children) {
                secondChild.children = secondChild.children.map((thirdChild) => {
                  if (thirdChild.elementId === selectedElementId) {
          return { ...thirdChild, style: { ...thirdChild.style, backgroundColor: color}};
        }
                  if (thirdChild.children) {
                    thirdChild.children = thirdChild.children.map((fourthChild) => {
                      if (fourthChild.elementId === selectedElementId) {
          return { ...fourthChild, style: { ...fourthChild.style, backgroundColor: color}};
        }
                       return { ...fourthChild};
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
    return this.props.changeColor(newElems);
    // let newElems = [];
    // let children = [];
    // newElems = elements.map((elem) => {
    //   if (elem.elementId === selectedElementId) {
    //     console.log('YAY!');
    //     console.log({ ...elem, style: { ...elem.style, backgroundColor: color}});
    //     return { ...elem, style: { ...elem.style, backgroundColor: color}};
    //   }
    //   if (elem.children) {
    //     this.switchElementColor(color, selectedElementId, elem.children);
    //     elem.children = elem.children.map((child) => {
    //       return { ...child};
    //     })
    //     return { ...elem};
    //   }
    //   return { ...elem};
    // })
    // console.log(newElems);
    // return newElems;
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
                       return { ...fourthChild, style: { ...fourthChild.style, color: colorArray[3].value}};
                    })
                  }
                  return { ...thirdChild, style: { ...thirdChild.style, backgroundColor: colorArray[2].value}};
                })
              }
              if (secondChild.tag === 'div') {
                return { ...secondChild, style: { ...secondChild.style, backgroundColor: colorArray[0].value}};
              }
              return { ...secondChild};
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
          <select id="colorMenu" defaultValue="0" onChange={() => this.switchElementColor(this.changeColor(), this.props.selectedElement.selectedElementId, this.props.elements)}>
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
      </div>
    );
  }
}

export default ColorMenu;
import React, { Component } from 'react';

class FontMenu extends Component {
  changeFontFamily(fontFamily) {
    var elementTag = document.getElementById("elementMenu").value
    var font = {
      fontFamily: fontFamily
    };
    return this.switchThemeFonts(elementTag, font);
  }

  changeFontColor(fontColor) {
    var elementTag = document.getElementById("elementMenu").value
    var font = {
      color: fontColor
    }
    return this.switchThemeFonts(elementTag, font);
  }

  changeFontSize(fontSize) {
    var elementTag = document.getElementById("elementMenu").value
    if (fontSize !== 'em' && fontSize !== 'px' && fontSize !== '') {
      var font = {
        fontSize: `${fontSize + document.getElementById("fontSizeUnits").value}`
      }
      return this.switchThemeFonts(elementTag, font);
    }
  }

  switchThemeFonts(elementTag, fontObj) {
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
                      if (elementTag === 'all') {
                        switch (Object.keys(fontObj)[0]) {
                          case 'fontFamily':
                            return { ...fourthChild, style: { ...fourthChild.style, fontFamily: fontObj.fontFamily}};
                          case 'color':
                            return { ...fourthChild, style: { ...fourthChild.style, color: fontObj.color}};
                          case 'fontSize':
                            return { ...fourthChild, style: { ...fourthChild.style, fontSize: fontObj.fontSize}};
                          default:
                            return { ...fourthChild};
                        }
                      }
                      if (elementTag === 'selected'
                        && this.props.selectedElement.selectedElementId === fourthChild.elementId) {
                        switch (Object.keys(fontObj)[0]) {
                          case 'fontFamily':
                            return { ...fourthChild, style: { ...fourthChild.style, fontFamily: fontObj.fontFamily}};
                          case 'color':
                            return { ...fourthChild, style: { ...fourthChild.style, color: fontObj.color}};
                          case 'fontSize':
                            return { ...fourthChild, style: { ...fourthChild.style, fontSize: fontObj.fontSize}};
                          default:
                            return { ...fourthChild};
                        }
                      }
                      if (elementTag === fourthChild.tag) {
                        switch (Object.keys(fontObj)[0]) {
                          case 'fontFamily':
                            return { ...fourthChild, style: { ...fourthChild.style, fontFamily: fontObj.fontFamily}};
                          case 'color':
                            return { ...fourthChild, style: { ...fourthChild.style, color: fontObj.color}};
                          case 'fontSize':
                            return { ...fourthChild, style: { ...fourthChild.style, fontSize: fontObj.fontSize}};
                          default:
                            return { ...fourthChild};
                        }
                      }
                      return { ...fourthChild};
                    })
                  }
                  return { ...thirdChild};
                })
              }
              if (elementTag === 'all') {
                switch (Object.keys(fontObj)[0]) {
                  case 'fontFamily':
                    return { ...secondChild, style: { ...secondChild.style, fontFamily: fontObj.fontFamily}};
                  case 'color':
                    return { ...secondChild, style: { ...secondChild.style, color: fontObj.color}};
                  case 'fontSize':
                    return { ...secondChild, style: { ...secondChild.style, fontSize: fontObj.fontSize}};
                  default:
                    return { ...secondChild};
                    }
                  }
              if (elementTag === 'selected'
                && this.props.selectedElement.selectedElementId === secondChild.elementId) {
                switch (Object.keys(fontObj)[0]) {
                  case 'fontFamily':
                    return { ...secondChild, style: { ...secondChild.style, fontFamily: fontObj.fontFamily}};
                  case 'color':
                    return { ...secondChild, style: { ...secondChild.style, color: fontObj.color}};
                  case 'fontSize':
                    return { ...secondChild, style: { ...secondChild.style, fontSize: fontObj.fontSize}};
                  default:
                    return { ...secondChild};
                }
              }
              if (elementTag === secondChild.tag) {
                switch (Object.keys(fontObj)[0]) {
                  case 'fontFamily':
                    return { ...secondChild, style: { ...secondChild.style, fontFamily: fontObj.fontFamily}};
                  case 'color':
                    return { ...secondChild, style: { ...secondChild.style, color: fontObj.color}};
                  case 'fontSize':
                    return { ...secondChild, style: { ...secondChild.style, fontSize: fontObj.fontSize}};
                  default:
                    return { ...secondChild};
                }
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
      <div
        className="menu-show-details"
      >
        <h4>Pick Your Element:</h4>
          <select id="elementMenu" defaultValue="0">
            <option value="0" disabled="disabled">SELECT ELEMENT</option>
            <option value='all'>all tags</option>
            <option value='selected'>selected only</option>
            <option value='p'>p tags</option>
            <option value='h1'>h1 tag</option>
            <option value='h2'>h2 tag</option>
            <option value='h3'>h3 tags</option>
          </select>
        <h4>Pick Your Font:</h4>
          <select id="fontMenu" defaultValue="0" onChange={(event) => this.changeFontFamily(event.target.value)}>
            <option value="0" disabled="disabled">SELECT FONT</option>
            {this.props.fontList.map((font, index) => {
              return (
                <option
                  key={index}
                  value={font}
                >
                  { font }
                </option>
              )
            })}
          </select>
          <h4>Font Color</h4>
          <form onChange={(event) => this.changeFontColor(event.target.value)}>
            <input type="color" defaultValue="#ff0000" />
          </form>
          <h4>Font Size</h4>
          <form onChange={(event) => this.changeFontSize(event.target.value)}>
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
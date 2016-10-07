import React, { Component } from 'react';
import { FontMenu, ColorMenu } from '../components';

class Edit extends Component {
  constructor (props) {
    super(props);
  }

  saveStyle(style){
    console.log('props', this.props);
    //console.log('div', divStyles);
    //console.log('div styles:', divStyles.fontFamily);
    $.ajax({
      url: 'http://127.0.0.1:3000/update',
      type: 'POST',
      data: style
    });
  }

  selectElement(container){
    var newStyles = {};
    var el = document.getSelection();
    //console.log(el);
    var styles = el.anchorNode.parentElement.attributes.style.nodeValue;
    //console.log("styles " + styles);

    var test = styles.split('; ');
    //console.log("test"  + test);

    test.forEach(function(property) {
      var tup = property.split(': ');
      //console.log("Line 32" + tup[0]);
      var slice = tup[0].split('-').map(function capitalize(part){
        return part.charAt(0).toUpperCase() + part.slice(1);
      }).join('');
      var good = slice.charAt(0).toLowerCase() + slice.slice(1);
      tup[0] = good;
      newStyles[tup[0]] = tup[1].replace(';', '');
    });
    $.ajax({
      url: 'http://127.0.0.1:3000/update',
      type: 'POST',
      data: newStyles
    });
  }

  exportAsCSSFile() {
    var incomingString = 'background-color: red; font-family: arial; display: inline-block;';

    var lineBreaks = incomingString.replace(/; /g, ';\n  ');
    var initialBracket = '{ \n  ';
    var endBracket = '\n}';
    var initialSCSS = initialBracket.concat(lineBreaks);
    var finishedSCSS = initialSCSS.concat(endBracket);

    console.log(finishedSCSS);
  }

  render() {
    return (
      <div
        className="editColumn"
      >
        <h1> Edit </h1>
        <FontMenu
          fontList={this.props.fontList}
          selectedElement={this.props.selectedElement}
          changeFont={this.props.changeFont}
        />
        <ColorMenu
          colorPalette={this.props.colorPalette}
          selectedElement={this.props.selectedElement}
          changeColor={this.props.changeColor}
        />
        <div>
          <button
            className="save"
            type="button"
            onClick={this.saveStyle(this.props.selectedElementStyle)}
          >
            Save
          </button>
        </div>
        <div>
          <button
            className="export-css"
            type="button"
            onClick={this.selectElement}
          >
            Get Element
          </button>
        </div>
        <div>
          <button
            className="export-as-css-file"
            type="button"
            onClick={this.exportAsCSSFile}
          >
            Export As CSS File
          </button>
        </div>
      </div>
    )
  }
}

export default Edit;
import React, { Component } from 'react';
import { FontMenu, ColorMenu } from '../components';
var fileSaver = require('file-saver');
console.log(fileSaver);

class Edit extends Component {
  constructor (props) {
    super(props);
  }

  saveStyle(doc){
    $.ajax({
      url: '/update',
      type: 'POST',
      dataType: 'json',
      contentType: 'application/json',
      data: JSON.stringify({doc: doc}),
    });
  }

  btnSave() {
    console.log("enter");
    var text = document.getElementById("textarea").value;
    console.log(text);
    var filename = document.getElementById("input-fileName").value;
    console.log(filename);
    var blob = new Blob([text], {type: "text/plain;charset=utf-8"});
    console.log(blob);
    fileSaver.saveAs(blob, filename+".txt");
  };

  exportAsCSSFile() {
    var incomingString = 'background-color: red; font-family: arial; display: inline-block;';

    var testArray = [
      {
        elementId: 1,
        type: 'div',
        style: {
          backgroundColor: 'blue',
          fontFamily: 'sans-serif',
          display: 'inline-block'
        }
      },
      {
        elementId: 2,
        type: 'p',
        style: {
          backgroundColor: 'green',
          fontFamily: 'arial',
        }
      },
      {
        elementId: 3,
        type: 'img',
        src: '/images/city_night.jpg',
        style: {
          width: "100%",
          backgroundColor: "#3C6E71"
        }
      },
      {
        elementId: 4,
        type: 'ul',
        subType: [
          {
            elementId: 6,
            type: 'li',
            style: {
              backgroundColor: 'pink'
            }
          },
          {
            elementId: 7,
            type: 'li',
            style: {
              backgroundColor: 'orange'
            }
          }
        ],
        style: {
          color: 'red'
        }
      },
      {
        elementId: 5,
        type: 'div',
        style: {
          backgroundColor: 'red',
          fontFamily: 'arial',
          display: 'inline-block'
        }
      }
    ];

    console.log(testArray);


    // var lineBreaks = incomingString.replace(/; /g, ';\n  ');
    // var initialBracket = '{ \n  ';
    // var endBracket = '\n}';
    // var initialSCSS = initialBracket.concat(lineBreaks);
    // var finishedSCSS = initialSCSS.concat(endBracket);

    // console.log(finishedSCSS);
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
            onClick={this.saveStyle(this.props.elements)}
          >
            Save Template
          </button>
        </div>
        <form role="form">
          <div class="form-group">
            <label for="input-fileName">File name</label>
            <input type="text"
              class="form-control"
              id="input-fileName"
              value="textFile"
              placeholder="Enter file name"></input>
          </div>
          <div class="form-group">
            <label for="textarea">Text</label>
            <textarea id="textarea"
              class="form-control"
              rows="10"
              placeholder="Enter text to save">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae iure ab voluptate sunt reiciendis, officia, aliquam temporibus. Quo laudantium quaerat ad, deleniti optio ex, dignissimos, ea accusamus placeat tempora minima!
            </textarea>
          </div>
          <button
            id="btn-save"
            type="submit"
            class="btn btn-primary"
            onClick={this.btnSave}>Save to file</button>
        </form>
      </div>
    )
  }
}

export default Edit;
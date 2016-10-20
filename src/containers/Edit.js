import React, { Component } from 'react';
import { FontMenu, ColorMenu } from '../components';

import { connect } from 'react-redux';

import * as Actions from '../actions';

import { browserHistory } from 'react-router'

function mapStateToProps (state) {
  return { ...state};
}

var fileSaver = require('file-saver');
var JSZip = require("jszip");

var zip = new JSZip();

class Edit extends Component {
  constructor (props) {
    super(props);
    this.save = () => {
      this.saveStyle(this.props.elementsReducer.doc.elements);
    }
    this.update = () => {
      this.editSave(this.props.elementsReducer.doc.elements);
    }
  }

  saveStyle(){
    return $.ajax({
      url: '/api/usertemplate',
      type: 'POST',
      dataType: 'json',
      contentType: 'application/json',
      data: JSON.stringify({template: this.props.elementsReducer.doc.elements})
    })
    .then((data) => {
      console.log('save style data', data);
      this.props.newDoc(data._id);
      this.props.showSave('visible');
      browserHistory.push('/template/' + data._id);
    })
    .then(() => {
      setTimeout(() => {
        this.props.showSave('hidden');
      }, 3000);
    })
  }

  editSave(){
    return $.ajax({
      url: '/template/' + this.props.elementsReducer._id,
      type: 'PUT',
      dataType: 'json',
      contentType: 'application/json',
      data: JSON.stringify({template: this.props.elementsReducer.doc.elements})
    })
    .then(() => {
      this.props.showUpdate('hidden');
    }, 3000);
  }

  zipFile(text, text2) {
    /*Creating text for CSS*/
    var all = document.getElementsByTagName("*");
    var imgTag = document.getElementsByTagName("img");
    var beginningCSS = document.getElementsByTagName("style");
    var CSSText = "";
    CSSText += beginningCSS[0].innerHTML;
    for (var i=0, max=all.length; i < max; i++) {
      var elem = all[i];
      if (elem.className != "") {
        if (elem.style.length > 0) {
          CSSText += "\n." + elem.className + " {\n";
          for (var j = 0; j < elem.style.length; j++) {
            CSSText += "  " + elem.style[j] + ": ";
            var prop = elem.style[j];
            if (prop === "justify-content"){
              CSSText += elem.style.justifyContent + ";\n";
            }
            if (prop === "background-color"){
              CSSText += elem.style.backgroundColor + ";\n";
            }
            if (prop === "height"){
              CSSText += elem.style.height + ";\n";
            }
            if (prop === "width"){
              CSSText += elem.style.width + ";\n";
            }
            if (prop === "font-family"){
              CSSText += elem.style.fontFamily + ";\n";
            }
          }
          CSSText += "}\n";
        }
      }
    }

    /*Creating text for HTML*/
    var HTMLText = "";
    HTMLText += '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <title>[Your Title Here]</title>\n  <link rel="stylesheet" type="text/css" href="styles.css">\n</head>\n<body>\n  ' + HTMLText + '\n</body>\n</html>';
    var output = $(".template-container").html();
    output = output.replace(/style\="(.*?)\"/g, "");
    //console.log(output);
    HTMLText += output;

    /*Creating files to be saved as .zip*/
    var HTMLBlob = new Blob([HTMLText], {type: "text/plain;charset=utf-8"});
    var CSSBlob = new Blob([CSSText], {type: "text/plain;charset=utf-8"});
    zip.file("index.html", HTMLBlob);
    zip.file("styles.css", CSSBlob);
    zip.generateAsync({type:"blob"})
    .then(function(HTMLBlob, CSSBlob) {
      // see FileSaver.js
      fileSaver.saveAs(HTMLBlob, "styles-for-hue.zip");
      fileSaver.saveAs(CSSBlob, "styles-for-hue.zip");
    });
  }

  render() {
    let fontComponentOpenClass = " ";
    if(this.props.menuShow.showFontMenu === true){
      fontComponentOpenClass = "open";
    };
    let divComponentOpenClass = " ";
    if(this.props.menuShow.showDivMenu === true){
      divComponentOpenClass = "open";
    };
    let fontComponent = null;
    if (this.props.menuShow.showFontMenu === true) {
      fontComponent = (
        <FontMenu
          fontList={this.props.fonts.items}
          selectedElement={this.props.selectedElement}
          elements={this.props.elementsReducer.doc.elements}
          changeSelectedFont={this.props.changeSelectedFont}
          changeFont={this.props.changeFont}
          changeFontColor={this.props.changeFontColor}
          changeFontSize={this.props.changeFontSize}
        />
      );
    };
    let divComponent = null;
    if (this.props.menuShow.showDivMenu === true) {
      divComponent = (
        <ColorMenu
          colorPalette={this.props.colors.colorPalette}
          selectedElement={this.props.selectedElement}
          elements={this.props.elementsReducer.doc.elements}
          changeColor={this.props.changeColor}
          changeColorPalette={this.props.changeColorPalette}
          changeDivWidth={this.props.divWidth}
        />
      );
    };
    return (
      <div
        className="editColumn"
      >
        <h1> Edit </h1>
          <button
            className="view-css"
            onClick={ ()=> {
              if (this.props.sideBar.showCss === false) {
                this.props.showCss(true);
              } else {
                this.props.showCss(false);
              }
            }
          }>
            &lt;CSS&gt;
          </button>
        <div
          className="font-menu">
          <button
            id="button-show"
            className="font-button"
            onClick={ () => {
              if (this.props.menuShow.showFontMenu === false) {
                this.props.showFontMenu(true);
              } else {
                this.props.showFontMenu(false);
              }
            }
          }>
            <i id="icon" className={"fa fa-caret-right" + " " +
            fontComponentOpenClass}></i>
          </button>
          <h3>Font</h3>
          { fontComponent }
        </div>
        <div
          className="div-menu"
        >
          <span>
            <button
              id="button-show"
              className="div-button"
              onClick={ () => {
                if (this.props.menuShow.showDivMenu === false) {
                  this.props.showDivMenu(true);
                } else {
                  this.props.showDivMenu(false);
                }
              }}
            >
              <i id="icon" className={"fa fa-caret-right" + " " + divComponentOpenClass}></i>
            </button>
            <h3>Div</h3>
          </span>
          <div>
            { divComponent }
          </div>
        </div>
        <div>
          <button
            className="save"
            type="submit"
            onClick={this.save}
          >
            Save Template
          </button>
          <div
            className="save-popup"
          >
            <div
              className="save-content"
              style={this.props.savePopup}
            >
              <span
                className="exit"
              >
                x
              </span>
              <p>
                Saved!
              </p>
            </div>
          </div>
        </div>
        <div>
          <button
            className="update"
            type="submit"
            onClick={this.update}
          >
            Update Template
          </button>
          <div>
            Updated!
          </div>
        </div>
        <form>
          <button
            className="save"
            type="submit"
            onClick={this.zipFile}>Save Zip with HTML and CSS files</button>
        </form>
        <div className="current-styles-container">
          <h6>Current Element Styles</h6>
          <div className="current-elem-styles"
          >
            {this.props.showElementStyles(this.props.elementsReducer.selectedElement.selectedStyle)}
          </div>
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps, Actions)(Edit);
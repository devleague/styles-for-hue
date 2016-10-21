import React, { Component } from 'react';
import { FontMenu, ColorMenu, SavePopover } from '../components';

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
    this.handleClick = this._handleClick.bind(this);
    this.saveFilePopup = this.saveFilePopup.bind(this);
  }

  _handleClick(e) {
    e.preventDefault();
    console.log(this.props.popover.modal);
    if (this.props.popover.modal) {
      this.props.hidePopover();
    } else {
      this.props.showPopover();
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
            if (prop === "color"){
              CSSText += elem.style.color + ";\n";
            }
            if (prop === "font-size"){
              CSSText += elem.style.fontSize + ";\n";
            }
          }
          CSSText += "}\n";
        }
      }
    }

    /*Creating text for HTML*/
    var HTMLText = "";
    var output = $(".template-container").html();
    HTMLText += '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <title>[Your Title Here]</title>\n  <link rel="stylesheet" type="text/css" href="styles.css">\n</head>\n<body>\n  ' + output + '\n</body>\n</html>';
    HTMLText = HTMLText.replace(/style\="(.*?)\"/g, "");

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

  saveFilePopup(e) {
    this.save();
    this.handleClick(e);
  };

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
          <div
            className="font-choices"
          >
            <div
              className="font-toggle"
            >
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
            </div>
          </div>
          { fontComponent }
        </div>
        <br/>
        <div
          className="div-menu"
        >
          <div
            className="div-choices"
          >
            <div
              className="div-toggle"
            >
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
            </div>
          </div>
          { divComponent }
        </div>
        <div>
          <button
            className="save"
            type="submit"
            onClick={ this.saveFilePopup }
          >
            Save Template
          </button>
           <SavePopover
            show={ this.props.popover.modal }
            click={ this.handleClick }
            animationOptions={{duration: 0.2, timing: 'ease-in'}}
          />
        </div>
        <div>
          <button
            className="update"
            type="submit"
            onClick={this.update}
          >
            Update Template
          </button>
          <div
            className="update-content"
          >
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
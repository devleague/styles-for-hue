import React, { Component } from 'react';
import { FontMenu, ColorMenu, SavePopover, UpdatePopover } from '../components';
import { connect } from 'react-redux';

import * as Actions from '../actions';

import { browserHistory } from 'react-router'

function mapStateToProps (state) {
  return { ...state};
}

var fileSaver = require('file-saver');
var JSZip = require("jszip");
var beautify_html = require('js-beautify').html;
var beautify_CSS = require('js-beautify').css;

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
    this.handleClickUpdate = this.__handleClick.bind(this);
    this.updatePopup = this.updatePopup.bind(this);
    this.previewFile = this.previewFile.bind(this);
  }

  _handleClick(e) {
    e.preventDefault();
    if (this.props.popover.modal) {
      this.props.hidePopover();
    } else {
      this.props.showPopover();
    }
  }

  __handleClick(e) {
    e.preventDefault();
    if (this.props.popover.updatepop) {
      this.props.hideUpdate();
    } else {
      this.props.showUpdate();
    }
  }

  saveFilePopup(e) {
    this.save();
    this.handleClick(e);
    this.props.updateButtonShow();
  };

  updatePopup(e) {
    this.update();
    this.handleClickUpdate(e);
  }

  saveStyle(){
    return $.ajax({
      url: '/api/usertemplate',
      type: 'POST',
      dataType: 'json',
      contentType: 'application/json',
      data: JSON.stringify({template: this.props.elementsReducer.doc})
    })
    .then((data) => {
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
      url: `/api/template/${this.props.hash}`,
      type: 'PUT',
      dataType: 'json',
      contentType: 'application/json',
      data: JSON.stringify({template: this.props.elementsReducer.doc})
    })
  }

  changeUser(){
    return $.ajax({
      url: '/api/usertemplate',
      dataType: 'json',
      data: JSON.stringify({})
    })
    .then((data) => {
      var id = "";
      var idArray = data.map((templates) => {
        return templates._id;
      })
      for (var i = 0; i < idArray.length; i++){
        var options = "";
        var windowURL = window.location.href;
        var userDivLength = $('#Input').find('a').length;
        var idArrayLength = idArray.length;
        if (userDivLength <= i + 1) {
          if (windowURL.includes("/template/") === true) {
            $('#Input').append('<a href="' + idArray[i] + '"' + '>' + idArray[i] + '</a>');
          }
          if (windowURL.includes("/template/") === false) {
            $('#Input').append('<a href="template/' + idArray[i] + '"' + '>' + idArray[i] + '</a>');
          }
        }
      };
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
            CSSText += elem.style[j] + ": ";
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
            if (prop === "background-image"){
              CSSText += elem.style.backgroundImage + ";\n";
            }
          }
          CSSText += "}\n";
        }
      }
    }

    CSSText = beautify_CSS(CSSText);

    /*Creating text for HTML*/
    var HTMLText = "";
    var output = $(".template-container").html();
    HTMLText += '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <title>[Your Title Here]</title>\n  <link rel="stylesheet" type="text/css" href="styles.css">\n</head>\n<body>\n  ' + output + '\n</body>\n</html>';
    HTMLText = HTMLText.replace(/style\="(.*?)\"/g, "");

    HTMLText = beautify_html(HTMLText);

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

  previewFile() {
      var preview = document.querySelector('img');
      var file    = document.querySelector('input[type=file]').files[0];
      var reader  = new FileReader();

      reader.addEventListener("load", function () {
        preview.src = reader.result;
      }, false);

      reader.onloadend = () => {
        this.props.changeImage(reader.result);
      }

      if (file) {
        reader.readAsDataURL(file);
      }
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
    let templateComponentOpenClass = " ";
    if(this.props.menuShow.showTemplateMenu === true){
      templateComponentOpenClass = "open";
    };
    let uploadComponentOpenClass = " ";
    if(this.props.menuShow.showUploadMenu === true){
      uploadComponentOpenClass = "open";
    };
    let fontComponent = null;
    if (this.props.menuShow.showFontMenu === true) {
      fontComponent = (
        <FontMenu
          fontList={this.props.fonts.items}
          selectedElement={this.props.elementsReducer.selectedElement}
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
          selectedElement={this.props.elementsReducer.selectedElement}
          elements={this.props.elementsReducer.doc.elements}
          changeColor={this.props.changeColor}
          changeColorPalette={this.props.changeColorPalette}
          changeDivWidth={this.props.divWidth}
        />
      );
    };
    let templateComponent = null;
    if (this.props.menuShow.showTemplateMenu === true) {
      templateComponent = (
        <div className="dropdown">
          <button className="dropbtn"
            onMouseOver={this.changeUser}>Dropdown</button>
          <div className="dropdown-content"
            id="Input"
          >
          <a href="/template">Create New Template</a>
          </div>
        </div>
      )
    }
    let updateComponent = null;
    if (this.props.hash) {
      updateComponent = (
        <div className="functional-button-container">
          <button
            className="functional-button"
            type="submit"
            onClick={ this.updatePopup }
          >
            Update Template
        </button>
        <UpdatePopover
          reveal={this.props.popover.updatepop}
          update={ this.handleClickUpdate }
        />
        </div>
      )
    }
    return (
      <div
        className="edit-container"
      >
        <h1>Style Editor</h1>
        <div
          className="menu-option">
          <div
            className="menu-option-title"
            onClick={ () => {
              if (this.props.menuShow.showFontMenu === false) {
                this.props.showFontMenu(true);
              } else {
                this.props.showFontMenu(false);
              }
            }}
          >
            <h3>Font</h3>
            <button
              id="button-show"
              className="menu-button"
            >
              <i id="icon" className={"fa fa-caret-right" + " " +
              fontComponentOpenClass}></i>
            </button>
          </div>
          { fontComponent }
        </div>
        <div
          className="menu-option"
        >
          <div
            className="menu-option-title"
            onClick={ () => {
              if (this.props.menuShow.showDivMenu === false) {
                this.props.showDivMenu(true);
              } else {
                this.props.showDivMenu(false);
              }
            }}
          >
            <h3>Colors</h3>
            <button
              id="button-show"
              className="menu-button"
            >
              <i id="icon" className={"fa fa-caret-right" + " " + divComponentOpenClass}></i>
            </button>
          </div>
          { divComponent }
        </div>
        <div
          className="menu-option"
        >
          <div
            className="menu-option-title"
            onClick={ () => {
              if (this.props.menuShow.showTemplateMenu === false) {
                this.props.showTemplateMenu(true);
              } else {
                this.props.showTemplateMenu(false);
              }
            }}
          >
            <h3>Saved Templates</h3>
            <button
              id="button-show"
              className="menu-button"
            >
              <i id="icon" className={"fa fa-caret-right" + " " + templateComponentOpenClass}></i>
            </button>
          </div>
          { templateComponent }
        </div>
        <div className="functional-button-container">
          <button
            className="functional-button"
            type="submit"
            onClick={ this.saveFilePopup }
          >
            Save Template
          </button>
          <SavePopover
            show={ this.props.popover.modal }
            click={ this.handleClick }
          />
        </div>
          { updateComponent }
        <form className="functional-button-container">
          <button
            className="functional-button"
            type="submit"
            onClick={this.zipFile}>Export HTML and CSS Files</button>
        </form>
        <div className="current-styles-container">
          <h6>Current Element Styles</h6>
          <div className="current-elem-styles"
          >
            {this.props.showElementStyles(this.props.elementsReducer.selectedElement.selectedStyle)}
          </div>
        </div>

        <div className="menu-option">
          <div
            className="menu-option-title"
            onClick={ () => {
              if (this.props.menuShow.showUploadMenu === false) {
                this.props.showUploadMenu(true);
              } else {
                this.props.showUploadMenu(false);
              }
            }}
          >
            <h3>Change Photo</h3>
            <button
              id="button-show"
              className="menu-button"
            >
              <i id="icon" className={"fa fa-caret-right" + " " + uploadComponentOpenClass}></i>
            </button>
          </div>
          <div>
            <input type="file" onChange={this.previewFile}></input>
            <img src="" height="200" alt="Image preview..."></img>
          </div>
        </div>

      </div>
    )
  }
}

export default connect(mapStateToProps, Actions)(Edit);

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
      let styleName = document.getElementById('template-name').value;
      this.saveStyle(styleName);
      return this.templateNames()
      .then((templates) => {
        this.props.getTemplates(templates);
      })
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

  componentDidMount() {
    this.templateNames()
      .then((templates) => {
        this.props.getTemplates(templates);
      })
  }

  switchTemplates() {
    let id = document.getElementById('userTemplate').value;
    browserHistory.push(`/template/${id}`);
    return this.props.loadSavedTheme(id)
      .then((doc) => {
        this.props.setElements(doc);
      })
  }

  _handleClick() {
    // e.preventDefault();
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

  saveFilePopup(styleName) {
    this.save(styleName);
    this.handleClick();
    this.props.updateButtonShow();
  };


  updatePopup(e) {
    this.update();
    this.handleClickUpdate(e);
  }

  templateNames() {
    return $.ajax({
      url: '/api/usertemplate',
      dataType: 'json'
    })
  }

  saveStyle(styleName){
    return $.ajax({
      url: '/api/usertemplate',
      type: 'POST',
      dataType: 'json',
      contentType: 'application/json',
      data: JSON.stringify({...this.props.elementsReducer, name: styleName})
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
      data: JSON.stringify({...this.props.elementsReducer, doc: {...this.props.elementsReducer.doc, name: styleName}})
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
      var str = "";
      var idArray = data.map((templates) => {
        var date = new Date();
        str = (date.getMonth() + 1) + "-" + date.getDate() + "-" + date.getFullYear() + " " +  date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
        return templates._id;
      })
      for (var i = 0; i < idArray.length; i++){
        var options = "";
        var windowURL = window.location.href;
        var userDivLength = $('#Input').find('a').length;
        var idArrayLength = idArray.length;
        if (userDivLength <= i + 1) {
          if (windowURL.includes("/template/") === true) {
            $('#Input').append('<a href="' + idArray[i] + '"' + '>' + 'style' + (i + 1) + ':' + ' ' + str + '</a>');
          }
          if (windowURL.includes("/template/") === false) {
            $('#Input').append('<a href="template/' + idArray[i] + '"' + '>' + 'style' + (i + 1) + ':' + ' ' + str + '</a>');
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

    /*Creating text for README.md*/
    var READMEText = 'Styles For Hue\n================\n\nCreate a user friendly app..\n\n###Created By:\nLisa Zhou (https://github.com/herrolisa), \nChristie Reindle (https://github.com/creindle), \nSheena Galutira (https://github.com/sogalutira), \nNikki Kobayashi (https://github.com/ynikki), \nBryce Saito (https://github.com/tokumori)\n\nTUTORIAL\n================================\n\nOn the Home page click on Start Styling or Template on the navigation bar.\n\nUse the Style Editor Sidebar and click on the icons next to the Font, Div, Images and Saved Templates to show the menu to change styles.\n\nFont\nPick Your Element: Change your fonts based on the type of element (p, h1, selected, or all).\nPick Your Font: Choose a font family.\nFont Color: Change colors using the color wheel.\nFont Size: Type in desired font size number.\n\nDiv\nPick Your Palette: Use preset palettes to change div colors.\nPick Your Color: Select a div and change the color of the individual div.\n\nSaving:\nName your template/style using the Name Your Style input field. You may choose to use the default name of Hue with a timestamp.\nClick on Save Styles to create a unique link to your template for later editing.\nUse Update Styles to update your current saved template.\nClick on Export HTML and CSS Files to download a .zip file of the HTML and CSS onto your computer.\n\nLoading Saved Styles/Templates:\nClick on Saved Styles in the Style Editor Sidebar\nUsing the Choose Your Template dropdown menu, select a template to load.';

    /*Creating files to be saved as .zip*/
    var HTMLBlob = new Blob([HTMLText], {type: "text/plain;charset=utf-8"});
    var CSSBlob = new Blob([CSSText], {type: "text/plain;charset=utf-8"});
    var READMEBlob = new Blob([READMEText], {type: "text/plain;charset=utf-8"});
    zip.file("index.html", HTMLBlob);
    zip.file("styles.css", CSSBlob);
    zip.file("README.md", READMEBlob);
    zip.generateAsync({type:"blob"})
    .then(function(READMEBlob, HTMLBlob, CSSBlob) {
      // see FileSaver.js
      fileSaver.saveAs(READMEBlob, "thank-hue.zip");
      fileSaver.saveAs(HTMLBlob, "thank-hue.zip");
      fileSaver.saveAs(CSSBlob, "thank-hue.zip");
    });
  }

  previewFile() {
      var preview = document.querySelector('img');
      var file    = document.querySelector('input[type=file]').files[0];
      var reader  = new FileReader();

      if (file.size > 16 * Math.pow(1024, 2)) {
        alert("Your file size is: " + file.size + "\nPlease select a smaller file size.");
        return;
      }

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

// Creating time stamp for template name
  timeAMPM(date) {
    var str = (date.getMonth() + 1) + "-" + date.getDate() + "-" + date.getFullYear();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    var ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0'+minutes : minutes;
    var strTime = hours + ':' + minutes + ':' + seconds + ' ' + ampm;
    return str + ' ' + strTime;
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
    let uploadComponentOpenClass = " ";
    if(this.props.menuShow.showUploadMenu === true){
      uploadComponentOpenClass = "open";
    };
    let templateComponentOpenClass = " ";
    if(this.props.menuShow.showTemplateMenu === true){
      templateComponentOpenClass = "open";
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
          selectedColorPalette={this.props.colors.selectedColorPalette}
          selectedElement={this.props.elementsReducer.selectedElement}
          elements={this.props.elementsReducer.doc.elements}
          changeColor={this.props.changeColor}
          changeColorPalette={this.props.changeColorPalette}
          changeDivWidth={this.props.divWidth}
          styles={this.props.styles.styles}
        />
      );
    };
    let uploadComponent = null;
    if (this.props.menuShow.showUploadMenu === true) {
      uploadComponent = (
        <div className="menu-show-details">
          <h4>Upload New Hero Image</h4>
          <input type="file" onChange={this.previewFile}></input>
          <img src="" className="preview-upload" alt="Image preview..."></img>
          <h4>OR Add Hero Image URL</h4>
          <form onSubmit={(event)=> {
              event.preventDefault();
              return this.props.changeImage(document.getElementById('url').value);
            }
          }>
            <input type="text" id="url"/>
            <input type="submit" value="Submit"/>
          </form>
        </div>
      )
    }
    let templates = this.props.elementsReducer.templates.map((template) => {
      return (
        <option
          key={template._id}
          value={template._id}
        >
          {template.name}
        </option>
      )
    })
    let templateDropdown = [];
    if (this.props.menuShow.showTemplateMenu === true) {
      templateDropdown = (
        <div className="menu-show-details">
          <h4>Choose Your Template</h4>
            <select
              id="userTemplate"
              defaultValue="0"
              onChange={() => this.switchTemplates()}
            >
              <option value="0" disabled="disabled">SELECT TEMPLATE</option>
              {templates}
            </select>
          <div className="functional-button-container">
            <a href="/template" className="functional-button">Reset Template &<br/> Create New Style</a>
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
            Update Styles
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
            <h3><i className="fa fa-font menu-icon"></i>Font</h3>
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
            <h3><i className="fa fa-paint-brush menu-icon"></i>Colors</h3>
            <button
              id="button-show"
              className="menu-button"
            >
              <i id="icon" className={"fa fa-caret-right" + " " + divComponentOpenClass}></i>
            </button>
          </div>
          { divComponent }
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
            <h3><i className="fa fa-file-photo-o menu-icon"></i>Images</h3>
            <button
              id="button-show"
              className="menu-button"
            >
              <i id="icon" className={"fa fa-caret-right" + " " + uploadComponentOpenClass}></i>
            </button>
          </div>
          { uploadComponent }
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
            <h3><i className="fa fa-files-o menu-icon"></i>Saved Styles</h3>
            <button
              id="button-show"
              className="menu-button"
            >
              <i id="icon" className={"fa fa-caret-right" + " " + templateComponentOpenClass}></i>
            </button>
          </div>
          {templateDropdown}
        </div>
        <div className="functional-button-container">
          <form onSubmit={(event)=> {
              event.preventDefault();
              return this.saveFilePopup();
            }
          }>
          <div>
          Name Your Style:
            <input type="text" id="template-name" required="true" placeholder="Enter Styles Name"
              defaultValue={"Hue " + this.timeAMPM(new Date)
            }/>
          </div>
            <input
              className="functional-button"
              type="submit"
              value="Save Styles"
            >
            </input>
          </form>
          <SavePopover
            show={ this.props.popover.modal }
            click={ this.handleClick }
          />
        </div>
          { updateComponent }
        <div className="functional-button-container">
          <button
            className="functional-button"
            onClick={this.zipFile}>Export HTML and CSS Files</button>
        </div>
        { /* <div className="current-styles-container">
          <h6>Current Element Styles</h6>
          <div className="current-elem-styles"
          >
            {this.props.showElementStyles(this.props.elementsReducer.selectedElement.selectedStyle)}
          </div>
        </div> */}


      </div>
    )
  }
}

export default connect(mapStateToProps, Actions)(Edit);
